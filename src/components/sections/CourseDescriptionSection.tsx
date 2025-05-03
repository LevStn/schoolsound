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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-center">
          {title}
        </h2>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            {subtitle}
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto bg-card rounded-xl p-6 md:p-8 lg:p-10 shadow-md border border-border">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            {description.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDescriptionSection;
