/**
 * Rough reading-time estimate from an article's raw body (HTML or Markdown).
 * Returns a label like "6 min read", or "" when no body is available.
 */
export function readingTime(body: string | undefined): string {
  if (!body) return '';
  const text = body
    .replace(/<[^>]+>/g, ' ') // strip HTML tags
    .replace(/[#>*`_~]/g, ' '); // strip common Markdown punctuation
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words === 0) return '';
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
