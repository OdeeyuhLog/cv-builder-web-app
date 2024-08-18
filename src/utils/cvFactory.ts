import { CV, CVService, Education, PersonalInfo, WorkExperience } from "../types/cv";

function createCV(): CVService {
	let cv: CV = {
		personalInfo: {
			name: "",
			email: "",
			phone: "",
		},
		education: [],
		workExperience: [],
		skills: [],
	};

	return {
		createCV: () => {
			cv = {
				personalInfo: { name: "", email: "", phone: "" },
				education: [],
				workExperience: [],
				skills: [],
			};
			return cv;
		},

		updatePersonalInfo: (info: PersonalInfo) => {
			cv.personalInfo = info
		},

		addEducation: (education: Education) => {
			cv.education.push(education)
		},

		addWorkExperience: (experience: WorkExperience) => {
			cv.workExperience.push(experience)
		},

		addSkills: (skill: string) => {
			cv.skills.push(skill)
		},

		getCV: () => {
			return {...cv}
		}




	};
}

export {createCV}