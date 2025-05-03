import React from "react";

interface FurtherRecommendationsSectionProps {
  title?: string;
  introText?: string;
  recommendations?: Array<{
    text: string;
    link?: string;
    linkText?: string;
  }>;
  image?: string;
}

const FurtherRecommendationsSection = ({
  title = "What's next?",
  introText = "We recommend these online courses:",
  recommendations = [
    {
      text: "Basics of Music Creation and Arrangement on Computer",
      linkText: "Basics of Music Creation and Arrangement on Computer",
      link: "/category/audio/course_basics_of_music",
    },
    {
      text: "Processing, Mixing and Mastering",
      linkText: "Processing, Mixing and Mastering",
      link: "/category/video/course_mixing_and_mastering",
    },
  ],
  image = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
}: FurtherRecommendationsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {title}
            </h2>

            <p className="text-lg mb-6">{introText}</p>

            <div className="space-y-6">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg">
                    {recommendation.link ? (
                      <>
                        <a
                          href={recommendation.link}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {recommendation.linkText || recommendation.text}
                        </a>
                        {recommendation.linkText
                          ? ` — ${recommendation.text}`
                          : ""}
                      </>
                    ) : (
                      recommendation.text
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Further Recommendations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurtherRecommendationsSection;
