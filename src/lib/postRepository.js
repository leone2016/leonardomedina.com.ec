const slugFromPath = (path) => {
    const fileName = path.split('/').pop() || '';
    return fileName.replace(/\.md$/, '');
};

const titleCase = (slug) =>
    slug
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

const postFiles = import.meta.glob('../../public/posts/*.md', {
    as: 'raw',
    eager: true
});

const postsIndex = Object.entries(postFiles).map(([path, content]) => {
    const slug = slugFromPath(path);
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : titleCase(slug);
    const body = titleMatch
        ? content.replace(titleMatch[0], '').trim()
        : content.trim();
    const excerpt = body
        .replace(/\s+/g, ' ')
        .slice(0, 200)
        .trim()
        .concat(body.length > 200 ? '…' : '');

    return {
        slug,
        title,
        excerpt,
        content
    };
});

postsIndex.sort((a, b) => a.title.localeCompare(b.title));

const postMap = new Map(postsIndex.map((post) => [post.slug, post]));

export const listPosts = () =>
    postsIndex.map(({ slug, title, excerpt }) => ({ slug, title, excerpt }));

export const getPost = (slug) => postMap.get(slug);

export const hasPost = (slug) => postMap.has(slug);

