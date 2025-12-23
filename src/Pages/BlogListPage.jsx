import { motion } from 'framer-motion';
import Navigation from '../Components/Navigation.jsx';
import BlogList from '../Components/BlogList.jsx';

export default function BlogListPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 transition-colors duration-500">
            <Navigation />
            <main className="pt-24 pb-32">
                <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-slate-200/60 bg-white/90 p-12 text-center shadow-lg backdrop-blur"
                    >
                        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                            Blog
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                            Ideas, notes and learnings
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                            A personal space to share reflections, technical tips and experiences from day to day as a developer.
                        </p>
                    </motion.section>

                    <section className="pb-8">
                        <BlogList />
                    </section>
                </div>
            </main>
        </div>
    );
}

