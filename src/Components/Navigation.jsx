import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';


const navItems = [
    { id: 'hero', label: 'Home', type: 'section' },
    { id: 'about', label: 'About', type: 'section' },
    { id: 'skills', label: 'Skills', type: 'section' },
    { id: 'experience', label: 'Experience', type: 'section' },
    { id: 'education', label: 'Education', type: 'section' },
    { id: 'contact', label: 'Contact', type: 'section' },
    { id: 'blog', label: 'Blog', type: 'route', to: '/blogs' }
];

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isHome = location.pathname === '/';

    const sectionItems = useMemo(
        () => navItems.filter((item) => item.type === 'section'),
        []
    );

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        if (!isHome) {
            setIsScrolled(true);
            setActiveSection('blog');
            return;
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = sectionItems.map(item => ({
                id: item.id,
                element: document.getElementById(item.id)
            }));

            const currentSection = sections.find(section => {
                if (!section.element) return false;
                const rect = section.element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom > 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            } else {
                setActiveSection('hero');
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome, sectionItems]);

    const handleNavigation = useCallback((item) => {
        if (item.type === 'route') {
            if (!location.pathname.startsWith(item.to)) {
                navigate(item.to);
            }
            setIsMenuOpen(false);
            return;
        }

        if (isHome) {
            scrollToSection(item.id);
        } else {
            navigate('/', { state: { scrollTo: item.id } });
            setIsMenuOpen(false);
        }
    }, [isHome, location.pathname, navigate, scrollToSection]);

    const isItemActive = useCallback((item) => {
        if (item.type === 'route') {
            return location.pathname.startsWith(item.to);
        }
        return isHome && activeSection === item.id;
    }, [activeSection, isHome, location.pathname]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm'
                    : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.button
                        type="button"
                        className="font-bold text-xl bg-brand-gradient bg-clip-text text-transparent cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => {
                            if (isHome) {
                                scrollToSection('hero');
                            } else {
                                navigate('/', { state: { scrollTo: 'hero' } });
                            }
                        }}
                    >
                        Leonardo Medina
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => {
                                const active = isItemActive(item);
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavigation(item)}
                                        className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${active
                                                ? 'text-primary'
                                                : 'text-slate-700 hover:text-primary'
                                            }`}
                                    >
                                        {item.label}
                                        {active && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient"
                                                layoutId="activeTab"
                                                initial={false}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        height: isMenuOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2 border border-slate-200/50">
                        {navItems.map((item) => {
                            const active = isItemActive(item);
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item)}
                                    className={`block px-3 py-2 text-base font-medium w-full text-left rounded-lg transition-colors ${active
                                            ? 'text-primary bg-primary/10'
                                            : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}