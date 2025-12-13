import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const education = {
    university: 'Salesian Polytechnic University',
    degree: 'Bachelor\'s Degree in Software Engineering',
    location: 'Quito',
    period: 'June 2011 — June 2016'
};

const courses = [
    {
        title: 'NodeJs Architecture DDD',
        provider: 'Cursos Dev',
        period: 'Nov 2023 — Jan 2024'
    },
    {
        title: 'Aws Serverless for developers',
        provider: 'Cursos Dev',
        period: 'Jul 2022 — Sep 2022'
    },
    {
        title: 'Microservice Architecture',
        provider: 'Digital Lab Academy',
        period: 'January 2022 — April 2022'
    },
    {
        title: 'AWS Basic',
        provider: 'CloudLab',
        period: 'June 2021 — August 2021'
    },
    {
        title: 'JUnit',
        provider: 'Udemy',
        period: 'Nov 2021'
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-50">
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
                        Education & <span className="bg-brand-gradient bg-clip-text text-transparent">Certifications</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-brand-gradient mx-auto"
                    />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                                    <GraduationCap className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Formal Education</h3>
                                    <p className="text-slate-600">Academic Foundation</p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-l-4 border-primary"
                            >
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{education.degree}</h4>
                                <p className="text-lg font-semibold text-primary mb-4">{education.university}</p>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{education.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>{education.location}</span>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="mt-8 p-6 bg-slate-50 rounded-xl">
                                <h5 className="font-bold text-slate-900 mb-3">Key Areas of Study</h5>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Software Architecture', 'Database Systems', 'Web Development', 'Data Structures', 'System Design', 'Project Management'].map((area, index) => (
                                        <motion.div
                                            key={area}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (index * 0.1) }}
                                            className="flex items-center gap-2 text-sm text-slate-700"
                                        >
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span>{area}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Courses */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">Professional Courses</h3>
                                    <p className="text-slate-600">Continuous Learning</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {courses.map((course, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (index * 0.1) }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="bg-gradient-to-r from-slate-50 to-secondary/5 rounded-xl p-4 border border-slate-100 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-secondary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-slate-900 mb-1">{course.title}</h4>
                                                <p className="text-secondary font-medium text-sm mb-2">{course.provider}</p>
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>{course.period}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Learning Philosophy */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 p-6 bg-brand-gradient-hover rounded-xl text-white"
                            >
                                <h5 className="font-bold mb-3 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Learning Philosophy
                                </h5>
                                <p className="text-sm leading-relaxed">
                                    I believe in continuous learning and staying updated with the latest technologies and best practices.
                                    My commitment to professional development drives me to regularly pursue certifications and courses
                                    that enhance my technical expertise and leadership capabilities.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}