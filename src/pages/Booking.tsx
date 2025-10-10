import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    "Parenting Coaching",
    "Educational Consultation",
    "Diction Training",
    "Teacher Placement",
    "Free Consultation"
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate || !selectedTime || !name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Booking request submitted! We'll contact you soon to confirm.");
    
    // Reset form
    setSelectedService("");
    setSelectedDate(undefined);
    setSelectedTime("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Book Your Session</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your service, pick a convenient time, and take the first step toward excellence
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar Section */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-6 h-6 text-accent" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="service" className="text-base mb-2 block">Service *</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base mb-2 block">Choose Date *</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>

                  <div>
                    <Label className="text-base mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Available Time Slots *
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="text-xs"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form Section */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us more about what you're looking for..."
                        rows={4}
                      />
                    </div>

                    {/* Summary */}
                    {selectedService && selectedDate && selectedTime && (
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="font-semibold text-primary mb-2">Booking Summary:</p>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Service:</span> {selectedService}
                        </p>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Date:</span> {selectedDate.toLocaleDateString()}
                        </p>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Time:</span> {selectedTime}
                        </p>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full">
                      Confirm Booking
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

export default Booking;
