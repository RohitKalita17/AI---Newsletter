import Link from 'next/link';
import { Article } from '@/lib/mockData';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const categoryColors = {
    AI: 'bg-purple-500/20 text-purple-300',
    Tech: 'bg-blue-500/20 text-blue-300',
    Robotics: 'bg-green-500/20 text-green-300',
  };

  if (featured) {
    return (
      <Link href={`/articles/${article.id}`} className="group block">
        <article className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="mb-3 inline-block">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {article.title}
              </h2>
              <p className="mb-4 text-white/70 line-clamp-2">
                {article.summary}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.id}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10">
        <div className="mb-2 inline-block">
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${categoryColors[article.category]}`}>
            {article.category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="mb-3 text-sm text-white/70 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </article>
    </Link>
  );
}

