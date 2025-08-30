import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Server, Globe, GitBranch } from 'lucide-react';

const skillCategories = [
    {
        title: 'Languages',
        icon: Code,
        color: 'from-blue-500 to-blue-600',
        skills: ['Java', 'JavaScript', 'TypeScript', 'Go', 'Python']
    },
    {
        title: 'AWS Services',
        icon: Cloud,
        color: 'from-orange-500 to-orange-600',
        skills: ['Lambda', 'DynamoDB', 'S3', 'SQS', 'SNS', 'SES', 'API Gateway']
    },
    {
        title: 'Servers & DevOps',
        icon: Server,
        color: 'from-purple-500 to-purple-600',
        skills: ['WildFly', 'Payara', 'Tomcat', 'Docker', 'Kubernetes']
    },
    {
        title: 'Web Services',
        icon: Globe,
        color: 'from-green-500 to-green-600',
        skills: ['REST', 'SOAP', 'GraphQL']
    },
    {
        title: 'Frameworks',
        icon: GitBranch,
        color: 'from-red-500 to-red-600',
        skills: ['Spring Boot', 'NestJS', 'Angular', 'React', 'Next.js']
    },
    {
        title: 'Databases',
        icon: Database,
        color: 'from-indigo-500 to-indigo-600',
        skills: ['MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'Redis']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-50">
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
                        Technology <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
                >
                    <h3 className="text-2xl font-bold mb-4">Additional Expertise</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Microservices Architecture', 'Domain Driven Design', 'CI/CD', 'Testing (JUnit, Jest)', 'Agile Methodologies', 'Leadership', 'Team Management'].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 + (index * 0.1) }}
                                className="px-4 py-2 bg-white/20 rounded-lg font-medium hover:bg-white/30 transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}