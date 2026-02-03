export interface HeroProps {
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
}

export interface SkillProps {
  name: string;
  level: number;
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  status: 'BUILD COMPLETE' | 'IN PROGRESS';
  link?: string;
}

export interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  glow?: boolean;
}
