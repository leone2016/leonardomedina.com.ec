import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlogCard({ post, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-primary ">
                    {post.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-600">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm uppercase tracking-wide text-slate-400">Article</span>
                    <Link
                        to={`/blogs/${post.slug}`}
                        className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-slate-700"
                    >
                        Read more
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            </div>
        </motion.article>
    );
}

