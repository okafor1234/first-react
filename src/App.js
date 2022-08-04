import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";



function App() {
  const expenses = [
    { title: "Toilet", amount: 30.1, date: new Date(2021, 2, 21) },
    { title: "House Insurance", amount: 34.1, date: new Date(2022, 6, 21) },
    { title: "Land", amount: 50.1, date: new Date(2021, 8, 21) },
    { title: "Hotel", amount: 10.1, date: new Date(2020, 10, 21) },
  ];

  const AddExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }; 
  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseHandler} />
      <Expenses items={expenses}/> 
    </div>
  );
}

export default App;
