import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && date) {
      onAddExpense({
        id: Math.random().toString(),
        title,
        amount: parseFloat(amount),
        date: new Date(date),
      });
      setTitle('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <div className="expense-form">
      <h2>Додати нову витрату</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Назва витрати:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Назва витрати"
          />
        </div>
        <div className="form-control">
          <label>Сума:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Сума витрати"
          />
        </div>
        <div className="form-control">
          <label>Дата:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
