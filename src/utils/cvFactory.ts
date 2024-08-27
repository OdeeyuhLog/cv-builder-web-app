// CVFactory.ts
import { v4 as uuidv4 } from "uuid";
import type {
	CV,
	WorkExperience,
	Education,
	PersonalInfo,
	Skill,
} from "../types/cv";

export function createCVFactory() {
	function createCV(): CV {
		return {
			personalInfo: { name: "", email: "", phone: "" },
			workExperiences: [],
			education: [],
			skills: [],
		};
	}

	function createWorkExperience(): WorkExperience {
		return {
			id: uuidv4(),
			company: "",
			position: "",
			startDate: "",
			endDate: "",
		};
	}

	function createEducation(): Education {
		return {
			id: uuidv4(),
			institution: "",
			degree: "",
			graduationYear: "",
		};
	}

	function createSkill(): Skill {
		return {
			id: uuidv4(),
			skill: "",
		};
	}

	function updatePersonalInfo(cv: CV, info: Partial<PersonalInfo>): CV {
		return {
			...cv,
			personalInfo: { ...cv.personalInfo, ...info },
		};
	}

	function addWorkExperience(cv: CV): CV {
		return {
			...cv,
			workExperiences: [...cv.workExperiences, createWorkExperience()],
		};
	}

	function updateWorkExperience(
		cv: CV,
		id: string,
		experience: Partial<WorkExperience>,
	): CV {
		return {
			...cv,
			workExperiences: cv.workExperiences.map((exp) =>
				exp.id === id ? { ...exp, ...experience } : exp,
			),
		};
	}

	function addEducation(cv: CV): CV {
		return {
			...cv,
			education: [...cv.education, createEducation()],
		};
	}

	function updateEducation(cv: CV, id: string, edu: Partial<Education>): CV {
		return {
			...cv,
			education: cv.education.map((item) =>
				item.id === id ? { ...item, ...edu } : item,
			),
		};
	}

	function updateSkills(cv: CV, skills: Skill[]): CV {
		return { ...cv, skills };
	}

	return {
		createCV,
		createWorkExperience,
		createEducation,
		createSkill,
		updatePersonalInfo,
		addWorkExperience,
		updateWorkExperience,
		addEducation,
		updateEducation,
		updateSkills,
	};
}
