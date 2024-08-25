import { v4 as uuidv4 } from "uuid";
interface CV {
	personalInfo: {
		name: string;
		email: string;
		phone: string;
	};
	education: Education[];
	workExperiences: WorkExperience[];
	skills: Skill[];
}

interface PersonalInfo {
	name: string;
	email: string;
	phone: string;
}

interface Education {
	id: string;
	institution: string;
	degree: string;
	graduationYear: string;
}

interface WorkExperience {
	id: string;
	company: string;
	position: string;
	startDate: string;
	endDate: string;
}

interface Skill {
	id: string;
	skill: string;
}

export type { CV, PersonalInfo, Education, WorkExperience, Skill };
