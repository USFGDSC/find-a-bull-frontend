// pages/dashboard.js
"use client";

import React, { useState } from "react";
import SearchBar from "../ui/dashboard/search-bar";
import ItemCard from "../ui/dashboard/item-card";
import AddItemForm from "../ui/dashboard/add-item-form";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddItem = (newItem) => {
    const updatedItems = [
      ...items,
      {
        id: items.length + 1,
        name: newItem.name,
        description: newItem.description,
        image: newItem.image,
        added: false,
      },
    ];
    setItems(updatedItems);
  };

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, added: !item.added } : item
    );
    setItems(updatedItems);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-lg">
        <h1 className="text-4xl font-bold text-center  mb-8">
          Lost & Found Dashboard
        </h1>

        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Add Item Form */}
        <AddItemForm onAddItem={handleAddItem} />

        {/* Item List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
