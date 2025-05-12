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
  title = "School Sound",
  subtitle = "",
  description = "Fundamental course on sound design in music, video, advertising and other directions.",
  backgroundImage = "img/main.jpg",
  courseType = "Online Course",
  theoryLessons = 25,
  onlineLessons = 45,
  homeworks = 30,
}: SoundDesignHeroSectionProps) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          src={backgroundImage}
          alt="Sound Design Course"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

        {/* Animated gradient elements */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text text-sm font-semibold mb-4 tracking-widest">
              MASTERCLASS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                {title}
              </span>
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
            )}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              {description}
            </p>

            {/* Online Course Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-white px-6 py-3 rounded-full mb-10 backdrop-blur-sm">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <div className="font-medium">{courseType}</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-white mb-10 max-w-md">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                {theoryLessons}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Theory Lessons
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                {onlineLessons}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Online Lessons
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                {homeworks}
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Homework Tasks
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => {
                document
                  .getElementById("price")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default SoundDesignHeroSection;
