import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseChart from './components/ExpenseChart';
import ExpenseList from './components/ExpenseList'; // Импортируем новый компонент
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  ]);
  
  const [selectedYear, setSelectedYear] = useState('2021');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="App">
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selectedYear={selectedYear} onChangeYear={changeYearHandler} />
      <ExpenseChart expenses={expenses} selectedYear={selectedYear} />
      <ExpenseList expenses={expenses} /> {/* Добавляем компонент списка расходов */}
    </div>
  );
};

export default App;
