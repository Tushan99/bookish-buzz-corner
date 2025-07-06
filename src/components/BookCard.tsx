
import React from 'react';
import { Star, Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  reviewCount: number;
  genre: string;
  description: string;
  isLiked?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  cover,
  rating,
  reviewCount,
  genre,
  description,
  isLiked = false
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover-scale">
      <Link to={`/book/${id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <button className={`p-2 rounded-full ${isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600'} hover:scale-110 transition-all duration-200`}>
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              {genre}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 mb-3 font-medium">{author}</p>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
            <span className="text-sm text-gray-400 ml-2">({reviewCount} reviews)</span>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-sm">{reviewCount}</span>
            </div>
            <span className="text-blue-600 font-medium text-sm group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
