import type { Skill } from "../types/cv";
import type React from "react";

interface SkillsSectionProps {
	skills: Skill[];
	updateSkill: (id: string, experience: Partial<Skill>) => void;
	addSkill: () => void;
	deleteSkill: (id: string) => void;
}

const SkillsSection = ({
	skills,
	updateSkill,
	addSkill,
	deleteSkill,
}: SkillsSectionProps) => {
	const handleChange =
		(id: string) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			updateSkill(id, { [name]: value });
		};

	const handleDelete =
		(id: string) => (e: React.MouseEvent<HTMLButtonElement | undefined>) => {
			e.preventDefault();
			deleteSkill(id);
		};

	return (
		<div>
			<h2>Skills</h2>
			{skills.map((skill) => (
				<div key={skill.id}>
					<input
						type="text"
						onChange={handleChange(skill.id)}
						value={skill.skill}
						name="skill"
						placeholder="Skill..."
					/>
					<button type="button" onClick={handleDelete(skill.id)}>
						Delete
					</button>
				</div>
			))}
			<button type="button" onClick={addSkill}>
				Add Skill
			</button>
		</div>
	);
};

export default SkillsSection;
