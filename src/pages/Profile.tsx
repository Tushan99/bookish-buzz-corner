
import React, { useState } from 'react';
import { User, BookOpen, Star, Heart, Edit3, Settings } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import BookCard from '../components/BookCard';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('reviews');

  // Sample user data
  const userData = {
    name: 'Sarah Johnson',
    username: '@sarahreads',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b0763c1c?w=200&h=200&fit=crop&crop=face',
    bio: 'Passionate reader and book reviewer. Love fantasy, sci-fi, and contemporary fiction. Always looking for my next great read!',
    joinDate: 'March 2023',
    stats: {
      reviews: 47,
      booksRead: 89,
      followers: 324,
      following: 156
    }
  };

  const userReviews = [
    {
      id: '1',
      userName: 'Sarah Johnson',
      userAvatar: userData.avatar,
      rating: 5,
      reviewText: 'Absolutely phenomenal! This book changed my perspective on life and the choices we make. Matt Haig has created something truly magical.',
      date: '2 days ago',
      likes: 24,
      replies: 5,
      bookTitle: 'The Midnight Library'
    },
    {
      id: '2',
      userName: 'Sarah Johnson',
      userAvatar: userData.avatar,
      rating: 4,
      reviewText: 'Taylor Jenkins Reid has done it again! This book had me completely captivated from start to finish. The storytelling is masterful.',
      date: '1 week ago',
      likes: 31,
      replies: 8,
      bookTitle: 'The Seven Husbands of Evelyn Hugo'
    },
    {
      id: '3',
      userName: 'Sarah Johnson',
      userAvatar: userData.avatar,
      rating: 5,
      reviewText: 'An incredible journey through space and time. Andy Weir\'s writing is both scientifically accurate and emotionally engaging.',
      date: '2 weeks ago',
      likes: 18,
      replies: 3,
      bookTitle: 'Project Hail Mary'
    }
  ];

  const favoriteBooks = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      rating: 5,
      reviewCount: 2847,
      genre: 'Fiction',
      description: 'Between life and death there is a library...'
    },
    {
      id: '2',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      rating: 5,
      reviewCount: 1456,
      genre: 'Sci-Fi',
      description: 'Ryland Grace is the sole survivor...'
    }
  ];

  const tabs = [
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'reading', label: 'Currently Reading', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end -mt-16 mb-6">
              <div className="relative">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Edit3 className="h-4 w-4" />
                </button>
              </div>
              <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                    <p className="text-gray-600">{userData.username}</p>
                    <p className="text-sm text-gray-500 mt-1">Member since {userData.joinDate}</p>
                  </div>
                  <button className="mt-4 sm:mt-0 flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors duration-200">
                    <Settings className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 max-w-2xl">{userData.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userData.stats.reviews}</div>
                <div className="text-gray-600">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userData.stats.booksRead}</div>
                <div className="text-gray-600">Books Read</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userData.stats.followers}</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userData.stats.following}</div>
                <div className="text-gray-600">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">My Reviews</h2>
                  <span className="text-gray-600">{userReviews.length} reviews</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {userReviews.map((review, index) => (
                    <div
                      key={review.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ReviewCard {...review} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Favorite Books</h2>
                  <span className="text-gray-600">{favoriteBooks.length} books</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteBooks.map((book, index) => (
                    <div
                      key={book.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <BookCard {...book} isLiked={true} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reading' && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No books currently reading</h3>
                <p className="text-gray-600 mb-6">Start reading a book to track your progress here.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Browse Books
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
