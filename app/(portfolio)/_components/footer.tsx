"use client";
import Link from "next/link";
import React from "react";

export const Footer = () => {
	return (
		<footer id="contact" className="relative mt-32 pb-6 overflow-hidden">
			{/* Background with stars and cosmic element */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-[#050816]" />

				{/* Stars effect - small dots */}
				<div className="stars-small absolute inset-0" />
				<div className="stars-medium absolute inset-0" />

				{/* Cosmic glow effect */}
				<div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-teal-500/5 blur-[100px]" />
				<div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] rounded-full bg-teal-400/10 blur-[60px]" />
			</div>

			<div className="container mx-auto px-4 pt-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
					{/* Left column */}
					<div>
						<h3 className="text-2xl font-bold mb-4">Arya Teja .</h3>
						<p className="text-gray-400 mb-6">
							Crafting intelligent{" "}
							<span className="text-teal-400">AI solutions</span> with code,
							creativity & a passion for innovation.
						</p>
						<p className="text-gray-500">Thanks for stopping by!</p>
					</div>

					{/* Middle column - Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Quick Links</h4>
						<nav className="flex flex-col space-y-3">
							<Link
								href="/"
								className="text-gray-400 hover:text-teal-400 transition-colors"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-gray-400 hover:text-teal-400 transition-colors"
							>
								About
							</Link>
							<Link
								href="/projects"
								className="text-gray-400 hover:text-teal-400 transition-colors"
							>
								Projects
							</Link>
							<Link
								href="/blog"
								className="text-gray-400 hover:text-teal-400 transition-colors"
							>
								Blog
							</Link>
							<Link
								href="/contact"
								className="text-gray-400 hover:text-teal-400 transition-colors"
							>
								Contact
							</Link>
						</nav>
					</div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-gray-50 mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-4">
            AI Engineer & Marketing Specialist with a passion for creating intelligent solutions that deliver measurable business impact.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a href="mailto:aryateja@example.com" className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Email Me</span>
            </a>
            <a href="https://calendly.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>Schedule Call</span>
            </a>
          </div>
          
          {/* Social media icons are now directly below the buttons */}
          <div className="mt-6 flex space-x-4">
			<a href="https://github.com/aryateja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.3 1.07 2.87.82.09-.64.34-1.07.62-1.31-2.18-.2-4.47-1.09-4.47-4.83 0-1.07.38-1.95 1.02-2.63-.1-.2-.44-1.25.1-2.61 0 0 .82-.26 2.68 1.02a9.45 9.45 0 0 1 5-1.35c.67.07 1.34.11 2 .11s1.33-.04 2-.11c1.86-1.28 2.68-1.02 2.68-1.02.54 1.36.2 2.41.1 2.61.64.68 1.02 1.56 1.02 2.63 0 3.75-2.3 4.63-4.48 4.83.35.3.68.85.68 1.7v2.51c0 .26.18.57.69.47A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/aryateja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://twitter.com/aryateja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
           
          </div>
        </div>
				</div>

				{/* Bottom bar with copyright and links */}
				<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
					<p> 2025 Arya Teja Rudraraju | Portfolio. All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<Link
							href="/privacy"
							className="hover:text-teal-400 transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="hover:text-teal-400 transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>

			{/* CSS for star effect */}
			<style jsx>{`
        .stars-small {
          background-image: radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1.5px 1.5px at 200px 50px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 250px 160px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 320px 10px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1.5px 1.5px at 400px 90px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 450px 160px, #ffffff, rgba(0, 0, 0, 0)),
                           radial-gradient(1px 1px at 500px 30px, #ffffff, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 600px 400px;
          opacity: 0.2;
        }

        .stars-medium {
          background-image: radial-gradient(2px 2px at 100px 300px, #4fd1c5, rgba(0, 0, 0, 0)),
                           radial-gradient(2px 2px at 200px 200px, #4fd1c5, rgba(0, 0, 0, 0)),
                           radial-gradient(2px 2px at 300px 400px, #4fd1c5, rgba(0, 0, 0, 0)),
                           radial-gradient(2px 2px at 500px 200px, #4fd1c5, rgba(0, 0, 0, 0)),
                           radial-gradient(2px 2px at 600px 300px, #4fd1c5, rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 800px 600px;
          opacity: 0.1;
        }
      `}</style>
		</footer>
	);
};




export default Footer;
