import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, User, MessageSquare } from 'lucide-react';

const contactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (641) 819-1456',
        href: 'tel:+16418191456',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'lmedinaencalada@gmail.com',
        href: 'mailto:lmedinaencalada@gmail.com',
        color: 'from-primary to-primary/80'
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Iowa, Fairfield',
        href: null,
        color: 'from-red-500 to-red-600'
    }
];

const socialLinks = [
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/leone2018/',
        color: 'bg-primary hover:bg-primary/90'
    },
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/leone2016',
        color: 'bg-slate-800 hover:bg-slate-900'
    }
];

const references = [
    // {
    //     name: 'Juan Pablo Paredes',
    //     company: 'Technisys',
    //     phone: '+593 992007443'
    // },
    // {
    //     name: 'Lorena Guartazaca',
    //     company: 'OpcionAuto',
    //     phone: '+593 994607544'
    // },
    // {
    //     name: 'Danilo Vasquez',
    //     company: 'Bayteq',
    //     phone: '+593 987965215'
    // }
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Let's <span className="bg-brand-gradient bg-clip-text text-transparent">Connect</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-brand-gradient mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Ready to collaborate on your next project? I'm always interested in discussing new opportunities
                        and innovative solutions. Let's build something amazing together.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-gradient-to-br from-slate-50 to-primary/5 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {contactInfo.map((contact, index) => (
                                    <motion.div
                                        key={contact.label}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                                    >
                                        {contact.href ? (
                                            <a href={contact.href} className="block">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                                                        <contact.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-900">{contact.label}</p>
                                                        <p className="text-slate-600 hover:text-primary transition-colors">{contact.value}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                                                    <contact.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-900">{contact.label}</p>
                                                    <p className="text-slate-600">{contact.value}</p>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 + (index * 0.1) }}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                                        >
                                            <social.icon className="w-7 h-7" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* References */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">References</h3>
                            </div>

                            <div className="space-y-4">
                                {references.map((reference, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <MessageSquare className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-slate-900">{reference.name}</h4>
                                                <p className="text-purple-600 text-sm font-medium">{reference.company}</p>
                                                <a
                                                    href={`tel:${reference.phone}`}
                                                    className="text-xs text-slate-600 hover:text-primary transition-colors"
                                                >
                                                    {reference.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 p-4 bg-brand-gradient rounded-xl text-white text-center"
                            >
                                <p className="text-sm">
                                    References available upon request
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-brand-gradient rounded-2xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Ready to Start a Project?</h3>
                        <p className="text-lg mb-8 opacity-90">
                            I'm currently available for new opportunities and excited to discuss how we can work together.
                        </p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.a
                                href="mailto:lmedinaencalada@gmail.com"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Send Email
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/leone2018/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                Connect on LinkedIn
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}