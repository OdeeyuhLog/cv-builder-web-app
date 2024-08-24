import type React from "react";
import type { WorkExperience } from "../types/cv";

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
		<div>
			<h2>Work Experiences</h2>
			{workExperiences.map((experience) => (
				<>
					<div key={experience.id}>
						<input
							name="company"
							value={experience.company}
							onChange={handleChange(experience.id)}
							placeholder="Company..."
						/>
						<input
							name="position"
							value={experience.position}
							onChange={handleChange(experience.id)}
							placeholder="Position..."
						/>
						<input
							name="startDate"
							value={experience.startDate}
							onChange={handleChange(experience.id)}
							placeholder="Start Date..."
							type="date"
						/>
						<input
							name="endDate"
							value={experience.endDate}
							onChange={handleChange(experience.id)}
							placeholder="End Date..."
							type="date"
						/>
						<button type="button" onClick={handleDelete(experience.id)}>
							Delete
						</button>
					</div>
				</>
			))}
			<button type="button" onClick={addWorkExperience}>
				Add Work Experience
			</button>
		</div>
	);
};

export default WorkExperienceSection;
