import React from "react";

const Filter = ({ onCategoryChange }) => {
  const categories = ["All", "Dairy", "Fruits", "Vegetables"];

  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="filter">
      <select value="All" onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
