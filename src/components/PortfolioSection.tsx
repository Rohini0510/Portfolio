import React from 'react';
import { ProjectProps } from '../types';
import { ProjectFlipCard } from './ProjectFlipCard';

interface PortfolioSectionProps {
  projects: ProjectProps[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent py-24">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">A collection of my recent work and experiments</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered entrance
             >
                <ProjectFlipCard project={project} />
             </div>
          ))}
        </div>
        
         {/* More Projects Button */}
         <div className="mt-16 text-center">
            <button className="bg-white text-black text-sm font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};