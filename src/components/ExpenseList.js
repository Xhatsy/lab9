import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      <h3>Список расходов</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <div>
              <span className="expense-title">{expense.title}</span>
              <span className="expense-date">
                {expense.date.toLocaleDateString()}
              </span>
            </div>
            <div className="expense-price">${expense.amount.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
