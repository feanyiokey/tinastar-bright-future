import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent! We'll get back to you within 24 hours.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone",
      details: "+1 (234) 567-890",
      link: "tel:+1234567890"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email",
      details: "info@tinastar.edu",
      link: "mailto:info@tinastar.edu"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Address",
      details: "123 Education Street, Learning District, City",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-4">{info.icon}</div>
                    <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                    {info.link !== "#" ? (
                      <a 
                        href={info.link} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                      <MapPin className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We're located in the heart of the education district, easily accessible by public transportation and with ample parking available.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-gradient-to-br from-primary to-primary/90 text-white">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                    <p className="mb-6">
                      Schedule a free 15-minute phone consultation to discuss your needs and learn how we can help.
                    </p>
                    <Button asChild variant="secondary" size="lg" className="w-full">
                      <a href="tel:+1234567890">Call Now</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-semibold text-primary">How quickly will I get a response?</p>
                        <p className="text-muted-foreground">We typically respond within 24 hours on business days.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Do you offer virtual consultations?</p>
                        <p className="text-muted-foreground">Yes! All our services are available both in-person and online.</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary">What are your payment options?</p>
                        <p className="text-muted-foreground">We accept all major credit cards, bank transfers, and payment plans.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
