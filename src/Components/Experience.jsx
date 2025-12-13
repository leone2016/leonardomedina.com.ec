import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: 'Technisys/Galileo',
        position: 'Software Developer',
        location: 'Quito',
        period: 'June 2021 — May 2025',
        projects: [
            {
                title: 'Migration microservice from onprem to cloud',
                description: 'Transition Banco Falabella Chile\'s services from On-premises to Azure\'s East US2 region, enhancing user experience and resolving issues tied to legacy on-premises infrastructure.',
                responsibilities: ['Worked closely with DevOps team for migration and integration of banking microservices from on-premises infrastructure to cloud, enhancing system scalability and reducing latency'],
                technologies: ['SpringBoot', 'Node.js', 'GitLab Runner', 'Docker']
            },
            {
                title: 'Tokenization for mobile payments',
                description: 'Tokenization for Credit and Debit that allows Customer\'s Banco Falabella Colombia to provision (register) from the app their credit and debit cards in the Apple Wallet to make purchases from their cell phones or watches.',
                responsibilities: [
                    'Integrated REST APIs with Digital First By Thales to provide a ready-to-use digital card through MasterCard MCI, ensuring secure transactions',
                    'Created a user interface for Banking Customer Service to manage token status in MasterCard',
                    'Developed a project integrating 5 microservices into Banking DevOps infrastructure'
                ],
                technologies: ['SpringBoot', 'Node.js', 'DDD', 'JUnit5', 'Instana', 'Kibana', 'MongoDB', 'Redis', 'Angular 12', 'Jest', 'GitLab Runner', 'Docker']
            },
            {
                title: 'Refinancing debts',
                description: 'Refinancing debts for Clients of Banco Falabella Colombia with defaulted loans that in some cases affect their credit history. This process allows end user to access a payment agreement and avoid defaulting on their debt.',
                responsibilities: [
                    'Integrated SOAP banking services to retrieve customer debt information',
                    'Developed a user interface for customers to update and pay their debts',
                    'Created services and CRON jobs to automatically send email notifications regarding debt status changes',
                    'Integrated 3 microservices into Banking DevOps infrastructure'
                ],
                technologies: ['Node.js', 'Golang', 'Jest', 'Mocha', 'Chai', 'Angular 12', 'GitLab Runner', 'Docker', 'Jenkins']
            }
        ]
    },
    {
        id: 2,
        company: 'Publipromueve PPM',
        position: 'FullStack Developer',
        location: 'Quito',
        period: 'October 2020 — May 2021',
        projects: [
            {
                title: 'GAIA eCommerce',
                description: 'E-commerce platform that allows the creation and administration of virtual stores, used by the Banco Pichincha brand as a marketing medium. Platform allows creation of business models like food, clothes, and home delivery.',
                responsibilities: [
                    'Created a home delivery module with Urbano Cargo',
                    'Maintained microservices and the eCommerce web application'
                ],
                technologies: ['Golang', 'Node.js', 'GraphQL', 'Mocha', 'Chai', 'React', 'Next.js', 'Docker', 'Kubernetes']
            },
            {
                title: 'FTP client',
                description: 'A secure mechanism for the exchange of miles consumed by a ClubMiles client, implementing internal FTP through AWS services such as S3 for temporary upload and subsequent deposit in servers and points administration.',
                responsibilities: [
                    'Developed microservices integrating into an FTP server, exposing web services',
                    'Integrated with core eCommerce markets to retrieve miles points'
                ],
                technologies: ['.Net Core 3', 'Eureka', 'Zuul', 'Ribbon', 'XUnit', 'React', 'AWS EC2', 'Docker', 'S3']
            }
        ]
    },
    {
        id: 3,
        company: 'GrupoContex',
        position: 'Full Stack Engineer',
        location: 'Quito',
        period: 'March 2020 — September 2020',
        projects: [
            {
                title: 'BanEcuador Cost and Profitability',
                description: 'Mechanism to analyze the cost and profitability of BanEcuador bank depending on its different financial assets and liabilities.',
                responsibilities: [
                    'Led a development team to re-implement a legacy project with 3 team members',
                    'Created a backlog of new functionalities',
                    'Integrated with ETL processes and handled big data for reporting',
                    'Developed user interfaces for parameterization and data input'
                ],
                technologies: ['Java EE', 'SpringBoot', 'Keycloak', 'Wildfly Server', 'React', 'Talend Open Studio']
            }
        ]
    },
    {
        id: 4,
        company: 'Bayteq',
        position: 'FullStack Developer',
        location: 'Quito',
        period: 'December 2018 — November 2019',
        projects: [
            {
                title: 'Praxmed - Medical Appointment',
                description: 'Medical appointment scheduling system with cross-platform capabilities.',
                responsibilities: [
                    'Prototyped and developed a cross-platform solution using responsive web design',
                    'Collaborated on REST API development and integration with Ecuadorian health insurers',
                    'Managed CI/CD using GitLab Runners'
                ],
                technologies: ['Java', 'Spring Boot', 'WildFly', 'Angular 8', 'Sass', 'PhoneGap']
            }
        ]
    },
    {
        id: 5,
        company: 'Galapagos Travel Center',
        position: 'Software Developer',
        location: 'Quito',
        period: 'August 2014 — November 2018',
        projects: [
            {
                title: 'Galavil - Core Cruiser Ship Business',
                description: 'Development and implementation of business Core for the administration of 9 internal cruises and the possibility of 70 cruises in the Galapagos Islands.',
                responsibilities: [
                    'Developed an algorithm for scheduling cruise yachts based on business logic',
                    'Developed CRON jobs and invoice generation systems',
                    'Designed and developed web applications and a CRM application'
                ],
                technologies: ['JavaEE', 'PHP5', 'Python', 'Primefaces', 'Payara', 'MySQL', 'PostgreSQL', 'MongoDB', 'Angular']
            }
        ]
    }
];

