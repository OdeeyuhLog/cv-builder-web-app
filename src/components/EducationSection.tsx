import type { Education } from "../types/cv";

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
		<div>
			<h2>Education</h2>
			{educations.map((education) => (
				<>
					<div key={education.id}>
						<input
							type="text"
							name="institution"
							value={education.institution}
							onChange={handleChange(education.id)}
							placeholder="Institution"
						/>
						<input
							type="text"
							name="degree"
							value={education.degree}
							onChange={handleChange(education.id)}
							placeholder="Degree"
						/>
						<input
							type="date"
							name="graduationYear"
							value={education.graduationYear}
							onChange={handleChange(education.id)}
							placeholder="Institution"
						/>
						<button type="button" onClick={handleDelete(education.id)}>
							Delete
						</button>
					</div>
				</>
			))}
			<button type="button" onClick={addEducation}>
				Add education
			</button>
		</div>
	);
};

export default EducationSection;
