import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '../Components/Navigation.jsx';
import PostViewer from '../Components/PostViewer.jsx';
import { getPost } from '../lib/postRepository.js';

export default function BlogDetailPage() {
    const { slug = '' } = useParams();
    const post = useMemo(() => getPost(slug), [slug]);

    if (!post) {
        return <Navigate to="/blogs" replace />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 transition-colors duration-500">
            <Navigation />
            <main className="pt-24 pb-32">
                <PostViewer post={post} />
            </main>
        </div>
    );
}

