'use client';

import { useState, useEffect, useMemo } from 'react';
import { Article } from '@/lib/mockData';
import { mockArticles } from '@/lib/mockData';
import { getArticles as getArticlesService } from '@/lib/articleService';

export interface UseArticlesOptions {
  category?: Article['category'] | 'All';
  limit?: number;
}

export interface UseArticlesReturn {
  articles: Article[];
  loading: boolean;
  error: string | null;
  getArticleById: (id: string) => Article | undefined;
  getLatestArticles: (count: number) => Article[];
  getArticlesByCategory: (category: Article['category']) => Article[];
}

/**
 * Custom hook to fetch and manage articles
 * Currently uses mock data, but can be easily replaced with API calls
 */
export function useArticles(options: UseArticlesOptions = {}): UseArticlesReturn {
  const { category = 'All', limit } = options;
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call delay
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // In a real app, this would be: const response = await fetch('/api/articles');
        // Use the article service to get filtered articles
        const filteredArticles = getArticlesService({
          category: category === 'All' ? undefined : category,
          limit,
        });
        
        setArticles(filteredArticles);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, limit]);

  const getArticleById = useMemo(
    () => (id: string) => {
      return mockArticles.find(article => article.id === id);
    },
    []
  );

  const getLatestArticles = useMemo(
    () => (count: number) => {
      const sorted = [...mockArticles].sort(
        (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      );
      return sorted.slice(0, count);
    },
    []
  );

  const getArticlesByCategory = useMemo(
    () => (category: Article['category']) => {
      return mockArticles.filter(article => article.category === category);
    },
    []
  );

  return {
    articles,
    loading,
    error,
    getArticleById,
    getLatestArticles,
    getArticlesByCategory,
  };
}

