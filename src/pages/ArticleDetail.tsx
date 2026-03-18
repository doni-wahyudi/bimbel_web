import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import CTASection from '../components/home/CTASection';
import { Calendar, User, ArrowLeft, Home } from 'lucide-react';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  
  // Find the requested article
  const article = articles.find(a => a.slug === slug);

  // If article not found (404)
  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container text-center">
          <h1 className="tech-heading-lg mb-6 text-gradient-cyan">Artikel Tidak Ditemukan</h1>
          <p className="text-light mb-8">Maaf, artikel yang Anda cari tidak tersedia atau URL salah.</p>
          <Link to="/artikel" className="btn-pill-primary">
            Kembali ke Daftar Artikel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page animate-fade-in">
      {/* Article Header (Hero) */}
      <header className="article-detail-header">
        <div className="container">
          <div className="article-header-content">
            <div className="breadcrumb">
              <Link to="/"><Home size={14} /> Beranda</Link>
              <span className="separator">/</span>
              <Link to="/artikel">Artikel</Link>
              <span className="separator">/</span>
              <span className="current" title={article.title}>{article.title}</span>
            </div>
            
            <h1 className="article-detail-title tech-heading-lg text-gradient-cyan">
              {article.title}
            </h1>
            
            <div className="article-detail-meta">
              <span className="meta-item"><Calendar size={16} className="text-cyan" /> {article.date}</span>
              <span className="meta-item"><User size={16} className="text-cyan" /> {article.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Body */}
      <main className="article-main-body py-16">
        <div className="container">
          <article className="article-content-wrapper glass-panel-tech">
            {/* Main Image */}
            <div className="article-hero-img-wrapper mb-10">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* SEO Summary/Excerpt lead */}
            <div className="article-lead">
              <p>{article.excerpt}</p>
            </div>

            {/* Body Content Paragraphs */}
            <div className="article-body-text">
              {article.content.map((paragraph, index) => {
                // Determine if a paragraph contains **bold** text and render it properly.
                // Note: For simple markdown handling without a full library.
                const renderWithBold = (text: string) => {
                  const parts = text.split(/(\*\*.*?\*\*)/g);
                  return parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="text-light">{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith('*') && part.endsWith('*')) {
                      return <em key={i} className="text-cyan">{part.slice(1, -1)}</em>;
                    }
                    return part;
                  });
                };

                return (
                  <p key={index} className="mb-6">
                    {renderWithBold(paragraph)}
                  </p>
                );
              })}
            </div>

            {/* Tags / Keywords for SEO visibility visually */}
            <div className="article-tags mt-12 pt-6">
              <h4 className="text-sm text-cyan mb-3 font-semibold uppercase tracking-wider">Tags & Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {article.keywords.split(',').map((keyword, index) => (
                  <span key={index} className="tag-pill">
                    {keyword.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="article-navigation mt-12 pt-8 text-center flex justify-center">
              <Link to="/artikel" className="btn-pill-glass">
                <ArrowLeft size={18} /> Kembali ke Kumpulan Artikel
              </Link>
            </div>
          </article>
        </div>
      </main>

      <CTASection />
    </div>
  );
};

export default ArticleDetail;
