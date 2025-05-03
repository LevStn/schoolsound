import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarSrc?: string;
  avatarFallback?: string;
}

const Testimonial = ({
  quote = "This product has completely transformed how we operate. The efficiency gains have been remarkable.",
  name = "Jane Smith",
  title = "CEO, TechCorp",
  avatarSrc,
  avatarFallback = "JS",
}: TestimonialProps) => {
  return (
    <Card className="bg-white h-full flex flex-col">
      <CardContent className="pt-6 flex-1 flex flex-col">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 flex-1">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            {avatarSrc ? <AvatarImage src={avatarSrc} alt={name} /> : null}
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-gray-500 text-xs">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
}

const TestimonialsSection = ({
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it - hear from some of our satisfied customers. Check out their testimonials below.",
  testimonials = [
    {
      quote:
        "This product has completely transformed how we operate. The efficiency gains have been remarkable.",
      name: "Jane Smith",
      title: "CEO, TechCorp",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      avatarFallback: "JS",
    },
    {
      quote:
        "The customer support team went above and beyond to help us implement the solution. Highly recommended!",
      name: "Mark Johnson",
      title: "CTO, InnovateCo",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=mark",
      avatarFallback: "MJ",
    },
    {
      quote:
        "We've seen a 40% increase in productivity since implementing this platform. The ROI has been incredible.",
      name: "Sarah Williams",
      title: "Operations Director, GrowthInc",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      avatarFallback: "SW",
    },
    {
      quote:
        "The intuitive interface made adoption across our team seamless. Everyone picked it up without any training.",
      name: "Alex Chen",
      title: "Product Manager, FutureTech",
      avatarSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      avatarFallback: "AC",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
