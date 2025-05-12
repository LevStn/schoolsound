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
  teacherName = "Nick Marron",
  teacherImage = "img/at.jpg",
  teacherShortBio = "Nick Marron is a composer, arranger, teacher, author of a practical music theory methodology, and trainer for most popular sound editors.",
  teacherDescription = "He has spent many years training sound specialists, musicians, arrangers, DJs, videographers, and bloggers. He advocates for a practical approach and comprehensive educational programs. He generously shares extensive lists of free services, tools, and life hacks.\n\nHe represents the 'old school' approach: provides thorough explanations, always shows how to solve problems without expenses, never sends students to search engines, answers all questions, willingly demonstrates solutions to educational tasks using student materials, helps after the completion of training, consults, advises, and maintains contact.",
}: TeacherSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="flex flex-col md:flex-row">
            {/* Teacher Image - Left side */}
            <div className="md:w-2/5 h-[400px] md:h-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 md:hidden"></div>
              <img
                src={teacherImage}
                alt={teacherName}
                className="w-full h-full object-cover"
              />
              {/* Image frame decoration */}
              <div className="absolute inset-0 border-r-0 md:border-r-2 border-cyan-400/30"></div>
            </div>

            {/* Teacher Description - Right side */}
            <div className="md:w-3/5 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
                    {teacherName}
                  </span>
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-lg font-medium text-gray-200 leading-relaxed">
                  {teacherShortBio}
                </p>

                <div className="border-t border-gray-800 my-4"></div>

                {teacherDescription.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-300 text-base md:text-lg leading-relaxed relative pl-6"
                  >
                    <span className="absolute left-0 top-2 w-2 h-2 bg-teal-500 rounded-full"></span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
        </div>

        {/* Stats grid for visual balance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Years experience
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/30 transition-colors">
            <div className="text-3xl font-bold text-teal-400 mb-2">1000+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Students
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Courses
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-teal-500/30 transition-colors">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text mb-2">
              PRO
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Methodology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
