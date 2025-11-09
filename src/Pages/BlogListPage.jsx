import { motion } from 'framer-motion';
import Navigation from '../Components/Navigation.jsx';
import BlogList from '../Components/BlogList.jsx';

export default function BlogListPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 transition-colors duration-500 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
            <Navigation />
            <main className="pt-24 pb-32">
                <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-slate-200/60 bg-white/90 p-12 text-center shadow-lg backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70"
                    >
                        <p className="text-sm uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                            Blog
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                            Ideas, notas y aprendizajes
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                            Un espacio personal para compartir reflexiones, consejos técnicos y experiencias del día a día como desarrollador.
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

