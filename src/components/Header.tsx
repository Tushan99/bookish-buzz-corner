
import React, { useState } from 'react';
import { Search, User, Menu, X, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <Book className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BookVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/books" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Books
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Reviews
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              About
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search books..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-64"
              />
            </div>

            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-sm text-gray-700 hover:text-blue-600 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/books" className="text-gray-700 hover:text-blue-600 font-medium">Books</Link>
              <Link to="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              {!isLoggedIn && (
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                  <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
                  <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center font-medium">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
