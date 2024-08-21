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
		</div>
	);
};

export default CVPreview;
