import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-dark border-t border-navy-light/30">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16 py-12">
        <div className="text-center mb-12 space-y-2">
           <h2 className="text-3xl lg:text-4xl font-bold text-white">
            <span className="text-gradient">Get In</span> Touch
          </h2>
          <p className="text-gray-400">Let's work together on your next project</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Contact Info */}
            <div className="w-full max-w-2xl space-y-8 bg-navy-medium p-8 rounded-2xl border border-navy-light/50">
                <h3 className="text-2xl font-bold text-white text-center">Contact Information</h3>
                <p className="text-gray-300 text-center">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <a href="mailto:rohinidambhare508@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-glow transition-colors group p-4 bg-navy-dark rounded-xl border border-navy-light hover:border-cyan-glow">
                        <div className="w-10 h-10 rounded-full bg-navy-medium flex items-center justify-center text-cyan-glow">
                            <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-sm break-all">rohinidambhare508@gmail.com</span>
                    </a>

                    <a href="https://wa.me/918010271008" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-glow transition-colors group p-4 bg-navy-dark rounded-xl border border-navy-light hover:border-cyan-glow">
                        <div className="w-10 h-10 rounded-full bg-navy-medium flex items-center justify-center text-cyan-glow">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-sm">+91 8010271008</span>
                    </a>
                    
                     <a href="https://github.com/Rohini0510" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-glow transition-colors group p-4 bg-navy-dark rounded-xl border border-navy-light hover:border-cyan-glow">
                        <div className="w-10 h-10 rounded-full bg-navy-medium flex items-center justify-center text-cyan-glow">
                            <Github className="w-5 h-5" />
                        </div>
                        <span className="text-sm">github.com/rohinidambhare</span>
                    </a>

                    <a href="https://www.linkedin.com/in/rohini-dambhare-9bb65a296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-cyan-glow transition-colors group p-4 bg-navy-dark rounded-xl border border-navy-light hover:border-cyan-glow">
                        <div className="w-10 h-10 rounded-full bg-navy-medium flex items-center justify-center text-cyan-glow">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <span className="text-sm">linkedin.com/in/rohinidambhare</span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
