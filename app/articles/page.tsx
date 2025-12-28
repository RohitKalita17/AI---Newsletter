'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import { useArticles } from '@/hooks/useArticles';
import { Article } from '@/lib/mockData';

type CategoryFilter = 'All' | Article['category'];

export default function ArticlesPage() {
  const categories: CategoryFilter[] = ['All', 'AI', 'Tech', 'Robotics'];
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  
  const { articles, loading, error } = useArticles({
    category: selectedCategory === 'All' ? undefined : selectedCategory,
  });

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Latest Articles
          </h1>
          <p className="text-lg text-white/60">
            The latest developments in AI, Tech and Robotics
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'border-white/30 bg-white/10 text-white'
                  : 'border-white/10 bg-white/5 text-white/80 hover:border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-white/60">
            <p>Loading articles...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-400">
            <p>Error: {error}</p>
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.length > 0 ? (
              articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            ) : (
              <div className="col-span-full text-center text-white/60">
                <p>No articles found for this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

