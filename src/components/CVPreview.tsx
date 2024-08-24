import { CV } from "../types/cv";

interface CVPreviewProps {
	cv: CV;
}

const CVPreview = ({ cv }: CVPreviewProps) => {
	return (
		<div>
			<h2>CV Preview</h2>
			<h3>Personal Information</h3>
			<p>{cv.personalInfo.name}</p>
			<p>{cv.personalInfo.email}</p>
			<p>{cv.personalInfo.phone}</p>

			<h3>Work Experience</h3>
			{cv.workExperiences.map((exp) => (
				<div key={exp.id}>
					<p>{exp.company}</p>
					<p>{exp.position}</p>
					<p>{exp.startDate}</p>
					<p>{exp.endDate}</p>
				</div>
			))}
		</div>
	);
};

export default CVPreview;
