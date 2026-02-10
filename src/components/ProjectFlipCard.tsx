import React, { useState } from 'react';
import { ProjectProps } from '../types';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectFlipCardProps {
  project: ProjectProps;
}

export const ProjectFlipCard: React.FC<ProjectFlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 w-full h-[320px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)} // Tap to flip on mobile
    >
      <div className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT FACE */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <div className="relative w-full h-full">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Content at Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-6">
               {project.status === 'IN PROGRESS' && (
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-wider text-black bg-white rounded-full uppercase">
                    In Progress
                  </span>
               )}
               <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-black text-white p-6 flex flex-col justify-between border border-gray-800">
            
            {/* Background Marquee Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden select-none">
                <div className="whitespace-nowrap animate-marquee text-[8rem] font-black uppercase leading-none">
                    {project.title} &nbsp; {project.title} &nbsp; {project.title} &nbsp;
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex gap-4 mt-auto">
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-black py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Site <ExternalLink size={16} />
                    </a>
                )}
                 {/* Placeholder for Github if you have it in types later */}
                 {/* <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Github size={20} />
                 </button> */}
            </div>
        </div>

      </div>
    </div>
  );
};
