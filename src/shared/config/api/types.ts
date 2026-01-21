export type ModeType = 'NEW' | 'REPEAT' | 'RANDOM'

export type FiltersParamsType = {
  limit?: number,
  skills?: number[],
  complexity?: number[],
  mode?: ModeType,
	specialization?: number | number[],
  page?: number,
  rate?: number[],
  title?: string
}

export type Skills= {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
};

export type Specialization = {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  createdAt: string;
  updatedAt: string;
};

export type Question = {
  id: number;
  title: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: 'public' | 'private' | string; 
  rate: number;
  complexity: number;
  createdById: string;
  updatedById: string;
  questionSpecializations: Specialization[];
  questionSkills: Skills[];
  createdAt: string; 
  updatedAt: string;
}

