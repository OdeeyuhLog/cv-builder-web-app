interface CV {
	personalInfo: PersonalInfo;
	education: Education[];
	workExperiences: WorkExperience[];
	skills: Skill[];
}

interface PersonalInfo {
	name: string;
	email: string;
	phone: string;
	location: string;
	summary: string;
}

interface Education {
	id: string;
	institution: string;
	degree: string;
	location: string;
	graduationYear: string;
}

interface WorkExperience {
	id: string;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	responsibilities: string;
}

interface Skill {
	id: string;
	skill: string;
}

export type { CV, PersonalInfo, Education, WorkExperience, Skill };
