import React from "react";
import { Button } from "@/components/ui/button";

interface SoundDesignHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  courseType?: string;
  theoryLessons?: number;
  onlineLessons?: number;
  homeworks?: number;
}

const SoundDesignHeroSection = ({
  title = "Sound Design",
  subtitle = "",
  description = "Fundamental course on sound design in music, video, advertising and other directions.",
  backgroundImage = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
  courseType = "Online Course",
  theoryLessons = 5,
  onlineLessons = 5,
  homeworks = 10,
}: SoundDesignHeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <img
          src={backgroundImage}
          alt="Sound Design Course"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-300 mb-2">{subtitle}</p>
            )}
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {description}
            </p>

            {/* Online Course Badge */}
            <div className="inline-block bg-primary/90 text-white px-4 py-2 rounded-md mb-8">
              <div className="font-medium text-center">{courseType}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-white mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {theoryLessons}
              </div>
              <div className="text-sm text-gray-300">video theory lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {onlineLessons}
              </div>
              <div className="text-sm text-gray-300">online lessons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">
                {homeworks}
              </div>
              <div className="text-sm text-gray-300">homework assignments</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SoundDesignHeroSection;
