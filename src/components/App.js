import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ShoppingList from "./ShoppingList";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleToggleMode() {
    setIsDarkMode((mode) => !mode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleMode}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ItemForm onItemFormSubmit={handleAddItem} /> {/* ✅ Only once here */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
