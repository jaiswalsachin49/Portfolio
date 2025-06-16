import React from "react";
import { motion } from "framer-motion";

export default function Story() {
    return (
        <section id="story" className="text-black p-[3vw]">
        <div className="w-full bg-[radial-gradient(circle,rgba(33,160,243,1)_35%,rgba(255,255,255,1)_96%)] px-9 py-20 rounded-lg">
            <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-7xl font-black text-black xl:mb-15 2xl:mb-15 md:leading-15 xl:leading-20 2xl:leading-20">
            Not a Legacy Coder, Just a Curious Kid Who Never Stopped Clicking
            </h1>

            <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="text-xl md:text-2xl xl:text-2xl 2xl:text-2xl text-gray-500 leading-10 w-[100%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] mb-10 mt-10 md:mt-20 xl:mt-20 2xl:mt-20 outfit-font"
            >
            Growing up far from the world of code, I never imagined technology
            would one day become my canvas. From school days filled with cricket
            matches, to a college journey where lines of HTML and CSS gave me goosebumps — my fascination with how
            things work behind the screen only grew stronger.<br /> <br /> Without a tech
            background in my family, every new framework, every working project
            felt like discovering a new superpower. And the best part? Sharing
            these small wins with my true friends and family, who cheered for every
            line of code that finally worked. This is just the start of my story.
            </motion.p>
        </div>
        </section>
    );
}
