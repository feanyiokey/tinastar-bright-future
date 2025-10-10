import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">About Tinastar</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building bridges between education and excellence through professional guidance and support
            </p>
          </div>

          {/* Our Story */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-lg text-foreground mb-4">
                  Tinastar Educational Services, also known as Tinastar Consult, was founded with a singular vision: to transform the educational landscape by providing comprehensive support to families, educators, and institutions.
                </p>
                <p className="text-lg text-foreground mb-4">
                  What began as a passion for educational excellence has grown into a trusted consultancy serving hundreds of families and educators. We believe that quality education starts with strong foundations—whether that's empowered parents, skilled teachers, or confident communicators.
                </p>
                <p className="text-lg text-foreground">
                  Our holistic approach combines practical expertise with genuine care, ensuring that every client receives personalized attention and measurable results.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-foreground">
                    To empower families and educators through professional consultation, training, and placement services that foster growth, confidence, and excellence in education.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-foreground">
                    To be the leading educational consultancy, recognized for transforming lives through innovative programs and unwavering commitment to educational excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                  <p className="text-foreground">
                    Excellence, integrity, compassion, and innovation guide everything we do. We believe in personalized care and measurable impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Founder Message */}
          <section className="mb-20">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[3/4] lg:aspect-auto">
                    <img 
                      src={founderImage} 
                      alt="Founder of Tinastar Educational Services" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Message from Our Founder</h2>
                    <p className="text-lg text-foreground mb-4">
                      "Education is not just about academic knowledge—it's about building confidence, nurturing potential, and creating opportunities for growth."
                    </p>
                    <p className="text-lg text-foreground mb-4">
                      "At Tinastar, we've dedicated ourselves to supporting the entire educational ecosystem. From helping parents navigate the challenges of raising children in today's world, to equipping teachers with the skills they need to excel, our work touches every aspect of the learning journey."
                    </p>
                    <p className="text-lg text-foreground mb-6">
                      "I'm proud of what we've accomplished and excited about the future. Together, we're not just changing education—we're transforming lives."
                    </p>
                    <div>
                      <p className="font-semibold text-primary text-lg">Christina Omolade</p>
                      <p className="text-muted-foreground">Founder & Lead Consultant</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stats */}
          <section className="py-16 bg-gradient-to-r from-primary to-primary/90 rounded-3xl text-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/90">Families Served</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">200+</div>
                  <div className="text-white/90">Educators Placed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">10+</div>
                  <div className="text-white/90">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-accent mb-2">98%</div>
                  <div className="text-white/90">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
