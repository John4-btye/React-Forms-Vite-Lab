import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

      const newItem = {
        id: crypto.randomUUID(),
        name: name,
        category: category,
      };

    {/* Call parent callback */}
      onItemFormSubmit(newItem);

    {/* Reset form */}
      setName("");
      setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}
    >
      <label htmlFor="name">Name:</label>
        <input 
        id="name"
        type="text" 
        name="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

      <label htmlFor="category">Category</label>
        <select 
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;