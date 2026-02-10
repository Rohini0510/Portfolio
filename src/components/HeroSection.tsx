import React, { useState, Suspense, useEffect } from 'react';
import { HeroProps } from '../types';
import { Download, ArrowRight, Menu, X } from 'lucide-react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export const HeroSection: React.FC<HeroProps> = ({ name, role, description, avatarUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [ "Web Developer", "React Developer", "UI/UX Enthusiast" ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, toRotate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // ... logic remains same or can be simplified if card is removed
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col relative overflow-hidden bg-black border-b border-navy-light/30">
      
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
               <li className="hover:text-cyan-glow cursor-pointer transition-colors"><a href="#about">ABOUT</a></li>
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

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center pt-24 pb-24 lg:py-0 relative z-10">
        
        {/* Stars Effect (Simulated) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float" />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-float delay-1000" />
            {/* ... other stars ... */}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* Left Content - Typing Animation */}
          <div className="relative z-10 text-left">
              <div className="inline-block px-3 py-1 mb-4">
                  <span className="text-green-400 text-sm font-mono font-bold tracking-widest uppercase">Hello World!!</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold text-white mb-6 leading-tight">
                 I'm <span className="text-cyan-glow">{name}</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  I am a <span className="text-white">{text}</span>
                  <span className="animate-pulse text-cyan-glow">|</span>
                </span>
              </h1>
              
              <p className="text-gray-400 font-mono text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                Building scalable digital experiences with modern technologies. 
                Specializing in <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Tailwind CSS</span>, and <span className="text-white font-medium">Full Stack Development</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                  <a href="#portfolio" className="btn-primary px-8 py-3 rounded-full flex items-center gap-2 group">
                    View Projects 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#contact" className="px-8 py-3 rounded-full border border-gray-700 text-white hover:border-cyan-glow hover:text-cyan-glow transition-all">
                    Contact Me
                  </a>
              </div>
          </div>

          {/* Right Content - Empty div to push content left (Spline is background) */}
          <div className="hidden lg:block h-full"></div>

          {/* Spline Element - Below Left Content on Mobile, Absolute on Desktop */}
          <div className="lg:absolute lg:top-0 lg:right-0 lg:w-3/5 lg:h-full w-full h-64 lg:z-0 z-10 lg:pointer-events-auto pointer-events-none">
             <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-white text-sm animate-pulse">Loading 3D Scene...</div>}>
                <Spline 
                  scene="https://prod.spline.design/Ysyhcnx2WQplPUJq/scene.splinecode"
                  className="w-full h-full"
                />
             </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;