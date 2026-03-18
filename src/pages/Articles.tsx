import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import CTASection from '../components/home/CTASection';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Articles.css';

const Articles = () => {
  return (
    <div className="articles-page animate-fade-in">
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="glass-badge mb-4">Blog & Informasi</span>
            <h1 className="tech-heading-lg text-gradient-cyan mb-6">Artikel Pendidikan</h1>
            <p className="articles-subtitle">
              Temukan berbagai tips belajar efektif, persiapan ujian, dan panduan pendidikan karakter untuk kesuksesan putra-putri Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-surface-alt pt-8">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card-tech">
                <div className="article-img-wrapper">
                  {/* Using a placeholder gradient since real images aren't generated yet */}
                  <div className="article-img-placeholder">
                    <span className="text-cyan font-bold opacity-50 text-2xl">Bimbel Siswa Teladan</span>
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="meta-item"><Calendar size={14} /> {article.date}</span>
                    <span className="meta-item"><User size={14} /> {article.author}</span>
                  </div>
                  <h2 className="article-title">
                    <Link to={`/artikel/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link to={`/artikel/${article.slug}`} className="read-more-link">
                    Baca Selengkapnya <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Articles;
