// Home

export interface HomeData {
  introTitle: string;
  introText: string;
  resumeUrl: string;
  introImg: {
    url: string;
  };
  aboutName: string;
  aboutDescription: string;
  aboutImg: {
    url: string;
  };
}

// Skill

export interface Skill {
  id: number;
  name: string;
  icon: string;
  startDate: Date;
}
export interface SkillInfo {
  isForShow: boolean;
  skill: Skill | null;
}

// Project

export interface Project {
  id: string;
  name: string;
  thumbnail: {
    url: string;
  };
  description: string;
  mainDescription: string;
  tools: string[];
  projectUrl: string;
  repoUrl: string;
}

// Contact

export interface ContactForm {
  contact_name: string;
  contact_email: string;
  subject: string;
  message: string;
}
