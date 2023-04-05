import React, { useState, useEffect } from "react";


const BudgetsList = (props, { onDeleteBudget }) => {

    const [sortedBudgets, setSortedBudgets] = useState([...props.budgets]);

    // Ordena por fecha (muestra primero los más recientes)
    const handleSortDate = () => {
        const sorted = [...sortedBudgets].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
        setSortedBudgets(sorted);
    };

    const handleSortAlphabetical = () => {
        const sorted = [...sortedBudgets].sort((a, b) => (a.budgetName > b.budgetName ? 1 : a.budgetName < b.budgetName ? -1 : 0));
        setSortedBudgets(sorted);
    };

    const handleSortReset = () => {
        setSortedBudgets([...props.budgets]);
    };

    const handleSearch = (event) => {
        const name = event.target.value;
        const filtered = props.budgets.filter((budget) =>
            budget.budgetName.toLowerCase().includes(name.toLowerCase())
        );
        setSortedBudgets(filtered);
    };


    // Actualiza la lista de presupuestos sortedBudgets (que es la que se muestra por pantalla) cada vez que cambia `budgets`
    useEffect(() => {
        setSortedBudgets(props.budgets);
    }, [props.budgets]);


    return (
        <div className="mt-24">
            <div>
                <input 
                    placeholder="Search by name" 
                    type="text" 
                    onChange={handleSearch} 
                    className="h-10 w-96 rounded border p-2 text-sm focus:outline-none focus:shadow-outline focus:border-2 focus:border-tangerine"/>
                <div className="w-full mx-auto">
                    <button
                        className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-tangerine hover:text-white focus:bg-tangerine focus:text-white"
                        onClick={handleSortDate}>
                        Sort by Date</button>
                    <button
                        className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 m-4 transition duration-500 ease select-none hover:bg-tangerine hover:text-white focus:bg-tangerine focus:text-white"
                        onClick={handleSortAlphabetical}>
                        Sort Alphabetically</button>
                    <button
                        className="border-2 border-tangerine bg-white font-bold text-tangerine rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-tangerine hover:text-white focus:bg-tangerine focus:text-white"
                        onClick={handleSortReset}>
                        Resert</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Budget
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Customer
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Date
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Services
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                Total price
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {sortedBudgets.map((budget) => (
                            <tr key={budget.date}>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {budget.budgetName}
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {budget.client}
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {budget.formattedDate}
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {budget.webpage && <div>Web page</div>}
                                    {budget.webpage && <div className="ml-4">Num of pages: {budget.numPages}</div>}
                                    {budget.webpage && <div className="ml-4">Num of languages: {budget.numLanguages}</div>}

                                    {budget.seo && <div>SEO consulting</div>}
                                    {budget.googleAds && <div>Google Ads campaign </div>}
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    {budget.totalPrice} €
                                </td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                    <button
                                        className="border-2 border-red-500 bg-white font-bold text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-500 hover:text-white active:bg-red-600"
                                        onClick={() => props.onDeleteBudget(budget.date)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BudgetsList;