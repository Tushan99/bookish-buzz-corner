
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  size = 'md',
  readonly = false
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleStarHover = (starRating: number) => {
    if (!readonly) {
      setHoverRating(starRating);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex items-center" onMouseLeave={handleMouseLeave}>
      {Array.from({ length: 5 }, (_, index) => {
        const starRating = index + 1;
        const isActive = starRating <= (hoverRating || rating);

        return (
          <Star
            key={index}
            className={`${sizeClasses[size]} ${
              isActive
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            } ${
              !readonly
                ? 'cursor-pointer hover:scale-110 transition-all duration-150'
                : ''
            }`}
            onClick={() => handleStarClick(starRating)}
            onMouseEnter={() => handleStarHover(starRating)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
