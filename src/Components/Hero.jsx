import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from 'lucide-react';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-40 h-40 mx-auto relative"
                    >
                        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                            LM
                        </div>
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Name and Title */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold tracking-tight"
                        >
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Leonardo
              </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Medina
              </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-2xl text-slate-600 font-light"
                        >
                            Fullstack Software Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed"
                        >
                            Passionate systems engineer with 8+ years of experience building cutting-edge digital products
                            for Banking, Healthcare, eCommerce, and Tourism industries.
                        </motion.p>
                    </div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-center gap-6 text-slate-600"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-500" />
                            <span>Iowa, Fairfield</span>
                        </div>
                        <a href="tel:+16418191456" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Phone className="w-5 h-5 text-blue-500" />
                            <span>+1 (641) 819-1456</span>
                        </a>
                        <a href="mailto:leoz.31@hotmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <span>leoz.31@hotmail.com</span>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex justify-center gap-4"
                    >
                        <motion.a
                            href="https://www.linkedin.com/in/leone2018/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/leone2016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-colors"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.button>
            </div>
        </section>
    );
}