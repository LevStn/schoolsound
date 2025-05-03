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
  backgroundImage = "https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=800&q=80",
}: WhatYouWillLearnSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {title}
            </h2>

            <div className="space-y-4 mb-8">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-primary">
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
                      className="lucide lucide-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="text-base md:text-lg">{outcome}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {buttonText}
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={backgroundImage}
              alt="Sound Design Course"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearnSection;
