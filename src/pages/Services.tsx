import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Mic, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import parentingImage from "@/assets/parenting.jpg";
import consultationImage from "@/assets/consultation.jpg";
import dictionImage from "@/assets/diction.jpg";
import teachersImage from "@/assets/teachers.jpg";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Parenting Coaching",
      image: parentingImage,
      short: "Expert guidance for modern parenting challenges",
      details: [
        "One-on-one personalized coaching sessions",
        "Practical strategies for behavior management",
        "Communication techniques for all age groups",
        "Building confidence as a parent",
        "Navigating technology and screen time",
        "Creating healthy family routines",
        "Support for special circumstances (divorce, blended families, etc.)"
      ],
      duration: "60-minute sessions",
      format: "In-person or virtual",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Educational Consultation",
      image: consultationImage,
      short: "Professional advice for educational excellence",
      details: [
        "Curriculum development and review",
        "Learning assessment and planning",
        "School selection guidance",
        "Academic performance strategies",
        "Special education needs support",
        "Homeschooling consultation",
        "Educational program evaluation"
      ],
      duration: "Flexible scheduling",
      format: "Customized to your needs",
    },
    {
      icon: <Mic className="w-12 h-12 text-accent" />,
      title: "Diction Training",
      image: dictionImage,
      short: "Build confidence through clear communication",
      details: [
        "Public speaking fundamentals",
        "Voice projection and articulation",
        "Presentation skills development",
        "Accent modification (optional)",
        "Interview preparation",
        "Confidence building exercises",
        "Performance evaluation and feedback"
      ],
      duration: "8-12 week programs",
      format: "Group or individual sessions",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      title: "Teacher Hiring & Placement",
      image: teachersImage,
      short: "Connecting exceptional educators with opportunities",
      details: [
        "Comprehensive teacher screening",
        "Skills and qualification verification",
        "Background checks and references",
        "Match-making based on needs",
        "Contract negotiation support",
        "Ongoing professional development",
        "Performance monitoring and support"
      ],
      duration: "Ongoing service",
      format: "Full placement support",
    },
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational solutions tailored to your unique needs
            </p>
          </div>

          {/* Services Cards */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="aspect-[4/3] lg:aspect-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {service.icon}
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleService(index)}
                          className="lg:hidden"
                        >
                          {expandedService === index ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </div>
                      <p className="text-muted-foreground">{service.short}</p>
                    </CardHeader>
                    <CardContent className={expandedService === index || window.innerWidth >= 1024 ? "" : "hidden"}>
                      <ul className="space-y-2 mb-6">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div>
                          <span className="font-semibold text-primary">Duration:</span> {service.duration}
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Format:</span> {service.format}
                        </div>
                      </div>
                      <Button asChild>
                        <Link to="/booking">Book This Service</Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-muted rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free consultation call, and we'll help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/booking">Schedule Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
