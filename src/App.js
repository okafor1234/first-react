import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    { id: 'e1', title: "Toilet", amount: 30.1, date: new Date(2021, 2, 21) },
    { id: 'e2', title: "House Insurance", amount: 34.1, date: new Date(2022, 6, 15) },
    { id: 'e3', title: "Land", amount: 50.1, date: new Date(2019, 8, 10) },
    { id: 'e4', title: "Hotel", amount: 10.1, date: new Date(2020, 10, 5) },
];

const App = () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
