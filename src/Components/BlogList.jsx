import { useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard.jsx';
import { listPosts } from '../lib/postRepository.js';

export default function BlogList() {
    const posts = useMemo(() => listPosts(), []);

    if (!posts.length) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-12 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
            >
                <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
                    New stories are coming soon. Stay tuned!
                </p>
            </motion.div>
        );
    }

    return (
        <div className="grid gap-8">
            {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
            ))}
        </div>
    );
}

