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
  image = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
}: RequirementsSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
            <img
              src={image}
              alt="Course Requirements"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              {title}
            </h2>

            <div className="space-y-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-base md:text-lg">{requirement.text}</p>

                  {requirement.subItems && requirement.subItems.length > 0 && (
                    <ul className="ml-6 space-y-2">
                      {requirement.subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-base md:text-lg list-disc"
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
    </section>
  );
};

export default RequirementsSection;
