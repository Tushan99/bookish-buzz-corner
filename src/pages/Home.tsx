
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Users, BookOpen } from 'lucide-react';
import BookCard from '../components/BookCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
  // Sample data - in a real app, this would come from an API
  const featuredBooks = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      rating: 4.3,
      reviewCount: 2847,
      genre: 'Fiction',
      description: 'Between life and death there is a library, and within that library, the shelves go on forever...'
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
      rating: 4.6,
      reviewCount: 1923,
      genre: 'Sci-Fi',
      description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides...'
    },
    {
      id: '3',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop',
      rating: 4.5,
      reviewCount: 3621,
      genre: 'Romance',
      description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth...'
    },
    {
      id: '4',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      rating: 4.7,
      reviewCount: 1456,
      genre: 'Sci-Fi',
      description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission...'
    }
  ];

  const recentReviews = [
    {
      id: '1',
      userName: 'Sarah Johnson',
      userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b0763c1c?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      reviewText: 'Absolutely phenomenal! This book changed my perspective on life and the choices we make. Matt Haig has created something truly magical.',
      date: '2 days ago',
      likes: 24,
      replies: 5,
      bookTitle: 'The Midnight Library'
    },
    {
      id: '2',
      userName: 'Michael Chen',
      rating: 4,
      reviewText: 'A classic that lives up to its reputation. The world-building is incredible and the political intrigue keeps you engaged throughout.',
      date: '5 days ago',
      likes: 18,
      replies: 3,
      bookTitle: 'Dune'
    },
    {
      id: '3',
      userName: 'Emma Rodriguez',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      reviewText: 'Taylor Jenkins Reid has done it again! This book had me completely captivated from start to finish. The storytelling is masterful.',
      date: '1 week ago',
      likes: 31,
      replies: 8,
      bookTitle: 'The Seven Husbands of Evelyn Hugo'
    }
  ];

  const stats = [
    { icon: BookOpen, label: 'Books Reviewed', value: '12,847' },
    { icon: Users, label: 'Active Readers', value: '8,392' },
    { icon: Star, label: 'Average Rating', value: '4.2' },
    { icon: TrendingUp, label: 'Reviews This Month', value: '1,234' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Next
              <span className="block text-yellow-300">Great Read</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of book lovers sharing reviews, discovering new authors, 
              and building their perfect reading list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/books"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover-scale"
              >
                Explore Books
              </Link>
              <Link
                to="/signup"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover-scale"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most talked-about books in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BookCard {...book} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/books"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium hover-scale"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our community is saying about their latest reads
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {recentReviews.map((review, index) => (
              <div
                key={review.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium hover-scale"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Share Your Reading Journey?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join our community of passionate readers and start building your personal library today.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200 hover-scale"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
