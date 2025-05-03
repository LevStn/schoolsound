import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Build beautiful websites faster than ever",
  subtitle = "A clean, minimal landing page template with all the essential sections you need to launch your next project.",
  ctaText = "Get Started",
  ctaLink = "#",
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-background overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={onCtaClick} asChild>
            <a href={ctaLink}>{ctaText}</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white hover:bg-white/10"
            asChild
          >
            <a href="#features">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
