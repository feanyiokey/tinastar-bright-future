import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Mic, Briefcase, CheckCircle, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-education.jpg";

const Home = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Parenting Coaching",
      description: "Expert guidance to help you navigate the challenges of modern parenting with confidence and care.",
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "Educational Consultation",
      description: "Professional advice on curriculum development, learning strategies, and educational planning.",
    },
    {
      icon: <Mic className="w-12 h-12 text-accent" />,
      title: "Diction Training",
      description: "Improve communication skills, public speaking, and confidence through professional diction coaching.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      title: "Teacher Placement",
      description: "Connecting qualified educators with schools and families seeking exceptional teaching professionals.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "Tinastar transformed how I approach parenting. The coaching sessions gave me practical tools and renewed confidence.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "School Administrator",
      content: "Their teacher placement service is outstanding. We've hired three exceptional educators through Tinastar.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content: "The diction training helped me overcome my fear of public speaking. I'm now confident presenting in front of large audiences.",
      rating: 5,
    },
  ];

  const benefits = [
    "Experienced professionals with proven track records",
    "Personalized approach tailored to your needs",
    "Flexible scheduling to fit your lifestyle",
    "Comprehensive support and ongoing guidance",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Students learning with teachers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Empowering Education,<br />
              <span className="text-accent">Transforming Lives</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
              Professional educational services, parenting coaching, and expert guidance for families and educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
                <Link to="/booking">Book a Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational solutions designed to support both learners and educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in border-none">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Why Choose Tinastar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine expertise, passion, and personalized care to deliver exceptional educational services that make a lasting difference.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent/80 shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from families and educators we've served</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards educational excellence. Book a consultation with our experts today.
          </p>
          <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-white text-lg px-12">
            <Link to="/booking">Schedule Your Session</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
