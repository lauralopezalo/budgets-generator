import React from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import BudgetsList from './components/BudgetsList';
import AddNewBudget from './components/AddNewBudget';


const Budgets = () => {
    const [budgets, setBudgets] = useLocalStorage('budgets', []);

    // Recibe por props el nuevo presupuesto que dede añadir a budgets
    const handleAddBudget = (budget) => {
        setBudgets([...budgets, budget]);
    };

    // Recibe por props la fecha del presupuesto que dede eliminar de budgets
    const handleDeleteBudget = (date) => {
        const newList = budgets.filter((budget) => budget.date !== date);
        setBudgets(newList);
    };


    return (
        <div className="min-h-screen flex flex-wrap justify-evenly bg-bermuda" style={{ overflowX: "auto" }}>
            <div className="w-full md:w-auto">
                <AddNewBudget budgets={budgets} setBudgets={setBudgets} onAddBudget={handleAddBudget}></AddNewBudget>
            </div>
            <div className="w-full md:w-3/5">
                <BudgetsList budgets={budgets} setBudgets={setBudgets} onDeleteBudget={handleDeleteBudget}></BudgetsList>
            </div>
        </div>
    );
}

export default Budgets;