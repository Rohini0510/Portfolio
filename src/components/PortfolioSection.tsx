import React from 'react';
import { ProjectProps } from '../types';
import { ProjectCard } from './ProjectCard';

interface PortfolioSectionProps {
  projects: ProjectProps[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-dark">
      <div className="w-full max-w-7xl px-4 md:px-8 lg:px-16 py-12">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
           <h2 className="text-3xl lg:text-4xl font-bold text-white">
            <span className="text-gradient">My</span> Projects
          </h2>
          <p className="text-gray-400">A collection of my recent projects</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
         {/* More Projects Button */}
         <div className="mt-12 text-center">
            <button className="btn-secondary text-sm px-6 py-2">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};