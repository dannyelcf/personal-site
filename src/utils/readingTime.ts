/**
 * Calculate reading time for a blog post
 * @param content - The markdown/text content
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Remove markdown syntax and HTML tags
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[#*_~\[\]()]/g, '') // Remove markdown syntax
    .replace(/---[\s\S]*?---/g, '') // Remove frontmatter
    .trim();

  // Count words (split by whitespace)
  const words = plainText.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Calculate reading time in minutes, round up
  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return minutes;
}
