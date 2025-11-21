import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white border-t border-gray-200 mt-auto">
            <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/axols-webai-logo-orange.svg"
                                alt="Axols WebAI logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="text-xl font-bold text-gray-900">
                                Axols <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">WebAI.js</span>
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm max-w-md">
                            Empowering developers with next-generation AI tools for the web.
                            Build smarter, faster, and more intuitive applications with WebAI.js.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Features</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Documentation</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Examples</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Pricing</a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Axols WebAI. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
