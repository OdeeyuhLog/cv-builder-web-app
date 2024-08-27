import type React from "react";
import type { WorkExperience } from "../types/cv";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface WorkExperienceFormProps {
	workExperiences: WorkExperience[];
	updateWorkExperience: (
		id: string,
		experience: Partial<WorkExperience>,
	) => void;
	addWorkExperience: () => void;
	deleteWorkExperience: (id: string) => void;
}

const WorkExperienceSection = ({
	workExperiences,
	updateWorkExperience,
	addWorkExperience,
	deleteWorkExperience,
}: WorkExperienceFormProps) => {
	const handleChange =
		(id: string) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			updateWorkExperience(id, { [name]: value });
		};

	const handleDelete =
		(id: string) => (e: React.MouseEvent<HTMLButtonElement | undefined>) => {
			e.preventDefault();
			deleteWorkExperience(id);
		};

	return (
		<Card className="p-4" shadow="none">
			<CardHeader>
				<h2 className="text-sm font-semibold min-w-10">
					Work Experiences - {workExperiences.length}
				</h2>
			</CardHeader>
			<CardBody className="overflow-y-visible flex-col gap-3">
				{workExperiences.map((experience) => (
					<>
						<Card
							key={experience.id}
							shadow="sm"
							className="p-3 flex-col gap-3"
						>
							<Input
								label="Company"
								name="company"
								value={experience.company}
								onChange={handleChange(experience.id)}
							/>
							<Input
								label="Position"
								name="position"
								value={experience.position}
								onChange={handleChange(experience.id)}
							/>
							<Input
								label="Location"
								name="location"
								value={experience.location}
								onChange={handleChange(experience.id)}
							/>
							<Input
								label="Start Date"
								name="startDate"
								value={experience.startDate}
								onChange={handleChange(experience.id)}
								type="date"
							/>
							<Input
								label="End Date"
								name="endDate"
								value={experience.endDate}
								onChange={handleChange(experience.id)}
								type="date"
							/>
							<Textarea
								label="Responsibilities"
								name="responsibilities"
								value={experience.responsibilities}
								onChange={handleChange(experience.id)}
							/>
							<Button
								type="button"
								color="danger"
								onClick={handleDelete(experience.id)}
							>
								Delete
							</Button>
						</Card>
					</>
				))}
			</CardBody>

			<Button type="button" color="primary" onClick={addWorkExperience}>
				Add Work Experience
			</Button>
		</Card>
	);
};

export default WorkExperienceSection;
