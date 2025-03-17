
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  CalendarDays, 
  ChevronDown, 
  GraduationCap, 
  Languages, 
  Lightbulb, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  Users 
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Simple animation on scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-element');
      
      scrollElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.8;
        
        if (isInViewport) {
          element.classList.add('fade-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>DeutschKameroon - German Language School in Cameroon</title>
        <meta name="description" content="Learn German in Cameroon with DeutschKameroon. We offer German language courses for all levels from A1 to C1." />
        <meta name="keywords" content="German language, Cameroon, Deutsch, language courses, Yaoundé, Douala, Bamenda, A1, B1, C1, German studies" />
        <meta property="og:title" content="DeutschKameroon - German Language School in Cameroon" />
        <meta property="og:description" content="Learn German in Cameroon with DeutschKameroon. We offer German language courses for all levels from A1 to C1." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deutschkameroon.cm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeutschKameroon - German Language School in Cameroon" />
        <meta name="twitter:description" content="Learn German in Cameroon with DeutschKameroon. We offer German language courses for all levels from A1 to C1." />
        <link rel="canonical" href="https://deutschkameroon.cm" />
      </Helmet>

      {/* Navigation */}
      <nav className="py-4 px-6 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">DeutschKameroon</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-gray-600 hover:text-primary">Home</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-primary">About</a></li>
          <li><a href="#services" className="text-gray-600 hover:text-primary">Services</a></li>
          <li><a href="#courses" className="text-gray-600 hover:text-primary">Courses</a></li>
          <li><a href="#events" className="text-gray-600 hover:text-primary">Events</a></li>
          <li><a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
        </ul>
        
        <Button className="hidden md:flex">Enroll Now</Button>
        
        <Button variant="ghost" className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-[90vh] flex flex-col justify-center px-6 md:px-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Unlock the German Language in the Heart of Cameroon
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Join our immersive German language courses designed specifically for Cameroonians looking to study, work, or explore opportunities in German-speaking countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Courses
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ChevronDown className="w-8 h-8 text-primary" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-gray-50 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Learn German With Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Native-Speaking Teachers"
              description="Our instructors are native German speakers or certified professionals with years of teaching experience."
            />
            <FeatureCard 
              icon={<Languages className="h-10 w-10 text-primary" />}
              title="Cultural Immersion"
              description="Learn beyond just language. Understand German culture, traditions, and social norms."
            />
            <FeatureCard 
              icon={<MapPin className="h-10 w-10 text-primary" />}
              title="Local Convenience"
              description="Located in the heart of Yaoundé with additional centers in Douala and Bamenda."
            />
          </div>
        </div>
      </section>

      {/* Services Section - NEW */}
      <section id="services" className="py-20 px-6 md:px-20 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Beyond language courses, we offer a range of services to support your German language journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<GraduationCap className="h-12 w-12 text-primary" />}
              title="Exam Preparation"
              description="Specialized coaching for TestDaF, DSH, Goethe-Zertifikat, and other German language proficiency exams."
            />
            <ServiceCard 
              icon={<Lightbulb className="h-12 w-12 text-accent" />}
              title="University Application Assistance"
              description="Guidance with German university applications, including document translation and interview preparation."
            />
            <ServiceCard 
              icon={<Sparkles className="h-12 w-12 text-primary" />}
              title="Translation Services"
              description="Professional translation of documents from German to English or French and vice versa."
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 md:px-20 bg-gray-50 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our German Courses</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            From complete beginners to advanced speakers, we have the perfect course to match your goals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CourseCard 
              title="A1 Beginners"
              duration="8 weeks"
              description="Start your German language journey with basic vocabulary, simple phrases, and essential grammar."
              price="60,000 FCFA"
            />
            <CourseCard 
              title="A2-B1 Intermediate"
              duration="12 weeks"
              description="Build on your foundation with more complex structures, practical conversations, and expanded vocabulary."
              price="85,000 FCFA"
            />
            <CourseCard 
              title="B2-C1 Advanced"
              duration="16 weeks"
              description="Refine your fluency, master complex grammar, and prepare for academic or professional environments."
              price="120,000 FCFA"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section - NEW */}
      <section id="events" className="py-20 px-6 md:px-20 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join our cultural and educational events to practice your German and connect with the community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <EventCard 
              title="Oktoberfest Celebration"
              date="October 15, 2023"
              location="DeutschKameroon Yaoundé Center"
              description="Experience authentic German culture with traditional food, music, and beer at our annual Oktoberfest celebration."
              buttonText="Register Now"
            />
            <EventCard 
              title="German Film Festival"
              date="November 5-7, 2023"
              location="Cultural Center, Douala"
              description="A three-day festival featuring award-winning German films with English and French subtitles. Discussion panels follow each screening."
              buttonText="View Program"
            />
            <EventCard 
              title="Study in Germany Info Session"
              date="December 12, 2023"
              location="Virtual Event (Zoom)"
              description="Learn about university opportunities in Germany, application processes, scholarships, and visa requirements."
              buttonText="Join Online"
            />
            <EventCard 
              title="German Christmas Market"
              date="December 18, 2023"
              location="DeutschKameroon Bamenda Center"
              description="Enjoy a traditional German Christmas market with handcrafted gifts, seasonal treats, and festive activities."
              buttonText="Learn More"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:px-20 bg-gray-50 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Students Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              content="Learning German at DeutschKameroon completely changed my life. I'm now working in Berlin as a software engineer thanks to the language skills I gained here."
              author="Jean Nkeng"
              position="Former Student, now in Germany"
            />
            <TestimonialCard 
              content="The teachers are incredibly patient and supportive. I started with zero knowledge of German and within 6 months I passed my A2 exam with flying colors."
              author="Marie Fomban"
              position="Medical Student"
            />
            <TestimonialCard 
              content="As a business professional, the flexible schedule allowed me to learn German while maintaining my job. The focused business German module was exactly what I needed."
              author="Pierre Kamto"
              position="Business Consultant"
            />
            <TestimonialCard 
              content="The cultural immersion approach made learning fun and practical. I wasn't just memorizing words, I was understanding a whole new way of thinking."
              author="Yvette Melong"
              position="University Student"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 scroll-element">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Have questions or ready to enroll? Reach out to our team and we'll get back to you promptly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input id="firstName" className="w-full px-4 py-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input id="lastName" className="w-full px-4 py-2 border rounded-md" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full px-4 py-2 border rounded-md" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded-md"></textarea>
                </div>
                
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Visit Our Centers</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Yaoundé Headquarters</h4>
                  <p className="text-gray-600 mb-2">123 Avenue de l'Indépendance</p>
                  <p className="text-gray-600 mb-2">Quartier Bastos, Yaoundé</p>
                  <p className="text-gray-600">Phone: +237 6XX XXX XXX</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Douala Center</h4>
                  <p className="text-gray-600 mb-2">45 Rue de Bali</p>
                  <p className="text-gray-600 mb-2">Akwa, Douala</p>
                  <p className="text-gray-600">Phone: +237 6XX XXX XXX</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Bamenda Office</h4>
                  <p className="text-gray-600 mb-2">78 Commercial Avenue</p>
                  <p className="text-gray-600 mb-2">Up Station, Bamenda</p>
                  <p className="text-gray-600">Phone: +237 6XX XXX XXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Languages className="h-6 w-6 text-white" />
                <span className="font-semibold text-xl">DeutschKameroon</span>
              </div>
              <p className="text-gray-400">
                Opening doors to opportunities through quality German language education in Cameroon.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Courses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">A1 Beginners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">A2-B1 Intermediate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">B2-C1 Advanced</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Business German</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Exam Preparation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-white hover:text-primary-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-primary-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-primary-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-primary-foreground">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                <MessageSquare className="h-4 w-4 inline-block mr-2" />
                info@deutschkameroon.cm
              </p>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} DeutschKameroon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        .scroll-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

// Component for feature cards in the About section
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for service cards in the Services section
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-accent/20 text-center">
      <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-50 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Component for course cards in the Courses section
const CourseCard = ({ title, duration, description, price }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-1 bg-primary" />
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{duration}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">{price}</span>
          <Button variant="outline" size="sm">Enroll Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Component for event cards in the Events section
const EventCard = ({ title, date, location, description, buttonText }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-4 text-accent">
          <CalendarDays className="h-5 w-5 mr-2" />
          <span className="font-medium">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button variant="outline" size="sm" className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

// Component for testimonial cards in the Testimonials section
const TestimonialCard = ({ content, author, position }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <p className="text-gray-600 mb-6 italic">"{content}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Index;
