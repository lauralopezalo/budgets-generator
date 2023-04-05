import React, { useEffect, useState } from 'react';
import Panel from './Panel/Panel';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useLocation } from "react-router-dom";

const AddNewBudget = (props) => {
    const [budgetName, setBudgetName] = useLocalStorage('budgetName', '');
    const [clientName, setClientName] = useLocalStorage('clientName', '');

    const [webpage, setWebpage] = useLocalStorage('webpage', false);
    const [seo, setSeo] = useLocalStorage('seo', false);
    const [googleAds, setGoogleAds] = useLocalStorage('googleAds', false);
    const [totalPrice, setTotalPrice] = useState(0);

    const [numPages, setNumPages] = useLocalStorage('numPages', 1);
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1);


    // Función encargada de manejar los cambios de estado en los inputs. 
    // Se extraen las propiedades "name" y "value" del objeto "event.target"
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'budgetName') {
            setBudgetName(value);
        } else if (name === 'clientName') {
            setClientName(value);
        }
    };


    // Función encargada de manejar los cambios en los checkboxes. 
    // Se extraen las propiedades "name" y "checked" del objeto "event.target"
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        switch (name) {
            case "webpage":
                setWebpage(checked);
                break;
            case "seo":
                setSeo(checked);
                break;
            case "googleAds":
                setGoogleAds(checked);
                break;
            default:
                break;
        }
    }


    // useEffect que calcula el precio total en función de las opciones seleccionadas. 
    // Una vez calculado el precio total, se actualiza el totalPrice mediante la función setTotalPrice.
    useEffect(() => {
        let totalPrice = 0;
        if (webpage) totalPrice += 500 + (numPages * numLanguages * 30);
        if (seo) totalPrice += 300;
        if (googleAds) totalPrice += 200;
        setTotalPrice(totalPrice);

        const params = new URLSearchParams({
            webpage,
            seo,
            googleAds,
            numPages,
            numLanguages
        });
        window.history.pushState({}, null, `${window.location.origin}/budget?${params.toString()}`);

    }, [webpage, seo, googleAds, numPages, numLanguages, setTotalPrice]);


    // Crea un objeto newBudget y lo pasa por props al componente padre Budget
    const saveBudget = () => {
        const date = new Date();
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;
        const newBudget = {
            budgetName,
            client: clientName,
            webpage,
            numPages,
            numLanguages,
            seo,
            googleAds,
            totalPrice,
            date,
            formattedDate
        };
        props.onAddBudget(newBudget)
        resetForm();
    };

    // Función que vacía los inputs
    const resetForm = () => {
        setBudgetName('');
        setClientName('');
        setWebpage(false);
        setSeo(false);
        setGoogleAds(false);
        setNumPages(1);
        setNumLanguages(1);
    };



    // Función que utiliza el hook useLocation() de React Router para obtener la información de la URL actual. 
    // El hook useEffect() utiliza el objeto URLSearchParams para obtener los parámetros de consulta de la URL actual. 
    // Si se encuentran estos parámetros en la URL, el código actualiza los estados correspondientes

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        const webpageValue = searchParams.get("webpage");
        if (webpageValue !== null) {
            setWebpage(webpageValue === "true");
        }

        const seoValue = searchParams.get("seo");
        if (seoValue !== null) {
            setSeo(seoValue === "true");
        }

        const googleAdsValue = searchParams.get("googleAds");
        if (googleAdsValue !== null) {
            setGoogleAds(googleAdsValue === "true");
        }

        const numPagesValue = searchParams.get("numPages");
        if (numPagesValue !== null) {
            setNumPages(parseInt(numPagesValue));
        }

        const numLanguagesValue = searchParams.get("numLanguages");
        if (numLanguagesValue !== null) {
            setNumLanguages(parseInt(numLanguagesValue));
        }
    }, [location]);




    return (
        <div className='min-h-screen flex flex-col justify-center pl-20'>
            <div className='bg-white rounded-2xl p-12'>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-5">Create a new budget</h1>
                <div className='my-2'>
                    <label className="text-base leading-8 text-gray-700">Budget:</label>
                    <input
                        placeholder="Enter the budget name"
                        type="text"
                        name="budgetName"
                        value={budgetName}
                        onChange={handleInputChange}
                        className="h-10 w-full rounded border p-2 text-sm focus:outline-none focus:shadow-outline focus:border-2 focus:border-tangerine" />
                </div>
                <div className='my-2'>
                    <label className="text-base leading-8 text-gray-700">Customer:</label>
                    <input
                        placeholder="Enter customer name"
                        type="text"
                        name="clientName"
                        value={clientName}
                        onChange={handleInputChange}
                        className="h-10 w-full rounded border p-2 text-sm focus:outline-none focus:shadow-outline focus:border-2 focus:border-tangerine" />
                </div>
                <div className='my-2'>
                    <input
                        type="checkbox"
                        name="webpage"
                        checked={webpage}
                        onChange={handleCheckboxChange}
                    />
                    <label className="text-base leading-8 text-gray-700 ml-2">Web Page (500 €)</label>
                </div>
                <Panel
                    numPages={numPages}
                    setNumPages={setNumPages}
                    numLanguages={numLanguages}
                    setNumLanguages={setNumLanguages}
                    isVisible={webpage}>
                </Panel>
                <div className='my-2'>
                    <input
                        type="checkbox"
                        name="seo"
                        checked={seo}
                        onChange={handleCheckboxChange}
                    />
                    <label className="text-base leading-8 text-gray-700 ml-2">SEO consulting (300 €)</label>
                </div>
                <div className='my-2'>
                    <input
                        type="checkbox"
                        name="googleAds"
                        checked={googleAds}
                        onChange={handleCheckboxChange}
                    />
                    <label className="text-base leading-8 text-gray-700 ml-2">Google Ads campaign (200 €)</label>
                </div>
                <h3 className="text-lg leading-8 text-gray-700 my-5">Total price: {totalPrice} €</h3>
                <button
                    onClick={saveBudget}
                    className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-tangerine hover:text-white active:bg-orange-500">
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddNewBudget;