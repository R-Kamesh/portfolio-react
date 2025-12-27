import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap, Database, Brain, Globe } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Fully responsive portfolio website built using pure HTML and CSS, focusing on layout, responsiveness, and clean UI structure. Deployed via GitHub Pages.",
      tags: ["HTML", "CSS", "GitHub Pages", "Responsive Design"],
      gradient: "from-purple-500 to-pink-500",
      link: "https://r-kamesh.github.io/kamesh.github.io/"
    },
    {
      title: "Linear Regression ML Model",
      description: "Supervised machine learning model for predicting continuous values with comprehensive data preprocessing and model evaluation.",
      tags: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#"
    }
  ];

  const skills = [
    { 
      name: "Programming", 
      items: ["Python", "Java", "C#", ], 
      icon: Code,
      color: "purple"
    },
    { 
      name: "ML & Data", 
      items: ["NumPy", "Pandas", "Scikit-learn", "Machine Learning"], 
      icon: Brain,
      color: "blue"
    },
    { 
      name: "Web Dev", 
      items: ["Node.js", "React.js", "MySQL", "HTML", "CSS"], 
      icon: Globe,
      color: "pink"
    },
    { 
      name: "Tools", 
      items: ["Git", "GitHub", "VS Code"], 
      icon: Database,
      color: "cyan"
    }
  ];

  const learning = [
    "Backend Development (Node.js, REST APIs)",
    "Data Structures & Algorithms",
    "Applied Machine Learning Techniques",
    "Deep Learning Fundamentals"
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Animated background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4), transparent 50%)`
        }}
      />
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 shadow-lg shadow-purple-500/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Kamesh
          </div>
          <div className="flex gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-purple-400 transition-all duration-300 relative group ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center z-10 max-w-5xl">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-purple-400">Software & ML Developer</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              KAMESH R
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Designing Software Systems at the Intersection of Code & Intelligence
            </p>
            <div className="text-center mb-12">
              <p className="text-lg text-gray-400">
               B.Tech @ IIT Kanpur (MSE) · Full-Stack & ML Developer
              </p>
              <p className="text-lg text-gray-400">
                 Focused on building real-world systems, not just demos
              </p>
            </div>
          </div>
          
          <div className="flex gap-6 justify-center mb-12">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 hover:border-pink-500 transition-all duration-300">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/R-Kamesh" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-full hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:rkamesh982006@gmail.com" className="p-3 border border-gray-700 rounded-full hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://r-kamesh.github.io/kamesh.github.io/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-full hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🎓 Education</h3>
                <p className="text-xl font-semibold mb-2">Indian Institute of Technology Kanpur</p>
                <p className="text-gray-400">B.Tech . Materials Science & Engineering</p>
                <p className="text-gray-500">2024 - 2028</p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">📍 Location</h3>
                <p className="text-xl">Chennai, India</p>
                <p className="text-gray-400 mt-2">Available for internships & remote roles</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-pink-400">💡 What I Do</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I build full-stack web applications and applied machine learning systems with a focus on clean architecture, performance, and real-world use cases.                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-400">Full-Stack Web Development (React, Node.js, APIs)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">Applied Machine Learning & Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-400">Backend Systems, Algorithms & Problem Solving</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">🚀 Currently Learning</h3>
                <div className="space-y-2">
                  {learning.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-400">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              const colorClasses = {
                purple: 'from-purple-500/10 to-pink-500/10 border-purple-500/30 hover:border-purple-500',
                blue: 'from-blue-500/10 to-cyan-500/10 border-blue-500/30 hover:border-blue-500',
                pink: 'from-pink-500/10 to-purple-500/10 border-pink-500/30 hover:border-pink-500',
                cyan: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30 hover:border-cyan-500'
              };
              
              return (
                <div
                  key={idx}
                  className={`p-6 bg-gradient-to-br ${colorClasses[skill.color]} border backdrop-blur-sm rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                >
                  <Icon className={`w-10 h-10 mb-4 text-${skill.color}-400`} />
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-${skill.color}-400 rounded-full`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:rkamesh982006@gmail.com"
              className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl hover:scale-105 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400">rkamesh982006@gmail.com</p>
            </a>
            
            <a
              href="https://github.com/R-Kamesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl hover:scale-105 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <Github className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-400">@R-Kamesh</p>
            </a>
            
            <a
              href="https://r-kamesh.github.io/kamesh.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl hover:scale-105 hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
            >
              <Globe className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <h3 className="font-semibold mb-2">Portfolio</h3>
              <p className="text-sm text-gray-400">Visit Website</p>
            </a>
          </div>
          
          <div className="p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl backdrop-blur-sm">
            <p className="text-2xl font-semibold mb-4">Ready to build something amazing?</p>
            <a
              href="mailto:rkamesh982006@gmail.com"
              className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Kamesh R. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}