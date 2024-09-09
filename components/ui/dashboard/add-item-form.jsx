import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleAddItem = () => {
    if (newItem.trim() !== "" && description.trim() !== "") {
      onAddItem({
        name: newItem,
        description,
        image,
      });
      setNewItem("");
      setDescription("");
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // This will create a local preview of the uploaded image
    }
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Item Name */}
      <Input
        type="text"
        placeholder="Item name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />

      {/* Item Description */}
      <textarea
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      ></textarea>

      {/* Image Upload */}
      <div className="flex items-center space-x-4">
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
      </div>

      {/* Add Item Button */}
      <Button
        onClick={handleAddItem}
        className="w-full text-white font-semibold px-4 py-3 rounded-lg hover:bg-gray-700 transition"
      >
        Add Item
      </Button>
    </div>
  );
};

export default AddItemForm;
