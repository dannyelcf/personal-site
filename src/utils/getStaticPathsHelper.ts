import { getCollection } from 'astro:content';
import { slugify } from '@/utils/slugify';
import { calculateReadingTime } from '@/utils/readingTime';

export async function getStaticPathsByField(
  field: 'tags' | 'categories' | 'contributors',
  paramName: string
) {
  const allBlogPosts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  const fieldMap = new Map<string, typeof allBlogPosts>();

  allBlogPosts.forEach((post) => {
    const values = post.data[field] || [];
    values.forEach((value) => {
      if (!fieldMap.has(value)) {
        fieldMap.set(value, []);
      }
      fieldMap.get(value)!.push(post);
    });
  });

  return await Promise.all(
    Array.from(fieldMap.entries()).map(async ([fieldValue, posts]) => {
      const sortedPosts = await Promise.all(
        posts
          .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
          .map(async (post) => {
            const { body } = post;
            const readingTime = calculateReadingTime(body);
            return { ...post, readingTime };
          })
      );
      return {
        params: { [paramName]: slugify(fieldValue) },
        props: { heading: fieldValue, posts: sortedPosts },
      };
    })
  );
}
