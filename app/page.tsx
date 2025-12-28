'use client';

import Link from 'next/link';
import SubscriptionForm from '@/components/SubscriptionForm';
import ArticleCard from '@/components/ArticleCard';
import { useArticles } from '@/hooks/useArticles';

export default function Home() {
  const { getLatestArticles } = useArticles();
  const latestArticles = getLatestArticles(4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Daily AI insights,{' '}
          <span className="text-purple-400">curated and refined</span> by AI
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-white/70">
          Get the latest AI news, understand why it matters, and learn how to apply it in your work.
        </p>
        
        <div className="mx-auto mb-16 max-w-md">
          <SubscriptionForm />
        </div>

        <p className="mb-8 text-sm text-white/60">
          Join over 2,000,000+ readers from companies like:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/40">
          <span className="text-lg font-semibold">Google</span>
          <span className="text-lg font-semibold">Meta</span>
          <span className="text-lg font-semibold">Cisco</span>
          <span className="text-lg font-semibold">HubSpot</span>
          <span className="text-lg font-semibold">IBM</span>
          <span className="text-lg font-semibold">Microsoft</span>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest Articles</h2>
            <p className="mt-2 text-white/60">The latest developments in AI, Tech and Robotics</p>
          </div>
          <Link
            href="/articles"
            className="hidden text-white/80 hover:text-white transition-colors sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Article - Left Side */}
          <div className="lg:col-span-2">
            <ArticleCard article={latestArticles[0]} featured={true} />
          </div>
          
          {/* Smaller Articles - Right Side */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {latestArticles.slice(1, 5).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/articles"
            className="text-white/80 hover:text-white transition-colors"
          >
            View all articles →
          </Link>
        </div>
      </section>
    </main>
  );
}
