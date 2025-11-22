import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  const sortedPosts = blog.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: "Dannyel's Dev Blog",
    description: 'Web development, programming, and technology articles',
    site: context.site!,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      categories: post.data.categories,
    })),
    customData: `<language>en-us</language>`,
  });
}
