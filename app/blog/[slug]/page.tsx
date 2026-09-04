import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { POSTS, getPost } from '@/lib/blog';
import { mdToHtml } from '@/lib/md';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';
const REGISTER_URL = 'https://app.klientia.app/register';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  return {
    title: { absolute: post.metaTitle },
    description: post.description,
    alternates: { canonical: path },
    openGraph: { type: 'article', url: path, title: post.metaTitle, description: post.description },
    twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.description },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'es',
        author: { '@type': 'Organization', name: 'Klientia' },
        publisher: { '@id': `${SITE}#organization` },
        mainEntityOfPage: `${SITE}/blog/${post.slug}/`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}/` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-surface">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <nav aria-label="Migas" className="text-[13px] text-ink-faint">
            <Link href="/" className="hover:text-ink">
              Inicio
            </Link>
            <span className="mx-1.5">›</span>
            <Link href="/blog/" className="hover:text-ink">
              Blog
            </Link>
          </nav>
          <h1 className="mt-4 text-balance text-[2rem] font-bold leading-[1.12] tracking-tighter text-ink sm:text-[2.6rem]">
            {post.title}
          </h1>
          <div
            className="mt-8 text-[16px] leading-relaxed text-ink-mute
              [&>*:first-child]:mt-0
              [&_h2]:mt-11 [&_h2]:mb-3 [&_h2]:scroll-mt-28 [&_h2]:text-[1.5rem] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink
              [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_h3]:font-semibold [&_h3]:text-ink
              [&_p]:mt-4
              [&_ul]:mt-4 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
              [&_ol]:mt-4 [&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
              [&_li]:pl-1
              [&_a]:font-medium [&_a]:text-brand-600 hover:[&_a]:underline
              [&_strong]:text-ink"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.body) }}
          />
          <div className="mt-14 rounded-3xl border border-line bg-aura p-8 text-center sm:p-10">
            <p className="mx-auto max-w-lg text-[18px] font-semibold text-ink">
              Prueba Klientia gratis 7 días, sin tarjeta
            </p>
            <div className="mt-6">
              <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                Empezar ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
