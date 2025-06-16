import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        {
        name: "Tailwind CSS",
        icon: "/tailwind.png",
        desc: "Utility-first CSS framework for rapid UI development.",
        },
        {
        name: "JavaScript",
        icon: "/javascript.png",
        desc: "Language for dynamic and interactive web apps.",
        },
        {
        name: "React.js",
        icon: "/react.png",
        desc: "Library for building modern, component-based UIs.",
        },
        {
        name: "Next.js",
        icon: "/nextjs.png",
        desc: "React framework for full-stack and SSR applications.",
        },
        {
        name: "Python",
        icon: "/python.png",
        desc: "Versatile language for web, AI, and automation.",
        },
        {
        name: "Git",
        icon: "/git.png",
        desc: "Version control system for tracking code changes.",
        },
    ]

    const container = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
        },
    };

    const item = {
        hidden: { opacity: 0},
        transition: { duration: 0.5, ease: "easeInOut" },
        visible: { opacity: 1},
    }

    return (
        <section id="skills" className="text-black">
        <div className="flex flex-col min-h-screen items-center w-full bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] px-6 pt-32 pb-20">
            <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-7xl  leading-none font-black text-black whitespace-nowrap mb-15">
            SKILLS
            </h1>

            <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl border border-gray-400 rounded-xl p-8 shadow-lg transition-all duration-500"
            >
            {skills.map((skill, index) => (
                <motion.div
                key={index}
                variants={item}
                className="group relative flex flex-col items-center justify-start p-8 bg-white border hover:border-2  rounded-xl shadow-md transition-all duration-500 hover:scale-105 hover:border-gray-400 outfit-font"
                >
                <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-blue-50 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-3"
                    />
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-all duration-300">
                    {skill.name}
                </h2>

                <p className="text-base text-gray-500 text-center opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500">
                    {skill.desc}
                </p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    )
}
