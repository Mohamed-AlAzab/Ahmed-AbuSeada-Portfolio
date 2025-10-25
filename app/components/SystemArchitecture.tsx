'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'ListifyMe',
							description: 'Task Management App Backend',
							details: [
								'Building modular RESTful APIs with Node.js, Express.js, and MongoDB (Mongoose)',
								'Developing JWT authentication, task & subtask management, rewards, and notification features',
								'Designing scalable architecture with feature-based modules and planning AI-powered deadline reminders.'
							],
							tech: ['JWT authentication', 'Node.js', 'Express.js', 'MongoDB'],
						},
						{
							title: 'Sarhony',
							description: 'Sarahah App Backend',
							details: [
								'Built RESTful APIs using Node.js and Express.js with a NestJS-inspired modular structure.',
								'Implemented JWT authentication, user management, and a secure messaging system.',
								'Documented and tested endpoints with Postman and Swagger for maintainability.'
							],
							tech: ['RESTful APIs', 'JWT authentication', 'NestJS', 'Postman'],
						},
						{
							title: 'eShop',
							description: 'E-commerce Backend',
							details: [
								'Developed scalable APIs with Node.js and Express.js for e-commerce operations',
								'Implemented JWT authentication, order management, validation, and business logic.',
								'Documented and tested APIs with Postman to ensure reliability.'
							],
							tech: ['JWT authentication', 'Node.js', 'Express.js', 'MongoDB'],
						},
						{
							title: 'Web Learn',
							description: 'Educational Front-End Platform',
							details: [
								'Created a UI using HTML, CSS, and JavaScript.',
								'Try to make it accessibility and user-friendly design.',
							],
							tech: ['HTML', 'CSS', 'JavaScript'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
