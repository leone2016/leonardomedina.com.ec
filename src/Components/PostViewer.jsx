import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const markdownComponents = {
    h1: (props) => (
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900" {...props} />
    ),
    h2: (props) => (
        <h2 className="mt-12 text-3xl font-semibold tracking-tight text-slate-900" {...props} />
    ),
    h3: (props) => (
        <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-900" {...props} />
    ),
    p: (props) => (
        <p className="my-6 leading-relaxed text-slate-700" {...props} />
    ),
    a: (props) => (
        <a
            className="font-semibold text-blue-600 underline decoration-2 underline-offset-4 transition-colors hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
            {...props}
        />
    ),
    ul: (props) => (
        <ul className="my-6 list-disc space-y-3 pl-6 text-slate-700 marker:text-slate-400" {...props} />
    ),
    ol: (props) => (
        <ol className="my-6 list-decimal space-y-3 pl-6 text-slate-700 marker:text-slate-400" {...props} />
    ),
    blockquote: (props) => (
        <blockquote
            className="my-8 border-l-4 border-blue-200 bg-blue-50/60 px-6 py-4 text-lg font-medium text-slate-700 italic"
            {...props}
        />
    ),
    code: ({ inline, className, children, ...props }) => {
        if (inline) {
            return (
                <code
                    className="rounded-md bg-slate-900/5 px-1.5 py-1 text-sm font-semibold text-slate-800"
                    {...props}
                >
                    {children}
                </code>
            );
        }

        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : 'text';
        const code = String(children).replace(/\n$/, '');

        return (
            <div className="my-8 overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-950/95 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/5 bg-slate-900/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                    <span className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </span>
                    <span className="ml-2 text-slate-300">{language}</span>
                </div>
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        background: 'transparent',
                        fontSize: '0.95rem',
                        padding: '1.75rem',
                    }}
                    wrapLines
                    showLineNumbers
                    lineNumberStyle={{
                        minWidth: '2.5rem',
                        textAlign: 'right',
                        marginRight: '1.5rem',
                        color: '#94a3b8',
                        fontWeight: 500,
                    }}
                    {...props}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        );
    },
    table: (props) => (
        <div className="my-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700" {...props} />
        </div>
    ),
    th: (props) => (
        <th className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-500" {...props} />
    ),
    td: (props) => (
        <td className="border-b border-slate-100 px-4 py-3" {...props} />
    )
};

export default function PostViewer({ post }) {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-slate-200/70 bg-white/95 p-10 shadow-lg dark:border-slate-800/70"
            >
                <Link
                    to="/blogs"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500"
                >
                    ← Back to all posts
                </Link>

                <header className="mt-6 space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400 ">Personal blog</p>
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                        {post.title}
                    </h1>
                </header>

                <motion.div
                    className="mt-10 space-y-8 text-slate-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                    >
                        {post.content}
                    </ReactMarkdown>
                </motion.div>
            </motion.div>
        </div>
    );
}

