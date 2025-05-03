import React from "react";

interface HowItWorksSectionProps {
  title?: string;
  items?: string[];
  image?: string;
}

const HowItWorksSection = ({
  title = "How does the course work?",
  items = [
    "Theory in the course is collected in the format of video lessons with lifetime access. During the course, you can watch video lessons at any time convenient for you.",
    "The practical part of the course takes place in the format of interactive online classes according to the schedule, where you will get answers to all your questions and review of homework assignments in real time.",
    "Homework assignments on theory and practice will help consolidate new material.",
    "Notes from all classes with the main points and theses of the course will help remind you of the most important things.",
    "After completing all homework assignments and scoring above 75% on them, you will receive a physical certificate of successful completion of the course.",
  ],
  image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
}: HowItWorksSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image - Left side */}
          <div className="md:w-2/5 w-full">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img
                src={image}
                alt="How the course works"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content - Right side */}
          <div className="md:w-3/5 w-full">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {title}
            </h2>

            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
