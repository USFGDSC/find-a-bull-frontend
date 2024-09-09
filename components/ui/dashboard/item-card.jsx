import React from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const ItemCard = ({ item, onCheckboxChange }) => {
  return (
    <Card className="p-6 bg-gradient-to-r from-gray-200 to-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-semibold text-gray-900">{item.name}</p>
        <Checkbox
          checked={item.added}
          onCheckedChange={() => onCheckboxChange(item.id)}
          className="text-gray-600"
        />
      </div>

      {/* Item Description */}
      <p className="text-gray-700 mb-4">{item.description}</p>

      {/* Item Image (if available) */}
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
    </Card>
  );
};

export default ItemCard;
