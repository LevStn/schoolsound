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
    },
    {
      text: "Processing, Mixing and Mastering",
      linkText: "Processing, Mixing and Mastering",
    },
  ],
  image = "img/5.jpg",
}: FurtherRecommendationsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative glowing circles */}
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-teal-500/10 rounded-full mix-blend-screen blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Text side */}
            <div className="lg:w-1/2 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                    {title}
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-300 mb-6">{introText}</p>

              <div className="space-y-5">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="relative pl-6 text-base md:text-lg text-gray-300 leading-relaxed"
                  >
                    <span className="absolute left-0 top-2 w-2 h-2 bg-teal-500 rounded-full"></span>
                    {rec.link ? (
                      <>
                        <a
                          href={rec.link}
                          className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {rec.linkText || rec.text}
                        </a>
                        {rec.linkText && rec.linkText !== rec.text && (
                          <span className="text-gray-400"> — {rec.text}</span>
                        )}
                      </>
                    ) : (
                      rec.text
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Image side */}
            <div className="lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-r-xl border-t border-l border-gray-800">
              <img
                src={image}
                alt="Further Recommendations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FurtherRecommendationsSection;
