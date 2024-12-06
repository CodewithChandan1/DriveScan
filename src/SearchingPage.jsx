import React from 'react'

import { useState } from 'react';
import CourseCard from './components/CourseCard';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import NoDataCard from './components/Nodata';
import CourseCardSkeleton from './components/CardSkeleton';

let debounceTimeout;
export default function SearchingPage() {
   
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const handleSearch = (event) => {
        // if (event.key === 'Enter' && query.trim()) {
        const performSearch = (searchQuery) => {
            if (searchQuery.trim().length >= 3) {
                const apiUrl = import.meta.env.VITE_APP_API;
                console.log("env", apiUrl)
                const searchUrl = `${apiUrl}/${searchQuery}`;
            setIsLoading(true);
            fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data);

                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        else if (!query.trim()) {
            setSearchResults([]);
        }
    };


    const handleInputChange = (newQuery) => {
        setQuery(newQuery);

        if (newQuery.trim() === '') {
            setSearchResults([]); 
            setIsLoading(false); 
        } else {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                performSearch(newQuery);
            }, 300);
        }
    };
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto py-6">
                <SearchBar  setQuery={handleInputChange}  query={query} />
                <div className="space-y-4 mt-6">
                    {isLoading ? (
                      
                        Array.from({ length: 3 }).map((_, index) => (
                            <CourseCardSkeleton key={index} />
                        ))
                    ) : searchResults.length > 0 ? (
                        searchResults.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))
                    ) : (
                        <NoDataCard />
                    )}
                    {/* {searchResults.length > 0 ? (
                        searchResults.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))
                    ) : (
                        <NoDataCard />
                    )} */}
                </div>
            </main>
        </div>
    )
}
