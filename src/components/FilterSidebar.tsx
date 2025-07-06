
import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import StarRating from './StarRating';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    genre: true,
    rating: true,
    author: true,
    year: false
  });

  const [selectedFilters, setSelectedFilters] = useState({
    genres: [] as string[],
    minRating: 0,
    authors: [] as string[],
    yearRange: { min: 1900, max: 2024 }
  });

  const genres = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Science Fiction',
    'Fantasy', 'Biography', 'History', 'Self-Help', 'Thriller'
  ];

  const popularAuthors = [
    'Stephen King', 'J.K. Rowling', 'Agatha Christie', 'Dan Brown',
    'John Grisham', 'Nicholas Sparks', 'Maya Angelou', 'Ernest Hemingway'
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleGenreChange = (genre: string) => {
    const updatedGenres = selectedFilters.genres.includes(genre)
      ? selectedFilters.genres.filter(g => g !== genre)
      : [...selectedFilters.genres, genre];
    
    const newFilters = { ...selectedFilters, genres: updatedGenres };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...selectedFilters, minRating: rating };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      genres: [],
      minRating: 0,
      authors: [],
      yearRange: { min: 1900, max: 2024 }
    };
    setSelectedFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Genre Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('genre')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-800">Genre</h4>
          {expandedSections.genre ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        {expandedSections.genre && (
          <div className="space-y-2 animate-fade-in">
            {genres.map(genre => (
              <label key={genre} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.genres.includes(genre)}
                  onChange={() => handleGenreChange(genre)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{genre}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-800">Minimum Rating</h4>
          {expandedSections.rating ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        {expandedSections.rating && (
          <div className="animate-fade-in">
            <StarRating
              rating={selectedFilters.minRating}
              onRatingChange={handleRatingChange}
              size="md"
            />
            <p className="text-sm text-gray-600 mt-2">
              {selectedFilters.minRating > 0 
                ? `${selectedFilters.minRating} stars and above`
                : 'Any rating'
              }
            </p>
          </div>
        )}
      </div>

      {/* Author Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('author')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h4 className="text-md font-medium text-gray-800">Popular Authors</h4>
          {expandedSections.author ? (
            <ChevronUp className="h-4 w-4 text-gray-500" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-500" />
          )}
        </button>
        {expandedSections.author && (
          <div className="space-y-2 animate-fade-in max-h-48 overflow-y-auto">
            {popularAuthors.map(author => (
              <label key={author} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{author}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
