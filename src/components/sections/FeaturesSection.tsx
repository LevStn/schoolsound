import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Zap, Shield, BarChart } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description = "" }: FeatureCardProps) => {
  return (
    <Card className="h-full bg-white">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCardProps[];
}

const FeaturesSection = ({
  title = "Features",
  subtitle = "Our platform offers everything you need to succeed.",
  features = [
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Cross-Platform",
      description:
        "Our solution works seamlessly across all devices and platforms.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed to provide the best user experience possible.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure by Design",
      description:
        "Built with security in mind to keep your data safe and protected.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics tools.",
    },
  ],
}: FeaturesSectionProps) => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
