"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-16 bg-white backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
            <div className="mx-auto container">
                <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    {/* Left side - Logo and navigation */}
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        {/* Logo section */}
                        <div className="flex items-center space-x-2 sm:space-x-3 group">
                            <div className="relative">
                                <Image
                                    src="/axols-webai-logo-orange.svg"
                                    alt="Axols WebAI logo"
                                    width={32}
                                    height={32}
                                    className="h-6 w-6 sm:h-8 sm:w-8"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                            </div>
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight cursor-pointer" onClick={() => {
                                window.location.href = "/"
                            }}>
                                <span className="hidden sm:inline">Axols{' '}</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 font-extrabold">
                                    WebAI.js
                                </span>
                            </h1>
                        </div>

                        {/* Navigation */}
                        <nav className="flex cursor-pointer" onClick={() => {
                            window.location.href = "/"
                        }}>
                            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-rose-400 to-orange-400 rounded-full shadow-lg hover:shadow-xl hover:from-rose-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
                                DEMOS
                            </span>
                        </nav>
                    </div>

                    {/* Right side - CTA button and mobile menu */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* CTA button - always visible but responsive */}
                        <button
                            onClick={() => {
                                window.open("https://www.webai-js.com", "_blank")
                            }}
                            className="relative inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-400 to-orange-400 rounded-md sm:rounded-lg shadow-lg hover:shadow-xl hover:from-rose-500 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-rose-400/30 transition-all duration-300 hover:-translate-y-0.5 group overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center">
                                <span className="hidden xs:inline sm:hidden lg:inline">Developers</span>
                                <span className="xs:hidden sm:inline lg:hidden">Dev</span>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform duration-300 ease-in-out group-hover:animate-pulse group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}