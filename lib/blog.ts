import matter from 'gray-matter'
import type { GrayMatterFile } from 'gray-matter'

export interface BlogItem {
    id: string;
    title: string;
    article_date: number;
    author: string;
    tags: [string];
    excerpt: string;
    frontmatter: GrayMatterFile<string>['data'];
    content: GrayMatterFile<string>['content'];
}

export function formatBlogDate(item: BlogItem): string {
    let dateTimeFormatter = Intl.DateTimeFormat("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return dateTimeFormatter.format(item.article_date);
}

/* We cache the blogs as we need to read it multiple times */
let blogs: BlogItem[] | undefined = undefined;

export function getAllBlogs(): BlogItem[] {
    if (!blogs) {
        const context = require.context('../content/blog/_posts', false, /\.md$/);
        blogs = context.keys().map(
            (key) => {
                // Get name of file
                const matches = key.match(/\.\/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})-(.*)\.md/);
                const content = context(key).default as string;
                const document = matter(content, { excerpt: true, excerpt_separator: "\n\n" });
                let excerpt = document.excerpt!;
                /* We match a lines that start with [token]: which is a markdown link */
                const links = content.match(/^\[[^\]]+\]:.*/gm);
                if (links) {
                    /* Then we append those link definitions to the except so that it will
                       render correctly */
                    excerpt += "\n" + links!.map((link) => { return "\n" + link } );
                }
                let item: BlogItem = {
                    id: matches![2],
                    title: document.data.title,
                    author: document.data.author,
                    excerpt: excerpt,
                    article_date: Date.parse(matches![1]),
                    tags: document.data.tags
                        .split(/[ ]/)
                        .map((tag: string) => { return tag.trim(); }),
                    frontmatter: document.data,
                    content: document.content
                };
                return item;
            });
        blogs = blogs.sort((a, b) => b.article_date - a.article_date);
    }
    return blogs
}