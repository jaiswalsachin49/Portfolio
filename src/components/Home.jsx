import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <section id="home">
        <div className="flex flex-col justify-end items-start w-full h-screen bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] px-[3vw]">
            
            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" ,delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-700 leading-tight mb-6"
            >
            Hi! I'm your dedicated frontend developer and problem solver,<br />
            crafting seamless web experiences and efficient algorithms for <br />
            SaaS and Web3 projects.
            </motion.h1>

            <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="text-[11vw] leading-none font-black text-black whitespace-nowrap mt-3"
            >
            SACHIN JAISWAL
            </motion.h1>
            <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            src="/back.png" alt="background" className="w-[60%] pb-[5vw] pt-[3vw]"/>
        </div>
        </section>
    );
}
