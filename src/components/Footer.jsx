import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isTHover, setIsTHover] = useState(false);
    const [isGHover, setIsGHover] = useState(false);
    const [isLHover, setIsLHover] = useState(false);
    const [isSHover, setIsSHover] = useState(false);

    return (
        <div className="flex justify-between items-center w-full px-[3vw] pb-8">

        <a
            href="mailto:sj586997@gmail.com"
            className="flex items-center gap-1 text-3xl font-semibold "
        >
            <img src="/message.png" alt="message icon" className="w-14 rotate-[10deg]" />
            Sachin Jaiswal
        </a>

        <div className="flex gap-6">
        <motion.div
            onHoverStart={() => setIsTHover(true)}
            onHoverEnd={() => setIsTHover(false)}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 250 }}
        >
            <a
            href="https://x.com/weirdo_49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
            >
            <motion.img
                src="/twitter.png"
                alt="Twitter"
                className="w-12 transition-transform"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: isTHover ? -25 : 0 }}
                duration={0.3}
            />
            <motion.span
                className="text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isTHover ? 1 : 0, y: isTHover ? 0 : 5 }}
                transition={{ duration: 0.25 }}
            >
                Twitter
            </motion.span>
            </a>
        </motion.div>
        <motion.div
            onHoverStart={() => setIsGHover(true)}
            onHoverEnd={() => setIsGHover(false)}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 250 }}
        >
            <a
            href="https://github.com/jaiswalsachin49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
            >
            <motion.img
                src="/github.png"
                alt="Github"
                className="w-13 transition-transform"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: isGHover ? 25 : 0 }}
                duration={0.3}
            />
            <motion.span
                className="text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isGHover ? 1 : 0, y: isGHover ? 0 : 5 }}
                transition={{ duration: 0.25 }}
            >
                Github
            </motion.span>
            </a>
        </motion.div>
        <motion.div
            onHoverStart={() => setIsLHover(true)}
            onHoverEnd={() => setIsLHover(false)}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 250 }}
        >
            <a
            href="https://www.linkedin.com/in/sachin-jaiswal-005a38323/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
            >
            <motion.img
                src="/linkedin.png"
                alt="Linkedin"
                className="w-12 transition-transform"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: isLHover ? 25 : -10 }}
                duration={0.3}
            />
            <motion.span
                className="text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isLHover ? 1 : 0, y: isLHover ? 0 : 5 }}
                transition={{ duration: 0.25 }}
            >
                Linkedin
            </motion.span>
            </a>
        </motion.div>
        <motion.div
            onHoverStart={() => setIsSHover(true)}
            onHoverEnd={() => setIsSHover(false)}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 250 }}
        >
            <a
            href="https://open.spotify.com/user/eomd52qew0m5bi4r91ijdthg9?si=d2a050dcf3924205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
            >
            <motion.img
                src="/spotify.png"
                alt="Spotify"
                className="w-12 transition-transform"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: isSHover ? 25 : -5 }}
                duration={0.3}
            />
            <motion.span
                className="text-sm font-medium mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: isSHover ? 1 : 0, y: isSHover ? 0 : 5 }}
                transition={{ duration: 0.25 }}
            >
                Spotify
            </motion.span>
            </a>
        </motion.div>
        </div>
        </div>
    );
};

export default Footer;
