import React from "react";

interface RequirementsSectionProps {
  title?: string;
  requirements?: Array<{
    text: string;
    subItems?: string[];
  }>;
  image?: string;
}

const RequirementsSection = ({
  title = "What will you need?",
  requirements = [
    {
      text: "You need to have basic knowledge of sound at the level of the Basic Sound course. To complete the course, you need practical experience working with sound and understanding its basic principles.",
    },
    {
      text: "You need to have basic skills in any DAW, such as Reaper, Logic Pro, ProTools, Studio One, Cubase, etc. In our school, you can get the necessary knowledge and skills in online courses:",
      subItems: [
        "Working with sound in Reaper",
        "Working with sound in Apple Logic",
      ],
    },
  ],
  image = "img/4.jpg",
}: RequirementsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image - Left side */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl border border-gray-800">
            <img
              src={image}
              alt="Course Requirements"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-xl pointer-events-none"></div>
          </div>

          {/* Text content - Right side */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                  {title}
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              {requirements.map((requirement, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative pl-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-teal-400 rounded-full"></span>
                    {requirement.text}
                  </div>

                  {requirement.subItems && requirement.subItems.length > 0 && (
                    <ul className="ml-6 space-y-2">
                      {requirement.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-gray-400 text-base md:text-lg list-disc ml-4"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
    </section>
  );
};

export default RequirementsSection;
