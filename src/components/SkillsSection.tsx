import React from 'react';
import { SkillProps } from '../types';
import { Code, Database, Globe, Layout } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillProps[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent border-b border-navy-light/30">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Decorative & Icons */}
        <div className="relative flex items-center justify-center order-2 lg:order-1 mt-8 lg:mt-0">
             <div className="relative w-full aspect-square max-w-[300px] lg:max-w-md">
                <div className="absolute inset-0 bg-cyan-glow/20 blur-[80px] rounded-full" />
                {/* Floating Icons */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="absolute top-0 left-10 animate-[bounce_3s_infinite]">
                        <div className="p-4 bg-navy-medium rounded-2xl border border-cyan-glow/30 shadow-lg shadow-cyan-glow/20">
                            <Code className="w-8 h-8 text-cyan-glow" />
                        </div>
                    </div>
                    <div className="absolute bottom-10 right-10 animate-[bounce_3s_infinite] delay-700">
                        <div className="p-4 bg-navy-medium rounded-2xl border border-cyan-glow/30 shadow-lg shadow-cyan-glow/20">
                            <Database className="w-8 h-8 text-cyan-glow" />
                        </div>
                    </div>
                    <div className="absolute top-1/2 right-0 animate-[bounce_3s_infinite] delay-300">
                        <div className="p-4 bg-navy-medium rounded-2xl border border-cyan-glow/30 shadow-lg shadow-cyan-glow/20">
                            <Globe className="w-8 h-8 text-cyan-glow" />
                        </div>
                    </div>
                     <div className="absolute top-1/2 left-0 animate-[bounce_3s_infinite] delay-500">
                        <div className="p-4 bg-navy-medium rounded-2xl border border-cyan-glow/30 shadow-lg shadow-cyan-glow/20">
                            <Layout className="w-8 h-8 text-cyan-glow" />
                        </div>
                    </div>
                    {/* Central Abstract Element */}
                    <div className="w-48 h-48 bg-gradient-to-br from-navy-light to-navy-dark rounded-full border-4 border-cyan-glow/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                        <Code className="w-20 h-20 text-cyan-glow opacity-50" />
                    </div>
                </div>
             </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
             <h2 className="text-3xl lg:text-4xl font-bold text-white">
              <span className="text-gradient">My</span> Skills
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate web developer with experience in creating modern, responsive web applications.
              I specialize in frontend development using cutting-edge technologies to deliver exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="px-6 py-2 rounded-full border border-cyan-glow/30 text-white font-medium tracking-wide uppercase text-sm hover:bg-cyan-glow/10 hover:border-cyan-glow transition-all cursor-default"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;