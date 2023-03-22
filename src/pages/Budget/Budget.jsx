import React, { useEffect } from 'react';
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import { Panell } from './Budget.styles';
import { useLocalStorage } from '../../hooks/useLocalStorage'


const Budget = () => {
    const [webpage, setWebpage] = useLocalStorage('webpage', false);
    const [seo, setSeo] = useLocalStorage('seo', false);
    const [googleAds, setGoogleAds] = useLocalStorage('googleAds', false);
    const [totalPrice, setTotalPrice] = useLocalStorage('totalPrice', 0);

    const [numPages, setNumPages] = useLocalStorage('numPages', 1);
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1);


    function handleCheckboxChange(event) {
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

    useEffect(() => {
        let totalPrice = 0;
        if (webpage) totalPrice += 500 + (numPages * numLanguages * 30);
        if (seo) totalPrice += 300;
        if (googleAds) totalPrice += 200;
        setTotalPrice(totalPrice);
    }, [webpage, seo, googleAds, numPages, numLanguages, setTotalPrice]);


    function handleNumPagesChange(value) {
        const newValue = parseInt(value);
        setNumPages(newValue < 1 ? 1 : newValue);
    }

    function handleNumLanguagesChange(value) {
        const newValue = parseInt(value);
        setNumLanguages(newValue < 1 ? 1 : newValue);
    }

    return (
        <div>
            <h1>Pressupost Pàgina Web</h1> 
            <div>
                <input
                    type="checkbox"
                    name="webpage"
                    checked={webpage}
                    onChange={handleCheckboxChange}
                />
                <label>Pàgina Web (500 €)</label>
            </div>
            <Panell visible={webpage}>
                <div>
                    <label>Nombre de pàgines:</label>
                    <QuantitySelector
                        value={numPages}
                        onChange={(newValue) => handleNumPagesChange(newValue)}
                    />
                </div>
                <div>
                    <label>Nombre d'idiomes:</label>
                    <QuantitySelector
                        value={numLanguages}
                        onChange={(newValue) => handleNumLanguagesChange(newValue)}
                    />
                </div>
            </Panell>
            <div>
                <input
                    type="checkbox"
                    name="seo"
                    checked={seo}
                    onChange={handleCheckboxChange}
                />
                <label>Consultoria SEO (300 €)</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="googleAds"
                    checked={googleAds}
                    onChange={handleCheckboxChange}
                />
                <label>Campanya Google Ads (200 €)</label>
            </div>
            <h2>Preu Total: {totalPrice} €</h2>
        </div>
    );
}

export default Budget;