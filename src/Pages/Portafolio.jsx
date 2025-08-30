import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Mail, Phone, MapPin, Linkedin, Github,
    ChevronDown, ExternalLink, Calendar,
    Code, Database, Cloud, Server
} from 'lucide-react';
import Navigation from '../Components/Navigation.jsx';
import Hero from "../Components/Hero.jsx";
import About from "../Components/About.jsx";
import Skills from "../Components/Skills.jsx";
import Experience from "../Components/Experience.jsx";
import Education from "../Components/Education.jsx";
import Contact from "../Components/Contact.jsx";

export default function Portafolio(){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
                style={{ scaleX }}
            />


            <Navigation />

            <main className="relative">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </main>
        </div>
    )
}