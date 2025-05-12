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
  paymentLink?: string;
}

const CourseCard = ({
  title = "Sound Design Course",
  description = "Learn the fundamentals of sound design",
  price = { original: 179, discounted: 79 },
  teacher = "N. Marron",
  image = "img/a1.jpg",
  availableSeats = 8,
  installmentAvailable = true,
  promoText = "Promotion: 40% discount",
  paymentLink = "#",
}: CourseCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 relative group">
      {/* Top image */}
      <div className="relative h-48 overflow-hidden border-b border-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        {promoText && (
          <div className="absolute top-3 left-3 bg-cyan-500/20 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-400/30 backdrop-blur-sm z-20">
            {promoText}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        <div className="text-sm text-gray-300">
          <span className="font-medium text-teal-400">Teacher:</span> {teacher}
        </div>

        {availableSeats !== undefined && (
          <div className="text-sm text-gray-300">
            <span className="font-medium text-cyan-400">Seats left:</span>{" "}
            {availableSeats}
          </div>
        )}

        {installmentAvailable && (
          <div className="text-xs text-gray-500 italic">
            Installment plan available with no extra fees
          </div>
        )}

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-cyan-400">
            {price.discounted ?? price.original} $
          </span>
          {price.discounted && (
            <span className="text-sm text-gray-500 line-through">
              {price.original} $
            </span>
          )}
        </div>

        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-2 w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold py-2 rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-colors">
            Enroll Now
          </button>
        </a>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-teal-500 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-teal-500 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
    </div>
  );
};

export default CourseCard;
