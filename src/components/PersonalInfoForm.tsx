import { Input } from "@nextui-org/input";
import type { PersonalInfo } from "../types/cv";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

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
		<Card className="p-4" isBlurred shadow="none">
			<CardHeader>
				<h2 className="font-semibold text-sm">Personal Information</h2>
			</CardHeader>
			<CardBody className=" flex flex-col gap-4">
				<Input
					value={personalInfo.name}
					onChange={handlePersonalInfoChange}
					name="name"
					label="Full Name"
				/>

				<Input
					className=""
					value={personalInfo.email}
					onChange={handlePersonalInfoChange}
					name="email"
					label="Email Address"
				/>
				<Input
					className=""
					value={personalInfo.phone}
					onChange={handlePersonalInfoChange}
					name="phone"
					label="Phone number"
				/>
				<Input
					value={personalInfo.location}
					onChange={handlePersonalInfoChange}
					name="location"
					label="Location"
				/>
			</CardBody>
		</Card>
	);
};

export default PersonalInfoForm;
