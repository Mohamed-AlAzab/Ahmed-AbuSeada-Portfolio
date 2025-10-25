'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function EducationSection() {
	const education = [
		{
			degree: 'Bachelor of Computer Science',
			institution: 'Alexandria University',
			location: 'Alexandria, Egypt',
			period: '2022 - Now',
			description:
				'Focused on software engineering, algorithms, and data structures.',
			gpa: '3.77/4.0',
		},
		// {
		// 	degree: 'Back-End Node.js Diploma',
		// 	institution: 'Route Academy',
		// 	location: 'Alexandria, Egypt',
		// 	period: '2025 - Now',
		// 	description: 'Focused on Node.js, Express.js, and MongoDB.',
		// },
	];

	const certifications = [
        {
			name: 'Back-End Development Diploma',
			issuer: 'Route IT Training Center',
			year: '2025 - Now',
		},
		{
			name: 'Node.js, Express, MongoDB',
			issuer: 'The Complete Bootcamp – Udemy',
			year: '2024',
		},
		{
			name: 'REST APIs, GraphQL, Deno',
			issuer: 'The Complete Guide – Udemy',
			year: '2024',
		},
		{
			name: 'Python Programming for AI',
			issuer: 'Faculty of Science, Alexandria University',
			year: '2023',
		},
	];

	return (
		<section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-green-600/10 to-blue-600/10 opacity-10" />

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<div className="font-mono mb-2">
						<p className="text-green-500">$ cat education.txt</p>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
					<p className="text-gray-400">My academic journey and qualifications</p>
				</motion.div>

				<div className="space-y-6">
					{education.map((edu, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02 }}
							className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6 hover:border-green-500/40 transition-all duration-300 cursor-pointer"
						>
							<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
								<div className="flex-1">
									<div className="flex items-start gap-3 mb-3">
										<div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20 mt-1">
											<GraduationCap className="w-5 h-5 text-green-500" />
										</div>
										<div>
											<h3 className="text-xl md:text-2xl font-bold text-white mb-1">
												{edu.degree}
											</h3>
											<p className="text-lg text-green-500 font-semibold">
												{edu.institution}
											</p>
										</div>
									</div>

									<div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
										<div className="flex items-center gap-2">
											<Calendar className="w-4 h-4" />
											<span>{edu.period}</span>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="w-4 h-4" />
											<span>{edu.location}</span>
										</div>
									</div>

									<p className="text-gray-300 mb-3">{edu.description}</p>

									{edu.gpa && (
										<div className="inline-block px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 text-green-500 text-sm font-semibold">
											GPA: {edu.gpa}
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-12"
				>
					<div className="font-mono mb-2">
						<p className="text-green-500">$ courses & certifications --list</p>
					</div>

					<div className="space-y-4">
						{certifications.map((cert, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.15 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02 }}
								className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-5 hover:border-green-500/40 transition-all duration-300"
							>
								<div className="flex items-start gap-3">
									<div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20 mt-1">
										<Award className="w-5 h-5 text-green-500" />
									</div>
									<div>
										<h3 className="text-lg md:text-xl font-semibold text-white mb-1">
											{cert.name}
										</h3>
										<p className="text-gray-400 text-sm">
											{cert.issuer} • {cert.year}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}