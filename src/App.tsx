import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Mail, Linkedin, Github } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "education", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navbar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Dylan Chai
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "education", "skills", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize px-2 py-1 transition-all hover:text-blue-600 ${
                  activeSection === item
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg animate-fade-down">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {["home", "about", "education", "skills", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize px-2 py-2 transition-all hover:text-blue-600 ${
                      activeSection === item
                        ? "text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white via-blue-50 to-gray-100"
      >
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hiiiiiii, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Dylan Chai
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Computer Science Graduate 
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Continuously Learning and love to work in teams. 
                Graduate of South East Technological University with a passion 
                for Ai and Software Engineering.
              </p>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                Get in touch .This section doesnt work oops.
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 shadow-xl flex items-center justify-center">
                <div className="text-white text-4xl font-bold">DC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              My journey in tech began at South East 
              Technological University, where I built many skills in Tech including Programming,
              Kubernetes, AWS & Security.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I love to learn and Passionate about football and hobbies such as barbering and baristaing.
            </p>
            <p className="text-lg text-gray-700">
              My goal is to leverage technology to solve real-world problems and create meaningful digital 
              solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Education</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">SETU</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">South East Technological University</h3>
                    <p className="text-gray-500">BSc in Computer Science</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  I completed my Bachelor's degree at South East Technological University, where
                  I specialised software engineering. During my time at SETU,
                  I gained a comprehensive understanding of programming principles, database management,
                  and user experience design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Web Development</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">UI/UX Design</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Database Systems</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Front End</h3>
              <div className="space-y-4">
                {[
                  { name: "HTML & CSS", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "React", level: 80 },
                  { name: "Tailwind CSS", level: 85 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <div className="space-y-4">
                {[
                  { name: "Java", level: 70 },
                  { name: "Python", level: 70 },
                  { name: "AWS", level: 80 },
                  { name: "Kubernetes", level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-gray-600 mb-6">
                    Feel free to reach out if you have any questions or just want to connect!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <span className="text-gray-700">dylanchai2003@gmail.com</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Linkedin className="text-blue-600" size={20} />
                      </div>
                      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                        https://www.linkedin.com/in/dylan-chai16/
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Github className="text-blue-600" size={20} />
                      </div>
                      <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                        github.com/dylanchai
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="button" 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm hover:shadow transition-all w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-bold text-xl mb-2">Dylan Chai</h3>
          <p className="text-gray-400 mb-4">Web Developer & Designer</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DylanChai.com. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        onClick={() => scrollToSection("home")}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <ArrowRight size={20} className="rotate-270 transform -rotate-90" />
      </button>
    </div>
  );
};

export default Index;