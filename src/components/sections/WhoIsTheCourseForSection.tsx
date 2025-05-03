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
  image = "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
}: WhoIsTheCourseForSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {title}
            </h2>

            <div className="space-y-6">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {audience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Sound Design Course Target Audience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsTheCourseForSection;
