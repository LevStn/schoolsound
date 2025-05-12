import React from "react";

interface HowItWorksSectionProps {
  title?: string;
  items?: string[];
  image?: string;
}

const HowItWorksSection = ({
  title = "How does the course work?",
  items = [
    "Theory is presented in video lessons with lifetime access.",
    "Practical lessons are conducted live with real-time",
    "Homework helps consolidate theoretical and practical material.",
    "You’ll get structured notes after each lesson.",
    "Complete all tasks with 75%+ and receive a certificate.",
  ],
  image = "img/2.jpg",
}: HowItWorksSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative background blobs */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="flex flex-col md:flex-row">
            {/* Image - Left */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 md:hidden"></div>
              <img
                src={image}
                alt="Course"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-r-0 md:border-r-2 border-teal-400/30"></div>
            </div>

            {/* Content - Right */}
            <div className="md:w-1/2 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                    {title}
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 text-gray-300 text-base md:text-lg leading-relaxed group"
                  >
                    <span className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full group-hover:scale-125 transition-transform"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
