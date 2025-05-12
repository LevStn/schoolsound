import React from "react";
import Footer from "./Footer";
import TestimonialsSection from "./sections/TestimonialsSection";
import SoundDesignHeroSection from "./sections/SoundDesignHeroSection";
import CourseDescriptionSection from "./sections/CourseDescriptionSection";
import TeacherSection from "./sections/TeacherSection";
import WhatYouWillLearnSection from "./sections/WhatYouWillLearnSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import WhoIsTheCourseForSection from "./sections/WhoIsTheCourseForSection";
import RequirementsSection from "./sections/RequirementsSection";
import FurtherRecommendationsSection from "./sections/FurtherRecommendationsSection";
import CoursesSection from "./sections/CoursesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section>
          <SoundDesignHeroSection />
        </section>

        {/* Course Description section */}
        <section>
          <CourseDescriptionSection />
        </section>

        {/* Teacher section */}
        <section>
          <TeacherSection />
        </section>

        {/* What You Will Learn section */}
        <section>
          <WhatYouWillLearnSection />
        </section>

        {/* How It Works section */}
        <section>
          <HowItWorksSection />
        </section>

        {/* Who Is The Course For section */}
        <section>
          <WhoIsTheCourseForSection />
        </section>

        {/* Requirements section */}
        <section>
          <RequirementsSection />
        </section>

        {/* Further Recommendations section */}
        <section>
          <FurtherRecommendationsSection />
        </section>

        {/* Courses section */}
        <section>
          <CoursesSection />
        </section>

        {/* Testimonials section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
