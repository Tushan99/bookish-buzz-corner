
import React, { useState } from 'react';
import { Grid, List, Search } from 'lucide-react';
import BookCard from '../components/BookCard';
import FilterSidebar from '../components/FilterSidebar';

const Books = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Sample books data
  const books = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      rating: 4.3,
      reviewCount: 2847,
      genre: 'Fiction',
      description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.'
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      rating: 4.6,
      reviewCount: 1923,
      genre: 'Science Fiction',
      description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.'
    },
    {
      id: '3',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 4.5,
      reviewCount: 3621,
      genre: 'Romance',
      description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.'
    },
    {
      id: '4',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      rating: 4.7,
      reviewCount: 1456,
      genre: 'Science Fiction',
      description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.'
    },
    {
      id: '5',
      title: 'The Guest List',
      author: 'Lucy Foley',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
      rating: 4.1,
      reviewCount: 2134,
      genre: 'Mystery',
      description: 'A wedding celebration turns dark and deadly in this deliciously wicked and atmospheric thriller.'
    },
    {
      id: '6',
      title: 'Educated',
      author: 'Tara Westover',
      cover: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop',
      rating: 4.4,
      reviewCount: 4567,
      genre: 'Biography',
      description: 'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.'
    }
  ];

  const handleFilterChange = (filters: any) => {
    console.log('Filters applied:', filters);
    // In a real app, this would filter the books based on the selected filters
  };

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);
    console.log('Sorting by:', newSortBy);
    // In a real app, this would sort the books
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Books
          </h1>
          <p className="text-lg text-gray-600">
            Discover your next favorite book from our extensive collection
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search books, authors, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="title">Title A-Z</option>
                <option value="author">Author A-Z</option>
                <option value="newest">Newest First</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {books.length} books
              </p>
            </div>

            {/* Books Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {books.map((book, index) => (
                <div
                  key={book.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BookCard {...book} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium hover-scale">
                Load More Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
