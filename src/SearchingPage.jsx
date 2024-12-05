import React from 'react'

import { useState } from 'react';
import CourseCard from './components/CourseCard';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import NoDataCard from './components/Nodata';

export default function SearchingPage() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (event) => {
        if (event.key === 'Enter' && query.trim()) {
            const searchUrl = `https://welkin-search-api.vercel.app/search/${query}`;
            fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data);

                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                });
        }
        else if (!query.trim()) {
            setSearchResults(courses);
        }
    };
  return (
      <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-7xl mx-auto py-6">
              <SearchBar setQuery={setQuery} handleSearch={handleSearch} query={query} />
              <div className="space-y-4 mt-6">
                  {/* {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))} */}
                  {searchResults.length > 0 ? (
                      searchResults.map((course, index) => (
                          <CourseCard key={index} {...course} />
                      ))
                  ) : (
                      <NoDataCard />
                  )}
              </div>
          </main>
      </div>
  )
}
