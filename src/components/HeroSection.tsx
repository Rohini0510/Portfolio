import React, { useState } from 'react';
import { HeroProps } from '../types';
import { Download, ArrowRight, Menu, X } from 'lucide-react';

export const HeroSection: React.FC<HeroProps> = ({ name, role, description, avatarUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-navy-dark border-b border-navy-light/30">
      
      {/* Top Navigation */}
      <nav className="absolute top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex justify-between items-center">
           <div className="flex items-center gap-3">
               <img src={avatarUrl} alt="logo" className="w-10 h-10 rounded-lg object-cover border border-navy-light" />
               <div className="flex flex-col">
                   <span className="font-bold text-white tracking-wide text-sm">Rohini Dambhare</span>
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest">Web Developer</span>
               </div>
           </div>
           
           {/* Desktop Menu */}
           <ul className="hidden lg:flex gap-8 text-xs font-medium tracking-widest text-gray-400">
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#hero">HOME</a></li>
               {/* <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#about">ABOUT</a></li> */}
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#skills">SKILLS</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#portfolio">PROJECTS</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#contact">CONTACT</a></li>
           </ul>

           {/* Mobile Menu Button */}
           <button 
             className="lg:hidden text-white hover:text-cyan-glow transition-colors"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-navy-dark/95 backdrop-blur-xl border-b border-navy-light/30 py-4 px-4 shadow-2xl">
            <ul className="flex flex-col gap-4 text-sm font-medium tracking-widest text-gray-400 text-center">
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#hero" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#skills" onClick={() => setIsMenuOpen(false)}>SKILLS</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>PROJECTS</a></li>
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a></li>
            </ul>
          </div>
        )}
      </nav>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center pt-24 lg:pt-0">
        {/* Glow effect background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/20 via-navy-dark to-navy-dark pointer-events-none" />
        
        {/* Stars Effect (Simulated) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float delay-1000" />
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-float delay-500" />
             <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float delay-700" />
             <div className="absolute top-10 right-10 w-0.5 h-0.5 bg-cyan-glow rounded-full animate-pulse-slow" />
             <div className="absolute bottom-20 left-20 w-0.5 h-0.5 bg-cyan-glow rounded-full animate-pulse-slow delay-1000" />
             <div className="absolute top-1/4 right-10 w-1 h-1 bg-white rounded-full animate-float delay-200" />
             <div className="absolute bottom-10 right-1/4 w-0.5 h-0.5 bg-cyan-glow rounded-full animate-pulse-slow delay-300" />
             <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-float delay-1500" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          
          {/* Left Content - Profile Card */}
          <div className="relative justify-self-center lg:justify-self-start order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-glow/20 to-blue-600/20 rounded-2xl blur-lg opacity-75" />
              <div className="relative bg-navy-medium/80 backdrop-blur-xl border border-navy-light rounded-2xl p-6 md:p-8 w-full max-w-[350px] md:max-w-[400px]">
                  <div className="flex items-start gap-4 mb-6">
                      <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-xl object-cover border border-navy-light" />
                      <div>
                          <h3 className="text-xl font-bold text-white">{name}</h3>
                          <p className="text-sm text-gray-400 mt-1">Web Developer • React</p>
                      </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" /> Based in India
                      </p>
                      <p className="text-sm text-gray-300 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Currently building Web Apps & Intern at Aavrajan Industries
                      </p>
                       <p className="text-sm text-gray-400 mt-4 border-t border-navy-light pt-4">
                          Open to: Projects, Work.
                      </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Tailwind', 'MongoDB', 'MySQL'].map((tech) => (
                          <span key={tech} className="px-3 py-1.5 rounded-md bg-navy-dark border border-navy-light text-xs text-gray-300 font-medium uppercase tracking-wide">
                              {tech}
                          </span>
                      ))}
                  </div>
              </div>
          </div>

          {/* Right Content */}
          <div className="text-left space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-cyan-glow uppercase flex flex-wrap gap-2">
               <span>Web Developer</span>
               <span className="text-navy-light">•</span>
               <span>JS</span>
               <span className="text-navy-light">•</span>
               <span>HTML</span>
               <span className="text-navy-light">•</span>
               <span>CSS</span>
               <span className="text-navy-light">•</span>
               <span>Tailwind</span>
               <span className="text-navy-light">•</span>
               <span>React</span>
               <span className="text-navy-light">•</span>
               <span>MongoDB</span>
               <span className="text-navy-light">•</span>
               <span>MySQL</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1]">
              Building  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-500">Digital</span> Experiences.
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
               I'm <span className="text-cyan-light font-medium">{name}</span>, a web developer specializing in modern web applications using JavaScript, React.js, Tailwind CSS, MongoDB and MySQL.
            </p>

            <div className="flex flex-wrap gap-2">
                {['Web Development', 'React', 'Modern UI/UX', 'Scalable Systems'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full border border-navy-light bg-navy-medium/50 text-[10px] tracking-wider text-gray-300 font-medium uppercase">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#portfolio" className="btn-primary px-6 py-2.5 rounded-full flex items-center justify-center gap-2 group text-sm w-full sm:w-auto">
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-6 py-2.5 rounded-full border border-navy-light text-white hover:bg-navy-light/20 transition-all text-sm font-medium w-full sm:w-auto flex items-center justify-center">
                Let's Work Together
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
