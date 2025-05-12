import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  author: string;
  content: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      author: "Cassandra Nix",
      content: `The first run of the "Sound Design" course has ended - an exciting adventure that lasted almost 2 months. For me, as someone not versed in all these "sound tweakings", the course became both a great discovery and... a kind of training in creative self-overcoming. For example, I managed to extract a wave fragment from my dachshund's bark and create an entire track almost exclusively from it. Cool, right? I would never have thought I could do something like this... I really want to thank the teacher for his tireless desire to share knowledge.`,
    },
    {
      author: "Whitney Sosa",
      content: `I think it will be useful for people without musical education, who don't know notes at all... Is it really possible to take this course? Yes. Will it be effective in this case? Absolutely. I'm exactly that kind of person - musically illiterate, you could say. The course helps find cool, yet very simple solutions to refresh your video with juicy sounds, even how to create atmospheric melodies using literally a couple of buttons - and it will always look professional.`,
    },
    {
      author: "Betty Burns",
      content: `It was an exciting adventure. Timid steps at the very beginning grew into complete confidence by the end. What seemed impossible at first, by the end of the course seems very understandable, accessible, and somehow familiar. I would never have thought that I would enjoy tweaking new sounds on a synth so much. Learning how to make sounds you used to pay a lot of money for is pure fantasy. The course is a complete upgrade on all fronts.`,
    },
    {
      author: "Carolyn Walsh",
      content: `At the beginning of this year, I definitely decided that I would go study sound work. Arthur Feliksovich is very approachable, explains material clearly, answers all questions in detail, jokes a lot, and gently points out shortcomings in completed assignments. I was SO INSPIRED. I decided that I would be on this course no matter what, that I would cope with any difficulties in the learning process.`,
    },
    {
      author: "Robyn Monroe",
      content: `The sound design course is coming to an end. First conclusions can be made. The course will be useful not only for those who want to learn the basic principles of sound design and see how they work in practice, but also for those who want to learn something new about sound. Lessons take place in a lively atmosphere, with humor, lots of additional practical information. Almost every lesson lasts more than three hours.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-100 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                Student Testimonials
              </span>
            </h2>

            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear what our students say about their learning experience
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial card */}
          <div
            key={currentIndex}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 relative overflow-hidden"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500 rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start mb-6">
                <div className="w-3 h-3 bg-teal-400 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-cyan-400 text-lg">
                    {testimonials[currentIndex].author}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400"
            >
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-gray-900/80 border border-gray-800 hover:bg-purple-500/10 hover:border-purple-500/30 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-400"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-cyan-400 w-6"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats at bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Satisfaction
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Projects
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">300H</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Learning
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text mb-2">
              PRO
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
