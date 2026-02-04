import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillProps, ProjectProps } from './types';
import ContactSection from './components/ContactSection';
import profilePhoto from './assets/my profile photo.jpeg';

function App() {
  const skills: SkillProps[] = [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
  ];

  const projects: ProjectProps[] = [
    {
      id: 1,
      title: 'Engineering India',
      description: 'Official platform for Engineering India Club, empowering youth through events like Abhyudaya and community service initiatives.',
      technologies: ['React', 'Tailwind', 'Community'],
      imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Website%20homepage%20for%20engineering%20club%2C%20patriotic%20theme%2C%20modern%20ui%2C%20community%20events%2C%20india&image_size=landscape_16_9',
      status: 'BUILD COMPLETE',
      link: 'https://engineeringindia.co.in/'
    },
    {
      id: 2,
      title: 'CityPulse',
       description: 'Smart citizen-government platform for real-time civic issue reporting and urban management.',
       technologies: ['React', 'Node.js', 'Mapbox API'],
       imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Smart%20city%20dashboard%20interface%2C%20futuristic%20map%20view%2C%20data%20visualization%2C%20cyan%20and%20blue%20theme&image_size=landscape_16_9',
      status: 'IN PROGRESS',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with charts',
      technologies: ['React', 'API', 'Charts.js'],
      imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Weather%20dashboard%20interface%20with%20charts%20and%20maps%2C%20modern%20ui&image_size=landscape_16_9',
      status: 'IN PROGRESS',
    },
     {
      id: 4,
      title: 'GramSuchna',
      description: 'Digital communication platform for rural communities to bridge the information gap.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Digital%20platform%20for%20rural%20india%2C%20mobile%20interface%2C%20community%20connection%2C%20modern%20ui%20design&image_size=landscape_16_9',
      status: 'IN PROGRESS',
    },
    {
      id: 5,
      title: 'Modern Portfolio Website',
      description: 'Modern & Responsive Portfolio Website showcasing skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20portfolio%20website%20hero%20section%2C%20creative%20design&image_size=landscape_16_9',
      status: 'IN PROGRESS',
    },
  ];

  return (
    <div className="min-h-screen bg-navy-dark">
      
      <main className="w-full">
        <HeroSection
          name="Rohini Dambhare"
          role="Web Developer"
          description="I create beautiful, responsive web experiences using modern technologies. Passionate about clean code and user-centered design."
          avatarUrl={profilePhoto}
        />
        
        <SkillsSection skills={skills} />
        
        <PortfolioSection projects={projects} />
        
        <ContactSection />
      </main>
    </div>
  );
}

export default App;