import React from 'react';
import { ProjectProps } from '../types';
import { ExternalLink } from 'lucide-react';

export const ProjectCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div className="bg-navy-medium rounded-xl overflow-hidden border border-navy-light group hover:border-cyan-glow/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-glow/20 flex flex-col h-full">
      {/* Thumbnail Area */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent z-10 opacity-60" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Banner */}
        <div className="absolute top-4 left-4 z-20">
             <div className="bg-navy-dark/90 backdrop-blur-sm border border-cyan-glow/30 rounded-lg p-2 text-xs">
                <div className="text-cyan-glow font-bold tracking-wider">{project.status}</div>
             </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-glow transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-navy-light/30 text-cyan-light border border-cyan-glow/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action */}
        <div className="mt-auto pt-4 border-t border-navy-light/50 flex justify-end">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-white hover:text-cyan-glow flex items-center gap-1 transition-colors"
              >
                  View Project <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <button className="text-sm text-white hover:text-cyan-glow flex items-center gap-1 transition-colors">
                  View Project <ExternalLink className="w-3 h-3" />
              </button>
            )}
        </div>
      </div>
    </div>
  );
};