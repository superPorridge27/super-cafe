'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/40 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/40 rounded-full blur-[128px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-space mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
                >
                    FUEL FOR <br /> THE VOYAGE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light"
                >
                    Premium rations and zero-g espresso served at the edge of the known universe.
                </motion.p>
            </div>
        </section>
    );
};
