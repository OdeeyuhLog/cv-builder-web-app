interface CV {
	personalInfo: {
		name: string;
		email: string;
		phone: string;
	};
	education: {
		institution: string;
		degree: string;
		graduationYear: string;
	}[];
	workExperience: {
		company: string;
		position: string;
		startDate: string;
		endDate: string;
	}[];
	skills: string[];
}

interface PersonalInfo {
	name: string;
	email: string;
	phone: string;
}

interface Education {
	institution: string;
	degree: string;
	graduationYear: string;
}

interface WorkExperience {
	company: string;
	position: string;
	startDate: string;
	endDate: string;
}

interface CVService {
	createCV: () => CV;
	updatePersonalInfo: (info: PersonalInfo) => void;
	addEducation: (info: Education) => void;
	addWorkExperience: (info: WorkExperience) => void;
	addSkills: (skill: string) => void;
	getCV: () => CV;
}

export type { CV, CVService, PersonalInfo, Education, WorkExperience };
