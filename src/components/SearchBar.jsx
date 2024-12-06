
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ setQuery, query, handleSearch }) {


  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1 relative">
        <div className="flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyDown={handleSearch}
            placeholder="Search for anime, movies, and public links etc."
            className="w-full px-4 py-2 focus:outline-none"
          />
          <Search className="absolute right-4 text-gray-400" size={20} />
        </div>
        <div className="absolute inset-0 border rounded-lg -z-10"></div>
      </div>
    </div>
  );
}
