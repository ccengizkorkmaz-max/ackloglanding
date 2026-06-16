import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  articles: Record<string, { title: string; description?: string; content: string }>;
  maxItems?: number;
}

/**
 * Generates keyword tokens from a slug by splitting on hyphens
 * and filtering out very short/common words
 */
function getKeywords(slug: string): string[] {
  const stopWords = new Set([
    've', 'ile', 'icin', 'bir', 'bu', 'ne', 'nasil', 'nedir', 'nelerdir',
    'mi', 'mu', 'da', 'de', 'den', 'dan', 'nin', 'nun', 'ler', 'lar',
    'en', 'ya', 'veya', 'olan', 'olarak', 'gibi', 'kadar', 'daha',
    'vs', 'rehberi', 'rehber', 'ornegi', 'ornek', 'listesi', 'liste',
    'cozumu', 'cozum', 'yontemleri', 'yontem', 'araclari', 'arac',
  ]);

  return slug
    .split('-')
    .filter(word => word.length > 2 && !stopWords.has(word));
}

/**
 * Calculates a relevance score between two slugs based on
 * shared keyword tokens
 */
function calculateRelevance(slug1: string, slug2: string): number {
  const keywords1 = getKeywords(slug1);
  const keywords2 = getKeywords(slug2);

  if (keywords1.length === 0 || keywords2.length === 0) return 0;

  let score = 0;
  for (const word of keywords1) {
    for (const other of keywords2) {
      // Exact match
      if (word === other) {
        score += 3;
      }
      // Partial match (one word contains the other)
      else if (word.length >= 4 && other.length >= 4 && (word.includes(other) || other.includes(word))) {
        score += 1;
      }
    }
  }

  return score;
}

/**
 * RelatedArticles component renders a grid of related wiki articles
 * based on keyword matching from slugs. This creates internal cross-links
 * that help with SEO (reducing orphan pages) and user navigation.
 */
export function RelatedArticles({ currentSlug, articles, maxItems = 6 }: RelatedArticlesProps) {
  // Score all articles against the current one
  const scored = Object.entries(articles)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, data]) => ({
      slug,
      title: data.title,
      score: calculateRelevance(currentSlug, slug),
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxItems);

  // If not enough related articles found, fill with random ones
  if (scored.length < maxItems) {
    const usedSlugs = new Set([currentSlug, ...scored.map(s => s.slug)]);
    const allSlugs = Object.keys(articles).filter(s => !usedSlugs.has(s));
    
    // Deterministic selection based on current slug hash
    const hash = currentSlug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const remaining = maxItems - scored.length;
    
    for (let i = 0; i < remaining && i < allSlugs.length; i++) {
      const idx = (hash + i * 7) % allSlugs.length;
      const slug = allSlugs[idx];
      if (!usedSlugs.has(slug)) {
        scored.push({
          slug,
          title: articles[slug].title,
          score: 0,
        });
        usedSlugs.add(slug);
      }
    }
  }

  if (scored.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-800/50">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <BookOpen className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">İlgili Makaleler</h3>
          <p className="text-xs text-slate-500">Bu konuyla ilişkili diğer içerikleri keşfedin</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scored.map(({ slug, title }) => (
          <Link
            key={slug}
            href={`/wiki/${slug}`}
            className="group p-5 rounded-xl border border-slate-800/60 bg-slate-900/20 hover:bg-slate-900/40 hover:border-blue-500/30 transition-all duration-300"
          >
            <h4 className="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug mb-3">
              {title}
            </h4>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-500/70 uppercase tracking-wider group-hover:text-blue-400 transition-colors">
              Devamını Oku <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
