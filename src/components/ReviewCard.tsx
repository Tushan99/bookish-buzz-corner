
import React from 'react';
import { User, ThumbsUp, MessageCircle } from 'lucide-react';
import StarRating from './StarRating';

interface ReviewCardProps {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  reviewText: string;
  date: string;
  likes: number;
  replies: number;
  bookTitle: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  userName,
  userAvatar,
  rating,
  reviewText,
  date,
  likes,
  replies,
  bookTitle
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={userName}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-500" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{userName}</h4>
              <p className="text-sm text-gray-500">reviewed "{bookTitle}"</p>
            </div>
            <span className="text-sm text-gray-400">{date}</span>
          </div>

          <div className="flex items-center mb-3">
            <StarRating rating={rating} size="sm" readonly />
            <span className="ml-2 text-sm text-gray-600 font-medium">
              {rating.toFixed(1)}
            </span>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{reviewText}</p>

          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm">{likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{replies} replies</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
