import type { PersonalInfo } from "../types/cv";

interface PersonalInfoFormProps {
	personalInfo: PersonalInfo;
	updatePersonalInfo: (newData: Partial<PersonalInfo>) => void;
}

const PersonalInfoForm = ({
	personalInfo,
	updatePersonalInfo,
}: PersonalInfoFormProps) => {
	const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		updatePersonalInfo({ [name]: value });
	};

	return (
		<div className="bg-slate-50">
			<form>
				<h2>Personal Information</h2>

				<input
					className=""
					placeholder="Enter name..."
					value={personalInfo.name}
					onChange={handlePersonalInfoChange}
					name="name"
				/>
				<input
					className=""
					placeholder="Enter name..."
					value={personalInfo.email}
					onChange={handlePersonalInfoChange}
					name="email"
				/>
				<input
					className=""
					placeholder="Enter name..."
					value={personalInfo.name}
					onChange={handlePersonalInfoChange}
					name="phone"
				/>
			</form>
		</div>
	);
};

export default PersonalInfoForm;
