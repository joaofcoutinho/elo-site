import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  Telerradiologia: "bg-[#0070B3]/10 text-[#0070B3] border-[#0070B3]/20",
  Tecnologia:      "bg-[#EEF5FB] text-[#003A6B] border-[#99C1DD]/40",
  Gestão:          "bg-[#F7FAFD] text-[#4A5568] border-[#E2EDF5]",
};

export function BlogPreview() {
  return (
    <section aria-label="Blog Elo e-Health" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionTag className="mb-4">Blog</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003A6B] font-[var(--font-plus-jakarta)]">
              Blog Elo e-Health:{" "}
              <span className="text-[#0070B3]">Seu Guia</span>{" "}
              para Telerradiologia
            </h2>
          </div>
          <Button
            href="/blog"
            variant="outline"
            size="md"
            className="flex-shrink-0"
            aria-label="Ver todos os artigos do blog"
          >
            Ver todos os artigos
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group light-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 block"
              aria-label={`Ler artigo: ${post.title}`}
            >
              {/* Thumbnail */}
              <div className="aspect-[16/9] bg-[#EEF5FB] relative overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                        CATEGORY_COLORS[post.category] ?? "bg-[#F7FAFD] text-[#4A5568] border-[#E2EDF5]"
                      }`}
                    >
                      <Tag size={10} aria-hidden="true" />
                      {post.category}
                    </span>
                  </div>
                )}
                {/* Category badge over image */}
                {post.image && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
                        CATEGORY_COLORS[post.category] ?? "bg-white/80 text-[#4A5568] border-[#E2EDF5]"
                      }`}
                    >
                      <Tag size={10} aria-hidden="true" />
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#878787] text-xs mb-3">
                  <Calendar size={12} aria-hidden="true" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>

                <h3 className="text-[#003A6B] font-semibold text-base leading-snug mb-3 group-hover:text-[#0070B3] transition-colors font-[var(--font-plus-jakarta)] line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[#878787] text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <span className="flex items-center gap-1 text-[#0070B3] text-sm font-medium group-hover:gap-2 transition-all duration-200">
                  Ler mais
                  <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
