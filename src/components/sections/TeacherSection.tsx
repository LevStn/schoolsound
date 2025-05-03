import React from "react";
import { Button } from "@/components/ui/button";

interface TeacherSectionProps {
  teacherName?: string;
  teacherImage?: string;
  teacherDescription?: string;
  teacherShortBio?: string;
  learnMoreLink?: string;
  learnMoreText?: string;
}

const TeacherSection = ({
  teacherName = "Arthur Orlov",
  teacherImage = "https://c.profileschool.ru/pictures/31a8491fb1313eb8af05cc292707fb6adbdc7fa8.jpg",
  teacherShortBio = "Arthur Orlov is a composer, arranger, teacher, author of a practical music theory methodology, and trainer for most popular sound editors.",
  teacherDescription = "He has spent many years training sound specialists, musicians, arrangers, DJs, videographers, and bloggers. He advocates for a practical approach and comprehensive educational programs. He generously shares extensive lists of free services, tools, and life hacks.\n\nHe represents the 'old school' approach: provides thorough explanations, always shows how to solve problems without expenses, never sends students to search engines, answers all questions, willingly demonstrates solutions to educational tasks using student materials, helps after the completion of training, consults, advises, and maintains contact.",
  learnMoreLink = "/teacher/arthur-orlov",
  learnMoreText = "Learn more...",
}: TeacherSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
          <div className="flex flex-col md:flex-row">
            {/* Teacher Image - Left side */}
            <div className="md:w-2/5 h-[300px] md:h-auto relative">
              <img
                src={teacherImage}
                alt={teacherName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Teacher Description - Right side */}
            <div className="md:w-3/5 p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Teacher: {teacherName}
              </h3>

              <div className="space-y-4">
                <p className="text-lg font-medium">{teacherShortBio}</p>

                {teacherDescription.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4">
                  <a
                    href={learnMoreLink}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {learnMoreText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