const freelanceProject = {
    company: 'VistusProject',
    position: 'Backend Developer',
    location: 'Quito',
    period: 'Freelance',
    projects: [
        {
            title: 'Utransfer - Banco Amazonas',
            description: 'uTransfer offers instant transactions, making sending and receiving money seamless and quick. With advanced security measures like data encryption and two-factor authentication, transactions are protected.',
            responsibilities: [
                'Architected and developed a comprehensive solution consisting of 14 microservices for processing online payments, enabling seamless international money transfers to and from Ecuador',
                'Implemented a serverless architecture using AWS services including Lambda, API Gateway, SQS, SNS, and DynamoDB, ensuring scalability, high availability, and cost-efficiency',
                'Developed microservices to handle various aspects of payment processing and transfers, ensuring secure and efficient transactions',
                'Optimized data flow and communication between services using AWS SQS and SNS, enhancing system reliability and performance',
                'Managed the end-to-end development lifecycle, from requirements gathering to deployment, ensuring timely delivery and adherence to best practices'
            ],
            technologies: ['TypeScript', 'AWS', 'Serverless']
        }
    ]
};

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white">
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
                        Professional <span className="bg-brand-gradient bg-clip-text text-transparent">Experience</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-brand-gradient mx-auto"
                    />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-brand-gradient"></div>

                    {/* Experience items */}
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10"></div>

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-gradient-to-br from-slate-50 to-primary/5 rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.company}</h3>
                                            <p className="text-lg font-semibold text-primary mb-2">{exp.position}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {exp.projects.map((project, projectIndex) => (
                                            <motion.div
                                                key={projectIndex}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (index * 0.2) + (projectIndex * 0.1) }}
                                                className="border-l-4 border-primary pl-4"
                                            >
                                                <h4 className="font-bold text-slate-900 mb-2">{project.title}</h4>
                                                <p className="text-slate-700 mb-3 text-sm leading-relaxed">{project.description}</p>

                                                <div className="mb-4">
                                                    <h5 className="font-semibold text-slate-800 mb-2">Key Responsibilities:</h5>
                                                    <ul className="space-y-1">
                                                        {project.responsibilities.map((responsibility, respIndex) => (
                                                            <li key={respIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                                <ChevronRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                                                                <span>{responsibility}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Freelance Work */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative flex items-center"
                    >
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full z-10"></div>

                        <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12">
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-gradient-to-br from-secondary/5 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">FREELANCE</span>
                                </div>

                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1">{freelanceProject.company}</h3>
                                        <p className="text-lg font-semibold text-secondary mb-2">{freelanceProject.position}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{freelanceProject.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{freelanceProject.location}</span>
                                    </div>
                                </div>

                                {freelanceProject.projects.map((project, projectIndex) => (
                                    <div key={projectIndex} className="border-l-4 border-secondary pl-4">
                                        <h4 className="font-bold text-slate-900 mb-2">{project.title}</h4>
                                        <p className="text-slate-700 mb-3 text-sm leading-relaxed">{project.description}</p>

                                        <div className="mb-4">
                                            <h5 className="font-semibold text-slate-800 mb-2">Key Responsibilities:</h5>
                                            <ul className="space-y-1">
                                                {project.responsibilities.map((responsibility, respIndex) => (
                                                    <li key={respIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <ChevronRight className="w-3 h-3 mt-0.5 text-secondary flex-shrink-0" />
                                                        <span>{responsibility}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}