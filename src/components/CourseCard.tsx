import React from "react";

export interface CourseCardProps {
  title: string;
  description?: string;
  price: {
    original: number;
    discounted?: number;
  };
  teacher: string;
  image?: string;
  availableSeats?: number;
  installmentAvailable?: boolean;
  promoText?: string;
}

const CourseCard = ({
  title = "Sound Design Course",
  description = "Learn the fundamentals of sound design",
  price = { original: 17900, discounted: 10740 },
  teacher = "A. Orlov",
  image = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  availableSeats = 8,
  installmentAvailable = true,
  promoText = "Promotion: 40% discount",
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-border">
      {/* Course Image */}
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Teacher */}
        <div className="flex items-center mb-4">
          <span className="text-sm font-medium mr-2">Teacher:</span>
          <span className="text-sm">{teacher}</span>
        </div>

        {/* Available Seats */}
        {availableSeats !== undefined && (
          <div className="flex items-center mb-4">
            <span className="text-sm font-medium mr-2">Available seats:</span>
            <span className="text-sm">{availableSeats}</span>
          </div>
        )}

        {/* Installment Info */}
        {installmentAvailable && (
          <div className="text-sm text-muted-foreground mb-4">
            Course can be purchased in installments without additional fees
          </div>
        )}

        {/* Price */}
        <div className="flex items-center mb-4">
          {price.discounted ? (
            <>
              <span className="text-xl font-bold text-primary mr-2">
                {price.discounted} ₽
              </span>
              <span className="text-sm line-through text-muted-foreground">
                {price.original} ₽
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-primary">
              {price.original} ₽
            </span>
          )}
        </div>

        {/* Promo Text */}
        {promoText && (
          <div className="text-sm text-muted-foreground mb-4">{promoText}</div>
        )}

        {/* Action Button */}
        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
