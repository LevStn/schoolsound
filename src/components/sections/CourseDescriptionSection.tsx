import React from "react";

interface CourseDescriptionSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const CourseDescriptionSection = ({
  title = "Learn to earn with Sound Design",
  subtitle = "This is a comprehensive online sound design course that provides skills for generating sound for musicians, videographers, and motion designers. You'll get a set of ready-made solutions and approaches that will allow you to create your unique sounds and the most in-demand effects in video production and the music industry in a short time. No boring instructions! Pure creativity and a whole bank of your own freshly created sounds for any creative task!",
  description = "Tired of constantly searching for and buying suitable sounds for different projects? Create them yourself right in the course, where solutions for all industries are compiled: from music to advertising, from video production to the gaming industry. Here you will learn to 'make sound from a pot' and any improvised materials, voice large-scale scenes with dragons, transformers and aliens, realistically write battle sounds, bring magic to life, create trailer and cinematic effects, Sci-Fi effects, interface sounds and much more. You will understand what fantastic sounds are made of and will skillfully write all this at home on your smartphone, styling ordinary sounds for any unusual task.\n\nThe main feature of the course is live, diverse practice that gradually forms the understanding and approach necessary for working with modern sound design. Great importance is attached to creating sounds, not just dragging ready-made and overused files to the timeline. The course successfully develops the skill of sound analysis and develops hearing: you don't just repeat what is shown in the lesson, but learn to create a unique product, literally 'pulling sound out of your head' for a specific task, character and scene. Whether you are a sound engineer or videographer, beatmaker or motion designer, blogger or video game developer - the course will take you to a new level of development and give you the skills necessary for professional mastery of the industry.",
}: CourseDescriptionSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-100 -right-20 w-64 h-64 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with gradient */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
            {title}
          </span>
        </h2>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Main content with glass effect */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-black to-gray-900 rounded-xl p-8 md:p-10 lg:p-12 shadow-2xl border border-gray-800 backdrop-blur-sm">
          <div className="space-y-6">
            {description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 text-base md:text-lg leading-relaxed relative pl-6"
              >
                {/* Decorative bullet */}
                <span className="absolute left-0 top-3 w-2 h-2 bg-cyan-400 rounded-full"></span>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-teal-500 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-teal-500 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
        </div>

        {/* Stats grid for visual balance */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center max-w-4xl mx-auto">
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Practical
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Access
            </div>
          </div>
          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text mb-2">
              PRO
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wider">
              Level
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescriptionSection;
