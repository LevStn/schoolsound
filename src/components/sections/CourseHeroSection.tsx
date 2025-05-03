import React from "react";
import { Button } from "@/components/ui/button";

interface CourseHeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  averageSalary?: string;
  jobTitle?: string;
  schoolRating?: string;
  onButtonClick?: () => void;
}

const CourseHeroSection = ({
  title = "Online Courses for Music Creation and Sound Design",
  description = "Sound design is a creative direction related to writing and creating sound accompaniment for clips, videos, movies, games, and advertising campaigns. Programs such as Mubert, Ableton Live, and FMOD Studio are used in practice. The main professions in this field are sound designer, sound engineer, and DJ. Sound design is also called sound architecture. It is in demand in many areas: cinema, gaming industry, advertising, virtual and augmented reality.",
  buttonText = "View Courses",
  imageSrc = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
  averageSalary = "$75,000",
  jobTitle = "Sound Designer",
  schoolRating = "4.3",
  onButtonClick = () => {},
}: CourseHeroSectionProps) => {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            <div className="text-muted-foreground space-y-4">
              {description.split("\n").map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button size="lg" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={imageSrc}
                alt="Course illustration"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Salary Card */}
              <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                <div className="flex items-center gap-2 mb-2">
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
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                  <span className="text-xl font-bold">{averageSalary}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Average salary for {jobTitle}
                </p>
              </div>

              {/* Rating Card */}
              <div className="bg-card rounded-lg p-4 shadow-sm border border-border">
                <div className="flex items-center gap-2 mb-2">
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
                    className="text-primary"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-xl font-bold">{schoolRating}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  School rating based on real student reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
