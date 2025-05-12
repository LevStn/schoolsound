import React from "react";

interface WhoIsTheCourseForSectionProps {
  title?: string;
  targetAudience?: string[];
  image?: string;
}

const WhoIsTheCourseForSection = ({
  title = "Who is this course for?",
  targetAudience = [
    "This online course is designed for those who want to connect their lives with sound design, audio and video, the gaming industry, or advertising.",
    "Musicians of any level with experience, arrangers, sound engineers, and anyone who wants to earn money with sound design.",
    "Video editors and videographers, beginner sound designers, producers, and beatmakers.",
  ],
  image = "img/3.jpg",
}: WhoIsTheCourseForSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute -top-320 left-0 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content - Left side */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                  {title}
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="relative pl-8 text-gray-300 text-base md:text-lg leading-relaxed group"
                >
                  <span className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full group-hover:scale-125 transition-transform"></span>
                  {audience}
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right side */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <img
              src={image}
              alt="Target Audience"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Corner borders */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
    </section>
  );
};

export default WhoIsTheCourseForSection;
