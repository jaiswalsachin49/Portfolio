import React from "react";
import { motion } from "framer-motion";

export default function Work() {
    return (
        <section id="works" className="text-black flex justify-center">
        <div className="flex flex-col items-center w-full pt-30">
            <motion.h1 className="text-7xl leading-none font-black text-black whitespace-nowrap">
            MY LATEST WORK
            </motion.h1>

            <motion.div className="relative group w-full p-[3vw] mt-16 rounded-lg h-[30%] overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 opacity-0 mx-[3vw] group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)]"></div>

            <div className="flex justify-between items-center px-[4vw] relative z-10">
                <h1 className="flex items-center gap-4 text-4xl font-extrabold">
                <img src="/logo.png" alt="Zooper Logo" className="w-10"/>
                Zooper
                </h1>
                <a href="https://zooper-ten.vercel.app" target="_blank" rel="noreferrer">
                <img
                    src="/arrow.svg"
                    alt="Arrow"
                    className="w-10 rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"
                />
                </a>
            </div>

            <p className="text-2xl md:text-4xl text-gray-500 leading-tight relative z-10 pt-6 px-[4vw] outfit-font">
                Zooper is a platform to stream your favourite movies and series.
                <br /> Built with React.js and Tailwind CSS for a seamless, responsive
                experience.
            </p>

            <div className="flex justify-center items-center gap-50 relative z-10 -top-20">
                <img
                src="/zooper1.jpeg"
                alt="Zooper Screenshot"
                className="w-100 rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[265deg] group-hover:rotate-270 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
                <img
                src="/zooper2.jpeg"
                alt="Zooper Screenshot"
                className="w-150 h-auto rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[5deg] group-hover:rotate-0 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
            </div>
            </motion.div>

            <motion.div className="relative group w-full p-[3vw] mt-16 rounded-lg overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 opacity-0 mx-[3vw] group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] z-0"></div>

            <div className="flex justify-between items-center px-[4vw] relative z-10">
                <h1 className="flex items-center gap-4 text-4xl font-extrabold">
                <img src="/cheflogo.png" alt="Chef Claude Logo" className="w-10" />
                Chef Claude
                </h1>
                <a href="https://claude-chef-sepia.vercel.app/" target="_blank" rel="noreferrer">
                <img
                    src="/arrow.svg"
                    alt="Arrow"
                    className="w-10 rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"
                />
                </a>
            </div>

            <p className="text-2xl md:text-4xl text-gray-500 leading-tight relative z-10 pt-6 px-[4vw] outfit-font">
                Chef Claude is a recipe app that helps you find delicious recipes.
                <br /> Built with React.js, it offers a user-friendly interface
                for cooking enthusiasts.
            </p>

            <div className="flex justify-center items-center gap-10 relative z-10 mt-8">
                <img
                src="/chef_claude1.png"
                alt="Chef Screenshot"
                className="w-170 rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[-5deg] group-hover:rotate-0 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
                <img
                src="/chef_claude2.png"
                alt="Chef Screenshot"
                className="w-170 h-auto rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[5deg] group-hover:rotate-0 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
            </div>
            </motion.div>

            <motion.div className="relative group w-full p-[3vw] mt-16 rounded-lg overflow-hidden transition-all duration-500">
            <div className="absolute inset-0 opacity-0 mx-[3vw] group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] z-0"></div>

            <div className="flex justify-between items-center px-[4vw] relative z-10">
                <h1 className="flex items-center gap-4 text-4xl font-extrabold">
                <img src="/proconnectlogo.png" alt="Pro Connect Logo" className="w-14" />
                Pro Connect
                </h1>
                <a href="https://proconnect-mu.vercel.app/" target="_blank" rel="noreferrer">
                <img
                    src="/arrow.svg"
                    alt="Arrow"
                    className="w-10 rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0"
                />
                </a>
            </div>

            <p className="text-2xl md:text-4xl text-gray-500 leading-tight relative z-10 pt-6 px-[4vw] outfit-font">
                Pro Connect is a professional networking platform that help in searching jobs.
                <br /> Built with React.js, it provides a seamless experience for
                networking and collaboration.
            </p>

            <div className="flex justify-center items-center gap-10 relative z-10 mt-8">
                <img
                src="/proconnect2.png"
                alt="Screenshot"
                className="w-170 rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[-5deg] group-hover:rotate-0 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
                <img
                src="/proconnect1.png"
                alt="Screenshot"
                className="w-170 h-auto rounded-2xl shadow-lg transform transition-transform duration-500 ease-in-out rotate-[5deg] group-hover:rotate-0 group-hover:border-8 group-hover:border-white group-hover:shadow-2xl"
                />
            </div>
            </motion.div>
        </div>
        </section>
    );
}