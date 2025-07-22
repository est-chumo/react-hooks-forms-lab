import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(text) {
    setSearchText(text);
  }

  const filteredItems = items
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchText={searchText}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
