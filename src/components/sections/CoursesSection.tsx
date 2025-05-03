import React from "react";
import CourseCard, { CourseCardProps } from "../CourseCard";

interface CoursesSectionProps {
  title?: string;
  description?: string;
  courses?: CourseCardProps[];
}

const CoursesSection = ({
  title = "Our Courses",
  description = "Explore our range of professional audio courses",
  courses = [
    {
      title: "Sound Design Fundamentals",
      description: "Learn the basics of sound design for various media",
      price: { original: 17900, discounted: 10740 },
      teacher: "A. Orlov",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      availableSeats: 8,
      installmentAvailable: true,
      promoText: "Promotion: 40% discount",
    },
    {
      title: "Advanced Audio Production",
      description: "Master professional audio production techniques",
      price: { original: 15500, discounted: 9300 },
      teacher: "A. Orlov",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
      availableSeats: 19,
      installmentAvailable: true,
      promoText: "Promotion: 40% discount",
    },
    {
      title: "Music Composition for Media",
      description: "Create compelling music for film, games, and other media",
      price: { original: 19900, discounted: 14925 },
      teacher: "M. Johnson",
      image:
        "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
      availableSeats: 12,
      installmentAvailable: true,
      promoText: "Promotion: 25% discount",
    },
  ],
}: CoursesSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
