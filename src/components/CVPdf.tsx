import type React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import type { CV } from "../types/cv";

const styles = StyleSheet.create({
	page: { padding: 30 },
	section: { marginBottom: 10 },
	title: { fontSize: 18, marginBottom: 10 },
	name: { fontSize: 24, marginBottom: 10 },
	header: { fontSize: 12, marginBottom: 20 },
	subSection: { marginBottom: 5 },
	columns: { flexDirection: "row", justifyContent: "space-between" },
});

interface CVPdfProps {
	cv: CV;
}

const CVPdf: React.FC<CVPdfProps> = ({ cv }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text style={styles.name}>{cv.personalInfo.name}</Text>
				<Text style={styles.header}>
					{cv.personalInfo.email} | {cv.personalInfo.phone} |{" "}
					{cv.personalInfo.location}
				</Text>
			</View>

			<View style={styles.section}>
				<Text style={styles.title}>Work Experience</Text>
				{cv.workExperiences.map((exp) => (
					<View key={exp.id} style={styles.subSection}>
						<View style={styles.columns}>
							<Text>
								{exp.company} - {exp.position}
							</Text>
							<Text>
								{exp.startDate} - {exp.endDate}
							</Text>
						</View>
						<Text>{exp.location}</Text>
						<Text>{exp.responsibilities}</Text>
					</View>
				))}
			</View>

			<View style={styles.section}>
				<Text style={styles.title}>Education</Text>
				{cv.education.map((edu) => (
					<View key={edu.id} style={styles.subSection}>
						<View style={styles.columns}>
							<Text>
								{edu.institution} - {edu.degree}
							</Text>
							<Text>{edu.graduationYear}</Text>
						</View>
						<Text>{edu.location}</Text>
					</View>
				))}
			</View>

			<View style={styles.section}>
				<Text style={styles.title}>Skills</Text>
				<View style={[styles.columns, { flexWrap: "wrap" }]}>
					{cv.skills.slice(0, 8).map((skill) => (
						<Text key={skill.id} style={{ width: "50%", marginBottom: 5 }}>
							{skill.skill}
						</Text>
					))}
				</View>
			</View>
		</Page>
	</Document>
);

export default CVPdf;
