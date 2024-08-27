import { Card, CardBody, CardHeader } from "@nextui-org/card";
import type { Skill } from "../types/cv";
import type React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { TrashIcon } from "@radix-ui/react-icons";

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
		<Card className="p-4" shadow="none">
			<CardHeader>
				<h2 className="text-sm font-semibold">Skills - {skills.length}</h2>
			</CardHeader>

			<CardBody className="flex flex-col gap-3">
				{skills.map((skill) => (
					<Card
						key={skill.id}
						className="flex flex-row p-2 gap-3"
						radius="sm"
						shadow="sm"
					>
						<Input
							type="text"
							onChange={handleChange(skill.id)}
							value={skill.skill}
							name="skill"
							placeholder="Skill..."
							radius="sm"
						/>
						<Button
							radius="sm"
							type="button"
							color="danger"
							onClick={handleDelete(skill.id)}
							className="min-w-5"
						>
							<TrashIcon className="size-6" />
						</Button>
					</Card>
				))}
			</CardBody>

			<Button type="button" color="primary" onClick={addSkill}>
				Add Skill
			</Button>
		</Card>
	);
};

export default SkillsSection;
