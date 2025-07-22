import React, { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName(""); // clear form
    setCategory("Produce");
  
  }
 function handleSubmit(e) {
  e.preventDefault();
  const newItem = {
    id: crypto.randomUUID(),
    name,
    category,
  };
  onItemFormSubmit(newItem);   setName("");
  setCategory("Produce");
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
          <option value="Meat">Meat</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
