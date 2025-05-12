import React from "react";
import CourseCard from "../CourseCard";

const courses = [
  {
    title: "Sound Design Fundamentals",
    description: "Learn the basics of sound design for various media",
    price: { original: 179, discounted: 79 },
    teacher: "N. Marron",
    image: "img/a1.jpg",
    availableSeats: 8,
    installmentAvailable: true,
    promoText: "Promotion: 40% discount",
    paymentLink: "#",
  },
  {
    title: "Advanced Audio Production",
    description: "Master professional audio production techniques",
    price: { original: 200, discounted: 80 },
    teacher: "N. Marron",
    image: "img/a2.jpg",
    availableSeats: 19,
    installmentAvailable: true,
    promoText: "Promotion: 30% discount",
    paymentLink: "#",
  },
  {
    title: "Music Composition for Media",
    description: "Create compelling music for film, games, and other media",
    price: { original: 210, discounted: 90 },
    teacher: "N. Marron",
    image: "img/a3.jpg",
    availableSeats: 12,
    installmentAvailable: true,
    promoText: "Promotion: 30% discount",
    paymentLink: "#",
  },
];

const CoursesSection = () => {
  return (
    <section
      className="py-16 md:py-24 bg-black relative overflow-hidden"
      id="price"
    >
      {/* Decorative background blur elements */}
      <div className="absolute -top-100 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl mix-blend-screen" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full filter blur-3xl mix-blend-screen" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">
              Our Courses
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore a wide range of modern audio production, sound design, and
            composition courses — from beginner to advanced levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
