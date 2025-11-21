"use client"
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';
import Image from 'next/image';

// Mock constants
const DEMOS = [
	{
		id: 'ai-chat',
		title: 'AI Chat Assistant',
		description: 'Experience real-time AI conversations powered by our advanced WebAI models. Chat naturally and see how our AI understands context and provides intelligent responses.',
		demoUrl: '/demos/chat',
		gradient: 'from-rose-400 to-orange-400',
		icon: Brain,
		tag: 'Interactive',
		imageUrl: null
	}
];

const DEMO_FEATURES = {
	'ai-chat': [
		{ text: 'Real-time processing', color: 'bg-green-500' },
		{ text: 'Context awareness', color: 'bg-blue-500' },
		{ text: 'Natural conversations', color: 'bg-purple-500' },
		{ text: 'Privacy-first design', color: 'bg-rose-500' }
	]
};

const WebAIDemosPage = () => {
	const demo = DEMOS[0];
	const features = DEMO_FEATURES[demo.id] || [];
	const IconComponent = demo.icon;

	const scrollToDemos = useCallback(() => {
		document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const handleDemoClick = useCallback(() => {
		window.location.href = demo.demoUrl;
	}, [demo.demoUrl]);

	const openWebAI = useCallback(() => {
		window.open('https://www.webai-js.com', '_blank');
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-rose-50">
				{/* Floating Background */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						className="absolute w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-30"
						style={{ top: '20%', left: '10%' }}
						animate={{
							x: [0, 30, -20, 0],
							y: [0, -25, 15, 0],
							scale: [1, 1.1, 0.9, 1]
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
					<motion.div
						className="absolute w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30"
						style={{ bottom: '10%', right: '10%' }}
						animate={{
							x: [0, -40, 25, 0],
							y: [0, 20, -30, 0],
							scale: [1, 0.9, 1.1, 1]
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2
						}}
					/>
					<motion.div
						className="absolute w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-40"
						style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
						animate={{
							x: [0, 15, -10, 0],
							y: [0, -20, 10, 0],
							scale: [1, 1.05, 0.95, 1]
						}}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 5
						}}
					/>
				</div>

				<motion.div
					className="relative z-10 text-center max-w-6xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
				>
					{/* Logo Badge */}
					<motion.div
						className="mb-8"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100">
							<Image
								src="/axols-webai-logo-orange.svg"
								alt="logo"
								width={20}
								height={20}
								className="h-4 sm:h-5 mr-2"
							/>
							<span className="text-gray-800 font-semibold">Axols WebAI.js Demos</span>
						</div>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gray-900 leading-tight"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						The Future of AI Runs
						<br />
						<span className="bg-linear-to-r from-rose-400 via-orange-400 to-rose-500 bg-clip-text text-transparent">
							in Your Browser
						</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed "
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						This interactive demo website showcases the latest features and performance of our WebAI models from{' '}
						<a
							href='https://www.webai-js.com'
							className='text-rose-500 hover:underline font-semibold'
							target='_blank'
							rel="noopener noreferrer"
						>
							Axols WebAI.js
						</a>.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}
					>
						<motion.button
							onClick={scrollToDemos}
							className="group px-8 py-4 bg-linear-to-r from-rose-400 to-orange-400 rounded-full font-semibold text-white shadow-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore Demos
							<ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</motion.button>

						<motion.button
							className="px-8 py-4 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 bg-white"
							onClick={openWebAI}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Go to Axols WebAI.js
						</motion.button>
					</motion.div>
				</motion.div>
			</section>

			{/* Demo Section */}
			<section
				id="demos"
				className="relative py-20 px-4 bg-white"
			>
				<div className="max-w-4xl mx-auto">
					{/* Section Header */}
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
							Our WebAI{' '}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
								Demonstrations
							</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Our demos are designed to help you explore our latest features and models—completely free and without writing a single line of code.
						</p>
					</motion.div>

					{/* Demo Card */}
					<div className="flex justify-center">
						<motion.div
							className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl cursor-pointer max-w-2xl w-full"
							onClick={handleDemoClick}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							whileHover={{
								scale: 1.02,
								boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
							}}
							whileTap={{ scale: 0.98 }}
						>
							{/* Demo Preview */}
							<div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
								<div className="absolute inset-0 flex items-center justify-center">
									<motion.div
										className="text-center px-4"
										initial={{ scale: 0.8, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.4 }}
									>
										<motion.div
											className={`mx-auto mb-4 p-4 bg-gradient-to-r ${demo.gradient} rounded-xl w-fit shadow-lg`}
											whileHover={{ y: -5 }}
											transition={{ duration: 0.3 }}
										>
											<IconComponent className="w-12 h-12 text-white" />
										</motion.div>
										<p className="text-gray-600 text-lg font-medium">Interactive Demo Preview</p>
										<p className="text-gray-500 text-sm mt-2">Click to experience {demo.title.toLowerCase()}</p>
									</motion.div>
								</div>

								{/* Hover overlay */}
								<motion.div
									className="absolute inset-0 bg-gradient-to-t from-rose-400/10 to-transparent opacity-0 group-hover:opacity-100"
									transition={{ duration: 0.3 }}
								/>
							</div>

							{/* Content */}
							<motion.div
								className="p-8"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.5 }}
							>
								{/* Title with Icon */}
								<div className="flex items-center mb-6">
									<motion.div
										className={`mr-4 p-3 bg-gradient-to-r ${demo.gradient} rounded-lg shadow-md`}
										whileHover={{ scale: 1.1 }}
										transition={{ duration: 0.3 }}
									>
										<IconComponent className="w-6 h-6 text-white" />
									</motion.div>
									<h3 className="text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-orange-400 transition-all duration-300">
										{demo.title}
									</h3>
								</div>

								<p className="text-gray-600 mb-8 leading-relaxed text-lg">
									{demo.description}
								</p>

								{/* Features */}
								<motion.div
									className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.6 }}
								>
									{features.map((feature, index) => (
										<motion.div
											key={index}
											className="flex items-center text-gray-700"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
											whileHover={{ x: 5 }}
										>
											<div className={`w-2 h-2 ${feature.color} rounded-full mr-3 flex-shrink-0`} />
											<span>{feature.text}</span>
										</motion.div>
									))}
								</motion.div>

								{/* Action Row */}
								<motion.div
									className="flex items-center justify-between"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.8 }}
								>
									<motion.div
										className="flex items-center text-rose-400 font-semibold text-lg group-hover:text-orange-400 transition-colors duration-300"
										whileHover={{ x: 5 }}
									>
										<span>Check Demo</span>
										<ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
									</motion.div>

									<motion.div
										className="px-4 py-2 bg-gradient-to-r from-rose-50 to-orange-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
										whileHover={{ scale: 1.05 }}
									>
										{demo.tag || "Interactive"}
									</motion.div>
								</motion.div>
							</motion.div>

							{/* Card hover effect */}
							<motion.div
								className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 pointer-events-none"
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-rose-50 overflow-hidden">
				{/* Background elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						className="absolute w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-30"
						style={{ top: "20%", left: "-10%" }}
						animate={{
							x: [0, 50, -30, 0],
							y: [0, -40, 20, 0]
						}}
						transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.div
						className="absolute w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30"
						style={{ bottom: "10%", right: "-10%" }}
						animate={{
							x: [0, -40, 30, 0],
							y: [0, 30, -20, 0]
						}}
						transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
					/>
				</div>

				<motion.div
					className="max-w-4xl mx-auto text-center relative z-10"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
						Ready to Build with{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400'>
							WebAI?
						</span>
					</h2>

					<p className="text-lg md:text-xl text-gray-600 mb-8">
						Join the growing community of developers using WebAI to create faster, more private AI applications at a fraction of the cost.
					</p>

					<motion.button
						className="px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full font-semibold text-white shadow-lg"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 20px 40px -12px rgba(244, 63, 94, 0.3)"
						}}
						whileTap={{ scale: 0.95 }}
						onClick={openWebAI}
					>
						Get Started
						<ArrowRight className="inline ml-2 w-4 h-4" />
					</motion.button>
				</motion.div>
			</section>
		</div>
	);
};

export default WebAIDemosPage;