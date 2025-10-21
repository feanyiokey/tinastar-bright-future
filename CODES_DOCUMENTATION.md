# Tinastar Educational Services - Complete Code Documentation

## Table of Contents
1. [Project Structure](#project-structure)
2. [Configuration Files](#configuration-files)
3. [Design System](#design-system)
4. [Components](#components)
5. [Pages](#pages)

---

## Project Structure

```
tinastar-educational-services/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── hero-education.jpg
│   │   ├── founder.jpg
│   │   ├── parenting.jpg
│   │   ├── consultation.jpg
│   │   ├── diction.jpg
│   │   └── teachers.jpg
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Booking.tsx
│   │   ├── Practitioners.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## Configuration Files

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tinastar Educational Services | Parenting & Educational Consultation</title>
    <meta name="description" content="Professional educational services including parenting coaching, educational consultation, diction training, and teacher placement. Empowering families and educators to achieve excellence." />
    <meta name="author" content="Tinastar Educational Services" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <meta property="og:title" content="Tinastar Educational Services | Empowering Education, Transforming Lives" />
    <meta property="og:description" content="Professional educational consultancy offering parenting coaching, educational consultation, diction training, and teacher placement services." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### src/main.tsx
```typescript
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### src/App.tsx
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Practitioners from "./pages/Practitioners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/practitioners" element={<Practitioners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## Design System

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 35 20% 98%;
    --foreground: 215 25% 15%;

    --card: 0 0% 100%;
    --card-foreground: 215 25% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 215 25% 15%;

    --primary: 215 65% 25%;
    --primary-foreground: 0 0% 100%;

    --secondary: 35 55% 85%;
    --secondary-foreground: 215 25% 15%;

    --muted: 35 30% 92%;
    --muted-foreground: 215 15% 45%;

    --accent: 38 85% 55%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 35 25% 88%;
    --input: 35 25% 88%;
    --ring: 215 65% 25%;

    --radius: 0.75rem;
    
    /* Custom educational theme colors */
    --education-blue: 215 65% 25%;
    --education-blue-light: 215 55% 45%;
    --warm-gold: 38 85% 55%;
    --warm-cream: 35 30% 95%;
    --trust-dark: 215 75% 15%;
    
    /* Gradients */
    --gradient-hero: linear-gradient(135deg, hsl(215 65% 25%) 0%, hsl(215 55% 35%) 100%);
    --gradient-warm: linear-gradient(135deg, hsl(38 85% 55%) 0%, hsl(38 75% 65%) 100%);
    
    /* Shadows */
    --shadow-soft: 0 4px 20px hsla(215 65% 25% / 0.08);
    --shadow-card: 0 8px 30px hsla(215 65% 25% / 0.12);
    
    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 215 25% 10%;
    --foreground: 35 20% 95%;

    --card: 215 25% 12%;
    --card-foreground: 35 20% 95%;

    --popover: 215 25% 12%;
    --popover-foreground: 35 20% 95%;

    --primary: 215 55% 55%;
    --primary-foreground: 0 0% 100%;

    --secondary: 215 20% 20%;
    --secondary-foreground: 35 20% 95%;

    --muted: 215 20% 20%;
    --muted-foreground: 35 15% 65%;

    --accent: 38 75% 50%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 100%;

    --border: 215 20% 20%;
    --input: 215 20% 20%;
    --ring: 215 55% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

---

## Components

### src/components/Navigation.tsx
```typescript
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/booking", label: "Book Session" },
    { to: "/practitioners", label: "Join Our Team" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Tinastar <span className="text-accent">Educational Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4">
              <Link to="/booking">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" className="mt-2">
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
```

### src/components/Footer.tsx
```typescript
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tinastar Educational Services</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Empowering families and educators through professional consultation, training, and placement services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-accent transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/practitioners" className="hover:text-accent transition-colors">
                  Join Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Education Street, Learning District, City
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors text-primary-foreground/80">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@tinastar.edu" className="hover:text-accent transition-colors text-primary-foreground/80">
                  info@tinastar.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Tinastar Educational Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## Pages

### src/pages/Home.tsx
```typescript
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
```

### src/pages/About.tsx
```typescript
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
                      <p className="font-semibold text-primary text-lg">Christina Nwafor</p>
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
                  <div className="text-5xl font-bold text-accent mb-2">20+</div>
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
```

*Continue with Services.tsx, Booking.tsx, Practitioners.tsx, and Contact.tsx which follow similar patterns...*

---

## Dependencies (package.json)

The project uses these main dependencies:
- React 18.3.1
- React Router DOM 6.30.1
- TypeScript
- Vite
- Tailwind CSS
- Radix UI components (for accessible UI)
- Lucide React (for icons)
- Date-fns (for date handling)
- React Hook Form & Zod (for form validation)
- Sonner & Toast (for notifications)

---

## Deployment

To deploy this React application:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to any static hosting service
3. For GitHub Pages, use GitHub Actions or `gh-pages` package

---

**Created by: Lovable AI**
**Project: Tinastar Educational Services Website**
**Technology Stack: React + TypeScript + Tailwind CSS + Vite**
