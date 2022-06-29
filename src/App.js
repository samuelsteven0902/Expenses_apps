import { useState } from "react";
import Expenses from "./component/Expense/Expenses";

import NewExpense from "./component/NewExpense/NewExpense"

const DUMMY_EXPENSE = [
  {
    id :'1a',
    title : 'Monitor',
    amount : 5000000,
    date : new Date(2020, 7 ,14)
  },
  {
    id :'2a',
    title : 'HeadSet',
    amount : 1000000,
    date : new Date(2021, 6 ,4)
  },
  {
    id :'3a',
    title : 'Keyboard',
    amount : 1500000,
    date : new Date(2022, 4 ,1)
  },
  {
    id :'4a',
    title : 'Mouse',
    amount : 500000,
    date : new Date(2022, 2 ,24)
  },
]


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
      </div>
  );
}

export default App;
