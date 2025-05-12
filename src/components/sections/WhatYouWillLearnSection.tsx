import React from "react";
import { Button } from "@/components/ui/button";

interface WhatYouWillLearnSectionProps {
  title?: string;
  learningOutcomes?: string[];
  buttonText?: string;
  backgroundImage?: string;
}

const WhatYouWillLearnSection = ({
  title = "What You Will Learn",
  learningOutcomes = [
    "Create unique and commonly used sounds through synthesis, sampling, and post-processing.",
    "Use your own created sound bank and synthesizer/sampler presets.",
    "Apply the most modern sound design and production tools.",
    "Properly approach sound analysis and breakdown from a sound design perspective.",
    "Create a variety of musical sounds (drums, bass, spatial atmospheres, solo sounds, and other melodic instruments).",
    "Use handy tools to record and create unique sounds.",
    "Use synthesis, processing, recording, and sampling in combination, providing an unlimited number of colors and textures.",
    "Apply layering synthesis, processing, and resampling to achieve a voluminous, wide, and rich sound.",
    "Create creative effects to attract attention, create accents, and stylish design.",
    "Voice characters for video games, perform synchronous voiceovers, and record and process foley.",
    "Apply morphing, harmonizer, top multi-effects for convenience and process acceleration.",
  ],
  buttonText = "View Course Program",
  backgroundImage = "img/1.jpg",
}: WhatYouWillLearnSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                {title}
              </span>
            </h2>

            <div className="space-y-5 mb-10">
              {learningOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start group transition-all hover:translate-x-2"
                >
                  <div className="mr-4 mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors">
                    {outcome}
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => {
                document
                  .getElementById("price")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              {buttonText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>

          {/* Right side - Image with effects */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border-2 border-gray-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 lg:hidden"></div>
            <img
              src={backgroundImage}
              alt="Sound Design Course"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating elements */}
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 rounded-full border-2 border-white/80 bg-gradient-to-br from-cyan-400/90 to-teal-500/90 shadow-lg"
                  ></div>
                ))}
              </div>
              <div className="mt-4 text-white font-medium">
                +{learningOutcomes.length} skills to master
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl z-20"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearnSection;
