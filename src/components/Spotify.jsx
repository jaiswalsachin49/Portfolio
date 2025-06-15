import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpotifyEmbed = () => {
    const SongData = [
        { id: 1, link: "https://open.spotify.com/embed/track/03hJuEQpEQERrHpjcXKWzJ?utm_source=generator&theme=0" },
        { id: 2, link: "https://open.spotify.com/embed/track/1rt1EC2ChGEVUOeMOagwWo?utm_source=generator&theme=0" },
        { id: 3, link: "https://open.spotify.com/embed/track/2GvjcWWfzbfFmAPbXmPn3O?utm_source=generator&theme=0" },
        { id: 4, link: "https://open.spotify.com/embed/track/2xJljikiXXEymW80bqyG6u?utm_source=generator&theme=0" },
        { id: 5, link: "https://open.spotify.com/embed/track/6pe0FG3XseFHT3SaaMw5M5?utm_source=generator&theme=0" },
        { id: 6, link: "https://open.spotify.com/embed/track/71j40GUuIgwpEGmoupat2O?utm_source=generator&theme=0" },
        { id: 7, link: "https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator&theme=0" },
        { id: 8, link: "https://open.spotify.com/embed/track/1OEmd2iXU8pWG7CrKNpGUg?utm_source=generator&theme=0" },
        { id: 9, link: "https://open.spotify.com/embed/track/2KNCIEhuUkOU8cAx7byG6C?utm_source=generator&theme=0" },
        { id: 10, link: "https://open.spotify.com/embed/track/1HCdZjUS2HaXCf7SJpOROy?utm_source=generator&theme=0" },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex(prev => (prev === SongData.length - 1 ? 0 : prev + 1));
        }, 40000);
        return () => clearInterval(interval);
    }, []);

    const Song = SongData[currentIndex];

    return (
        <motion.div
        className="mb-8 rounded-2xl overflow-hidden shadow-lg cursor-pointer h-[152px] mx-[3vw] bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ boxShadow: '0px 10px 30px rgba(33, 160, 243, 0.3)' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        >
        <AnimatePresence mode="wait">
            <motion.iframe
            key={Song.id}
            className="w-full h-full border-0"
            src={Song.link}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Song"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            ></motion.iframe>
        </AnimatePresence>
        </motion.div>
    );
};

export default SpotifyEmbed;
