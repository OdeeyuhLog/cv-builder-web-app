import { Card, CardBody, CardHeader } from "@nextui-org/card";
import type { Education } from "../types/cv";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

interface EducationSectionProps {
	educations: Education[];
	addEducation: () => void;
	updateEducation: (id: string, education: Partial<Education>) => void;
	deleteEducation: (id: string) => void;
}

const EducationSection = ({
	educations,
	addEducation,
	updateEducation,
	deleteEducation,
}: EducationSectionProps) => {
	const handleChange =
		(id: string) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			updateEducation(id, { [name]: value });
		};

	const handleDelete =
		(id: string) => (e: React.MouseEvent<HTMLButtonElement | undefined>) => {
			e.preventDefault();
			deleteEducation(id);
		};

	return (
		<Card className="p-4" shadow="none">
			<CardHeader>
				<h2 className="text-sm font-semibold">Education</h2>
			</CardHeader>
			<CardBody>
				{educations.map((education) => (
					<>
						<Card
							key={education.id}
							className="flex flex-col gap-3 p-3"
							shadow="sm"
						>
							<Input
								label="Institution"
								type="text"
								name="institution"
								value={education.institution}
								onChange={handleChange(education.id)}
							/>
							<Input
								label="Degree Earned"
								type="text"
								name="degree"
								value={education.degree}
								onChange={handleChange(education.id)}
							/>
							<Input
								label="Location"
								name="location"
								value={education.location}
								onChange={handleChange(education.id)}
							/>
							<Input
								label="Graduation Year"
								type="date"
								name="graduationYear"
								value={education.graduationYear}
								onChange={handleChange(education.id)}
							/>
							<Button
								type="button"
								color="danger"
								onClick={handleDelete(education.id)}
							>
								Delete
							</Button>
						</Card>
					</>
				))}
			</CardBody>
			<Button type="button" color="primary" onClick={addEducation}>
				Add education
			</Button>
		</Card>
	);
};

export default EducationSection;
