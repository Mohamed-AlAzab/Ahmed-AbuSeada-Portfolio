'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<div className="flex flex-col-reverse md:flex-row gap-6 items-start md:justify-between">
							<div className="flex-1">
								<p className="text-green-500">$ whoami</p>
								<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-2">Ahmed Abu Seada</h1>
								<p className="text-gray-400 mb-4">Junior Backend Engineer</p>
								<p className="text-green-500">$ skills</p>
								<div className="flex flex-wrap gap-2 mt-2">
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">Node.js</span>
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">JavaScript</span>
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">TypeScript</span>
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">AWS</span>
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">Mongoose</span>
									<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">Swagger</span>
								</div>
							</div>
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								className="relative cursor-pointer"
							>
								<div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-green-500/30 shadow-lg shadow-green-500/20 hover:border-green-500/60 hover:shadow-green-500/40 transition-all duration-300">
									<Image
										src="/profile.png"
										alt="Ahmed Abu Seada"
										width={192}
										height={192}
										className="object-cover transition-transform duration-300 hover:scale-110"
										priority
									/>
								</div>
								<div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black/50 animate-pulse" />
							</motion.div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}