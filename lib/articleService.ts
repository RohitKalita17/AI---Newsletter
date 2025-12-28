import { Article } from './mockData';
import { mockArticles } from './mockData';

/**
 * Article service functions that can be used in both client and server components
 * These are helper functions extracted from the hook for use in server components
 */

/**
 * Get a single article by ID
 */
export function getArticleById(id: string): Article | undefined {
  return mockArticles.find(article => article.id === id);
}

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
  return [...mockArticles];
}

/**
 * Get latest articles sorted by date
 */
export function getLatestArticles(count: number): Article[] {
  const sorted = [...mockArticles].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
  return sorted.slice(0, count);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: Article['category']): Article[] {
  return mockArticles.filter(article => article.category === category);
}

/**
 * Get articles with optional filtering
 */
export function getArticles(options: {
  category?: Article['category'] | 'All';
  limit?: number;
}): Article[] {
  let filtered = [...mockArticles];

  if (options.category && options.category !== 'All') {
    filtered = filtered.filter(article => article.category === options.category);
  }

  // Sort by date (newest first)
  filtered.sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  if (options.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
}

