import { useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import { CV, PersonalInfo } from "./types/cv";
import CVPreview from "./components/CVPreview";

function App() {
	const [cv, setCv] = useState<CV>({
		personalInfo: { name: "", email: "", phone: "" },
		workExperience: [],
		education: [],
		skills: [],
	});

	const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
		setCv((prevCv) => ({
			...prevCv,
			personalInfo: { ...prevCv.personalInfo, ...info },
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
				</div>
				<div>
					<CVPreview cv={cv} />
				</div>
			</div>
		</>
	);
}

export default App;
