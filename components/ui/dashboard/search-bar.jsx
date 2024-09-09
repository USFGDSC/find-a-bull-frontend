import React from "react";
import { Input } from "@/components/ui/input";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Input
      type="text"
      placeholder="Search items..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
    />
  );
};

export default SearchBar;
