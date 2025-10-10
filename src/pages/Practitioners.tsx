import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Users, BookOpen, Award, Heart } from "lucide-react";

const Practitioners = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.specialization) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Application submitted! We'll review your profile and be in touch soon.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialization: "",
      experience: "",
      message: "",
    });
  };

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Supportive Community",
      description: "Join a network of passionate educators committed to excellence"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Professional Development",
      description: "Access ongoing training and growth opportunities"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Competitive Compensation",
      description: "Fair pay that recognizes your expertise and dedication"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Meaningful Impact",
      description: "Make a real difference in students' and families' lives"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always looking for exceptional educators and practitioners to join our growing network
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Info Section */}
              <div>
                <Card className="border-none shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle>Who We're Looking For</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Teachers & Tutors</h4>
                      <p className="text-sm text-muted-foreground">
                        Qualified educators with passion for student success across all subjects and grade levels
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Educational Consultants</h4>
                      <p className="text-sm text-muted-foreground">
                        Experienced professionals who can guide families through educational decisions
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Parenting Coaches</h4>
                      <p className="text-sm text-muted-foreground">
                        Certified coaches with expertise in family dynamics and child development
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Diction Trainers</h4>
                      <p className="text-sm text-muted-foreground">
                        Speech and communication specialists who can build confidence through voice
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold text-primary mb-4">What We Offer</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Flexible working arrangements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Professional liability insurance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Marketing and client matching support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Administrative assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Continuous professional development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Application Form */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Apply Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>

                    <div>
                      <Label htmlFor="specialization">Area of Specialization *</Label>
                      <Input
                        id="specialization"
                        type="text"
                        value={formData.specialization}
                        onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                        placeholder="e.g., Elementary Math, Parenting Coach"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        placeholder="e.g., 5 years"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Tell Us About Yourself</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Share your background, qualifications, and what makes you unique..."
                        rows={4}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg text-sm">
                      <p className="text-muted-foreground">
                        Note: After submitting your application, we'll contact you to discuss next steps, which may include an interview and credential verification.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Practitioners;
