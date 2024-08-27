import { Card } from "@nextui-org/card";
import type { CV } from "../types/cv";
import {
	EnvelopeClosedIcon,
	ChatBubbleIcon,
	HomeIcon,
	DownloadIcon,
} from "@radix-ui/react-icons";
import { Divider } from "@nextui-org/divider";
import type React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@nextui-org/button";
import CVPdf from "./CVPdf";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface CVPreviewProps {
	cv: CV;
}

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
	<section className="w-full mb-6">
		<h3 className="text-left text-lg uppercase font-bold mb-2">{title}</h3>
		<Divider className="mb-4" />
		{children}
	</section>
);

const CVPreview = ({ cv }: CVPreviewProps) => {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="flex justify-between">
				<h2 className="mb-4 text-left text-2xl font-bold">CV Preview</h2>
				<PDFDownloadLink document={<CVPdf cv={cv} />} fileName="my-cv.pdf">
					{({ blob, url, loading, error }) => (
						<Button color="primary" endContent={<DownloadIcon />}>
							Download PDF
						</Button>
					)}
				</PDFDownloadLink>
				<Button>Print PDF</Button>
			</div>
			<Card className="p-8" radius="sm" shadow="md">
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold mb-4">{cv.personalInfo.name}</h1>
					<div className="flex flex-wrap justify-center gap-4 text-sm">
						{[
							{ icon: <EnvelopeClosedIcon />, text: cv.personalInfo.email },
							{ icon: <ChatBubbleIcon />, text: cv.personalInfo.phone },
							{ icon: <HomeIcon />, text: cv.personalInfo.location },
						].map(({ icon, text }, index) => (
							<p key={index} className="flex items-center gap-2">
								{icon}
								{text}
							</p>
						))}
					</div>
				</header>

				<Section title="Work Experience">
					{cv.workExperiences.map((exp) => (
						<article key={exp.id} className="mb-4 last:mb-0">
							<div className="flex flex-wrap justify-between gap-2 mb-2">
								<div>
									<h4 className=" text-left font-semibold uppercase">
										{exp.company}
									</h4>
									<p>{exp.position}</p>
								</div>
								<div className="text-right">
									<p>{`${exp.startDate} - ${exp.endDate}`}</p>
									<p>{exp.location}</p>
								</div>
							</div>
							<p className="text-sm">{exp.responsibilities}</p>
						</article>
					))}
				</Section>

				<Section title="Education">
					{cv.education.map((edu) => (
						<article
							key={edu.id}
							className="flex justify-between gap-4 mb-2 last:mb-0"
						>
							<div>
								<h4 className="font-semibold uppercase">{edu.institution}</h4>
								<p>{edu.degree}</p>
							</div>
							<div className="text-right">
								<p>{edu.graduationYear}</p>
								<p>{edu.location}</p>
							</div>
						</article>
					))}
				</Section>

				<Section title="Skills">
					<ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
						{cv.skills.map((skill) => (
							<li key={skill.id} className="flex items-center">
								<span className="w-2 h-2 bg-blue-500 rounded-full mr-2">
									{""}
								</span>
								{skill.skill}
							</li>
						))}
					</ul>
				</Section>
			</Card>
		</div>
	);
};

export default CVPreview;
