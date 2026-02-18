import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
    {/* Controlled input */}
      <input 
      type="text" 
      name="search" 
      placeholder="Search..." 
      value={search} 
      onChange={(e) => onSearchChange(e.target.value)}
      />
    {/* Controlled select */}
      <select 
      name="filter" 
      value={selectedCategory}
      onChange={onCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

    </div>
  );
}

export default Filter;