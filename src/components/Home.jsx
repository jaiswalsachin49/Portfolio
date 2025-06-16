import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <section id="home" className="relative overflow-hidden">
            <img
                src="/Krishna_Black.png"  
                alt="Krishna Background"
                className="absolute w-full top-0 h-full lg:h-auto xl:h-auto 2xl:h-auto object-cover opacity-100 z-10"
            />

            <div className="flex flex-col justify-end items-start w-[100vw] h-screen bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] px-[3vw] relative z-0">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-2xl md:text-4xl text-gray-700 leading-tight mb-6 outfit-font"
                >
                    From cricket fields to code editors — my journey into tech wasn’t planned, but it was inevitable.
                    <br />
                    Now a frontend developer and problem solver.
                </motion.h1>

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                    className="text-[11vw] leading-none font-black text-black whitespace-nowrap mt-3"
                >
                    SACHIN JAISWAL
                </motion.h1>

                <motion.img
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                    src="/back.png"
                    alt="background"
                    className="w-[60%] pb-[5vw] pt-[3vw]"
                />
            </div>
        </section>
    );
}
