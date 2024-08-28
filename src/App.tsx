import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import {
	createWorkExperience,
	Education,
	Skill,
	type CV,
	type PersonalInfo,
	type WorkExperience,
} from "./types/cv";
import CVPreview from "./components/CVPreview";
import { createCVFactory } from "./utils/cvFactory";
import WorkExperienceSection from "./components/WorkExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import { Tab, Tabs } from "@nextui-org/tabs";
import Header from "./components/Header";

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

	const addSkill = () => {
		setCv((prevCv) => ({
			...prevCv,
			skills: [...prevCv.skills, cvFactory.createSkill()],
		}));
	};

	const updateSkill = (id: string, skill: Partial<Skill>) => {
		setCv((prevCv) => ({
			...prevCv,
			skills: prevCv.skills.map((currentSkill) =>
				currentSkill.id === id ? { ...currentSkill, ...skill } : currentSkill,
			),
		}));
	};

	const deleteSkill = (id: string) => {
		setCv((prevCv) => ({
			...prevCv,
			skills: prevCv.skills.filter((currentSkill) => currentSkill.id !== id),
		}));
	};

	return (
		<>
			<div className="w-full p-0">
				<Header />
				<div className="flex justify-center min-w-full px-10">
					<div className="flex flex-col justify-center min-w-[40%]">
						<Tabs color="primary" radius="lg" className="p-5">
							<Tab key="personalInfoForm" title="Personal Info">
								<PersonalInfoForm
									personalInfo={cv.personalInfo}
									updatePersonalInfo={updatePersonalInfo}
								/>
							</Tab>
							<Tab key="workExperienceForm" title="Work Experience">
								<WorkExperienceSection
									workExperiences={cv.workExperiences}
									updateWorkExperience={updateWorkExperience}
									addWorkExperience={addWorkExperience}
									deleteWorkExperience={deleteWorkExperiece}
								/>
							</Tab>
							<Tab key="educationForm" title="Education">
								<EducationSection
									educations={cv.education}
									addEducation={addEducation}
									updateEducation={updateEducation}
									deleteEducation={deleteEducation}
								/>
							</Tab>
							<Tab key="skillsForm" title="Skills">
								<SkillsSection
									skills={cv.skills}
									addSkill={addSkill}
									updateSkill={updateSkill}
									deleteSkill={deleteSkill}
								/>
							</Tab>
						</Tabs>
					</div>

					<div className="min-w-[64%] p-5">
						<CVPreview cv={cv} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
