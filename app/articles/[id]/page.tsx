import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleById } from '@/lib/articleService';

interface ArticleDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

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

  // Format content with line breaks
  const contentParagraphs = article.content.split('\n\n');

  return (
    <main className="min-h-screen">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/articles"
          className="mb-8 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${categoryColors[article.category]}`}>
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          {article.title}
        </h1>

        {/* Meta Information */}
        <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6 text-sm text-white/60">
          <span className="font-medium text-white">{article.author}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <time dateTime={article.publishedDate}>{formattedDate}</time>
        </div>

        {/* Summary */}
        <p className="mb-8 text-xl leading-relaxed text-white/80">
          {article.summary}
        </p>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {contentParagraphs.map((paragraph, index) => {
            // Check if paragraph starts with ** for bold headings
            if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
              const headingText = paragraph.trim().replace(/\*\*/g, '');
              return (
                <h2
                  key={index}
                  className="mb-4 mt-8 text-2xl font-bold text-white first:mt-0"
                >
                  {headingText}
                </h2>
              );
            }

            return (
              <p
                key={index}
                className="mb-6 leading-8 text-white/90"
              >
                {paragraph.split('\n').map((line, lineIndex) => {
                  // Handle inline bold text
                  const parts = line.split(/(\*\*[^*]+\*\*)/);
                  return (
                    <span key={lineIndex}>
                      {parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          const boldText = part.replace(/\*\*/g, '');
                          return (
                            <strong key={partIndex} className="font-semibold text-white">
                              {boldText}
                            </strong>
                          );
                        }
                        return <span key={partIndex}>{part}</span>;
                      })}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        {/* Navigation Links */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            View all articles
          </Link>
        </div>
      </article>
    </main>
  );
}

