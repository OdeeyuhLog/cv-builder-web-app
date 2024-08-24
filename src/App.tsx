import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import {
	createWorkExperience,
	Education,
	type CV,
	type PersonalInfo,
	type WorkExperience,
} from "./types/cv";
import CVPreview from "./components/CVPreview";
import { createCVFactory } from "./utils/cvFactory";
import WorkExperienceSection from "./components/WorkExperienceSection";
import EducationSection from "./components/EducationSection";

function App() {
	const cvFactory = createCVFactory();
	const [cv, setCv] = useState<CV>(cvFactory.createCV());

	const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
		setCv((prevCv) => ({
			...prevCv,
			personalInfo: { ...prevCv.personalInfo, ...info },
		}));
	};

	const addWorkExperience = () => {
		setCv((prevCv) => ({
			...prevCv,
			workExperiences: [
				...prevCv.workExperiences,
				cvFactory.createWorkExperience(),
			],
		}));
	};

	const updateWorkExperience = (
		id: string,
		experience: Partial<WorkExperience>,
	) => {
		setCv((prevCv) => ({
			...prevCv,
			workExperiences: prevCv.workExperiences.map((exp) =>
				exp.id === id ? { ...exp, ...experience } : exp,
			),
		}));
	};

	const deleteWorkExperiece = (id: string) => {
		setCv((prevCv) => ({
			...prevCv,
			workExperiences: prevCv.workExperiences.filter((exp) => exp.id !== id),
		}));
	};

	const addEducation = () => {
		setCv((prevCv) => ({
			...prevCv,
			education: [...prevCv.education, cvFactory.createEducation()],
		}));
	};

	const updateEducation = (id: string, education: Partial<Education>) => {
		setCv((prevCv) => ({
			...prevCv,
			education: prevCv.education.map((edu) =>
				edu.id === id ? { ...edu, ...education } : edu,
			),
		}));
	};

	const deleteEducation = (id: string) => {
		setCv((prevCv) => ({
			...prevCv,
			education: prevCv.education.filter((edu) => edu.id !== id),
		}));
	};

	return (
		<>
			<div>
				<div>
					<PersonalInfoForm
						personalInfo={cv.personalInfo}
						updatePersonalInfo={updatePersonalInfo}
					/>
					<WorkExperienceSection
						workExperiences={cv.workExperiences}
						updateWorkExperience={updateWorkExperience}
						addWorkExperience={addWorkExperience}
						deleteWorkExperience={deleteWorkExperiece}
					/>
					<EducationSection
						educations={cv.education}
						addEducation={addEducation}
						updateEducation={updateEducation}
						deleteEducation={deleteEducation}
					/>
				</div>
				<div>
					<CVPreview cv={cv} />
				</div>
			</div>
		</>
	);
}

export default App;
