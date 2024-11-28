import React from 'react';

const ExpenseFilter = ({ selectedYear, onChangeYear }) => {
  const handleYearChange = (event) => {
    onChangeYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <label>Фільтрувати витрати за роком:</label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
