import { useEffect, useRef, useState } from 'react';
import { content, profile, type Language } from './content';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function SectionHeading({ number, title, aside }: { number: string; title: string; aside: string }) {
  return <div className="section-heading reveal">
    <div className="section-kicker"><span>{number} /</span><span>{aside}</span></div>
    <h2>{title}</h2>
  </div>;
}

function AmacComparison({ language, page }: { language: Language; page: 'home' | 'ipad' | 'support' }) {
  const [position, setPosition] = useState(50);
  const t = content[language].featuredProject;
  const comparison = {
    home: { oldImage: '/amac-home-old-louise.png', newImage: '/amac-home-new-louise.png', oldHeight: 1794, newHeight: 1862, oldLabel: t.homeOldLabel, newLabel: t.homeNewLabel, pageName: t.homeTitle },
    ipad: { oldImage: '/amac-ipad-old-louise.png', newImage: '/amac-ipad-new-louise.png', oldHeight: 1862, newHeight: 1862, oldLabel: t.oldLabel, newLabel: t.newLabel, pageName: t.ipadTitle },
    support: { oldImage: '/amac-support-old-louise.png', newImage: '/amac-support-new-louise.png', oldHeight: 1794, newHeight: 1794, oldLabel: t.homeOldLabel, newLabel: t.homeNewLabel, pageName: t.supportTitle }
  }[page];
  return <div className="amac-comparison comparison-stage">
    <img className="amac-comparison-image" src={assetUrl(comparison.oldImage)} alt="" width="3812" height={comparison.oldHeight} loading="lazy" />
    <div className="comparison-new" style={{ clipPath: `inset(0 0 0 ${position}%)` }}><img className="amac-comparison-image" src={assetUrl(comparison.newImage)} alt="" width="3812" height={comparison.newHeight} loading="lazy" /></div>
    <span className="comparison-label comparison-label-old">{comparison.oldLabel}</span><span className="comparison-label comparison-label-new">{comparison.newLabel}</span>
    <div className="comparison-divider" style={{ left: `${position}%` }} aria-hidden="true"><span>‹ ›</span></div>
    <input className="comparison-range" type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label={language === 'nl' ? `Vergelijk oud en nieuw: ${comparison.pageName}` : `Compare before and after: ${comparison.pageName}`} aria-valuetext={`${100 - position}% ${language === 'nl' ? 'nieuw ontwerp zichtbaar' : 'new design visible'}`} />
    <span className="comparison-hint">{language === 'nl' ? 'Sleep om te vergelijken ↔' : 'Drag to compare ↔'}</span>
  </div>;
}

const tradeInImages = [
  '/tradein-entry.png', '/tradein-device.png', '/tradein-condition.png',
  '/tradein-condition-detail.png', '/tradein-result.png',
  '/tradein-pdp-result.png', '/tradein-process.png'
];

function TradeInShowcase({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const t = content[language].tradeInProject;
  const goTo = (step: number) => setActive(Math.max(0, Math.min(step, tradeInImages.length - 1)));
  useEffect(() => {
    const steps = stepsRef.current;
    const current = steps?.querySelector<HTMLButtonElement>('[aria-current="step"]');
    if (!steps || !current) return;
    const stepsRect = steps.getBoundingClientRect();
    const currentRect = current.getBoundingClientRect();
    const left = steps.scrollLeft + currentRect.left - stepsRect.left - (steps.clientWidth - currentRect.width) / 2;
    steps.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [active]);
  const onTouchEnd = (endX: number) => {
    if (touchStart.current === null) return;
    const distance = endX - touchStart.current;
    if (Math.abs(distance) > 45) goTo(active + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return <article className="tradein-case reveal" id="trade-in" aria-labelledby="tradein-title">
    <div className="tradein-intro">
      <p className="featured-case-label">{t.label}</p>
      <h3 id="tradein-title">{t.title}</h3>
      <p>{t.description}</p>
    </div>
    <div className="tradein-gallery">
      <div className="tradein-image-wrap" onTouchStart={event => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={event => onTouchEnd(event.changedTouches[0].clientX)}>
        <div className="tradein-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
          {tradeInImages.map((src, index) => <img key={src} src={assetUrl(src)} alt={index === active ? `${t.imageAlt}${t.steps[index]}` : ''} aria-hidden={index !== active} width="2560" height="1604" loading="lazy" draggable={false} />)}
        </div>
      </div>
      <div className="tradein-controls">
        <div className="tradein-step-copy" aria-live="polite"><span>{t.step} {active + 1} / {tradeInImages.length}</span><strong>{t.steps[active]}</strong></div>
        <div className="tradein-arrows"><button type="button" onClick={() => goTo(active - 1)} aria-label={t.previous} disabled={active === 0}>←</button><button type="button" onClick={() => goTo(active + 1)} aria-label={t.next} disabled={active === tradeInImages.length - 1}>→</button></div>
      </div>
      <div className="tradein-steps" ref={stepsRef} role="group" aria-label={t.title}>{tradeInImages.map((image, index) => <button key={image} type="button" className={index === active ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`${t.step} ${index + 1}: ${t.steps[index]}`} aria-current={index === active ? 'step' : undefined}><span>{String(index + 1).padStart(2, '0')}</span>{t.steps[index]}</button>)}</div>
    </div>
  </article>;
}

function Header({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  const t = content[language];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const navigation = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const sections = ['about', 'experience', 'projects', 'contact'].map(id => document.getElementById(id)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(`#${visible.target.id}`);
    }, { rootMargin: '-24% 0px -60% 0px', threshold: [0, .1, .5] });
    sections.forEach(section => observer.observe(section));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);

  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <nav className="nav-shell container" aria-label={language === 'nl' ? 'Hoofdnavigatie' : 'Main navigation'}>
      <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label={`${profile.name}, ${t.backTop}`}>LM<span className="wordmark-dot">.</span></a>
      <div className={`nav-links ${open ? 'is-open' : ''}`} id="navigation-links">
        {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={active === item.href ? 'active' : ''}>{item.label}</a>)}
        <span className="mobile-nav-note">Louise Monte / {new Date().getFullYear()}</span>
      </div>
      <button className="language-switch" type="button" aria-label={t.languageLabel} onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}><span className={language === 'nl' ? 'selected' : ''}>NL</span><span className="language-divider">/</span><span className={language === 'en' ? 'selected' : ''}>EN</span></button>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} type="button" aria-label={open ? t.menuClose : t.menuOpen} aria-controls="navigation-links" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    </nav>
  </header>;
}

function App() {
  const [language, setLanguage] = useState<Language>('nl');
  const t = content[language];
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.pageDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.pageTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.pageDescription);
  }, [language, t]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    nodes.forEach(node => observer.observe(node));
    document.documentElement.classList.add('motion-ready');
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); };
  }, [t]);

  return <>
    <a className="skip-link" href="#main">{t.skip}</a>
    <Header language={language} setLanguage={setLanguage} />
    <main id="main">
      <section id="top" className="hero container" aria-labelledby="hero-heading">
        <div className="hero-main"><div className="hero-content"><p className="eyebrow hero-enter" style={{ animationDelay: '60ms' }}><span className="status-dot" />{t.eyebrow}</p>
          <h1 id="hero-heading" className="hero-enter" style={{ animationDelay: '130ms' }}>{t.hero[0]}<br /><span>{t.hero[1]}</span><br />{t.hero[2]}</h1>
          <div className="hero-bottom hero-enter" style={{ animationDelay: '230ms' }}><p>{t.introduction}</p><div className="hero-actions"><a href="#projects" className="button button-dark">{t.exploreWork} <Arrow diagonal /></a><a href="#contact" className="button button-ghost">{t.getInTouch} <Arrow diagonal /></a></div></div>
        </div><div className="hero-portrait hero-enter" style={{ animationDelay: '220ms' }}><img src={assetUrl(profile.portrait)} alt={language === 'nl' ? 'Portret van Louise Monte' : 'Portrait of Louise Monte'} width="4468" height="6702" /></div></div>
        <div className="hero-footer hero-enter" style={{ animationDelay: '330ms' }}><a href="#about">{t.scroll} <span className="down-arrow">↓</span></a><span>PORTFOLIO / {year}</span></div>
      </section>

      <section id="about" className="section about-section"><div className="container">
        <SectionHeading number="01" title={t.aboutTitle} aside={t.aboutLabel} />
        <div className="about-layout"><div className="about-text"><p className="about-lead reveal">{t.aboutLead[0]} <em>{t.aboutLead[1]}</em></p><div className="about-copy reveal">{t.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="currently"><span className="currently-icon">↗</span><div><small>{t.exploringLabel}</small><p>{t.exploring}</p></div></div></div></div></div>
      </div></section>

      <section id="experience" className="section experience-section"><div className="container">
        <SectionHeading number="02" title={t.experienceTitle} aside={t.experienceLabel} />
        <p className="experience-intro reveal">{t.experienceIntro}</p>
        <div className="list-stack">{t.experience.map((item, index) => <article className="experience-row" key={`${item.employer}-${item.role}`}><div className="row-index">0{index + 1}</div><div className="row-main"><h3>{item.role}</h3><p className="row-company">{item.employer}{item.team ? ` · ${item.team}` : ''}</p><p className="row-description">{item.description}</p>{item.focus.length > 0 && <div className="inline-skills">{item.focus.map(focus => <span key={focus}>{focus}</span>)}</div>}</div><time className="row-date">{item.period}</time></article>)}</div>
      </div></section>

      <section id="projects" className="section projects-section"><div className="container">
        <SectionHeading number="03" title={t.projectsTitle} aside={t.projectsLabel} />
        <article className="featured-case reveal" aria-labelledby="featured-case-title">
          <div className="featured-case-intro"><p className="featured-case-label">{t.featuredProject.label}</p><h3 id="featured-case-title">{t.featuredProject.title}</h3><p className="featured-case-description">{t.featuredProject.description}</p><p className="featured-case-instruction">{t.featuredProject.comparisonIntro}</p></div>
          <div className="case-comparison"><h4>{t.featuredProject.homeTitle}</h4><AmacComparison language={language} page="home" /><div className="case-image-links"><div><strong>{t.featuredProject.homeOldLabel}</strong><a href="https://web.archive.org/web/20240722180446/https://www.amac.nl/" target="_blank" rel="noreferrer">{t.featuredProject.homeOldLink} <Arrow diagonal /></a></div><div><strong>{t.featuredProject.homeNewLabel}</strong><a href="https://www.amac.nl/" target="_blank" rel="noreferrer">{t.featuredProject.homeNewLink} <Arrow diagonal /></a></div></div><p className="featured-case-note">{t.featuredProject.homeNote}</p></div>
          <div className="case-comparison"><h4>{t.featuredProject.ipadTitle}</h4><AmacComparison language={language} page="ipad" /><div className="case-image-links"><div><strong>{t.featuredProject.oldLabel}</strong><a href="https://web.archive.org/web/20240723002300/https://www.amac.nl/ipad" target="_blank" rel="noreferrer">{t.featuredProject.oldLink} <Arrow diagonal /></a></div><div><strong>{t.featuredProject.newLabel}</strong><a href="https://www.amac.nl/ipad" target="_blank" rel="noreferrer">{t.featuredProject.newLink} <Arrow diagonal /></a></div></div><p className="featured-case-note">{t.featuredProject.visualNote}</p></div>
          <div className="case-comparison" id="amac-support"><h4>{t.featuredProject.supportTitle}</h4><AmacComparison language={language} page="support" /><div className="case-image-links"><div><strong>{t.featuredProject.homeOldLabel}</strong><a href="https://web.archive.org/web/20240718073808/https://www.amac.nl/diensten/amac-support" target="_blank" rel="noreferrer">{t.featuredProject.supportOldLink} <Arrow diagonal /></a></div><div><strong>{t.featuredProject.homeNewLabel}</strong><a href="https://www.amac.nl/diensten/amac-support" target="_blank" rel="noreferrer">{t.featuredProject.supportNewLink} <Arrow diagonal /></a></div></div><p className="featured-case-note">{t.featuredProject.supportNote}</p></div>
        </article>
        <TradeInShowcase language={language} />
      </div></section>

      <section id="skills" className="section skills-section"><div className="container">
        <SectionHeading number="04" title={t.skillsTitle} aside={t.skillsLabel} />
        <div className="skills-grid">{t.skills.map((group, index) => <div className="skill-column reveal" key={group.category} style={{ transitionDelay: `${index * 80}ms` }}><h3><span>0{index + 1}</span>{group.category}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        <div className="magento-info reveal"><h3>{t.magentoTitle}</h3><p>{t.magentoDescription}</p></div>
      </div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner">
        <div className="contact-top reveal"><span>05 / {t.contactLabel}</span><span>{t.contactStatus}</span></div>
        <h2 className="reveal">{t.contactTitle[0]}<br /><em>{t.contactTitle[1]}</em></h2>
        <div className="contact-bottom reveal"><p>{t.contactDescription}</p>{profile.email ? <a className="contact-button" href={`mailto:${profile.email}`}>{t.emailAction} <Arrow diagonal /></a> : <span className="contact-pending">{t.contactPending}</span>}</div>
        <div className="contact-links reveal">{profile.email && <a href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a>}{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a> : <span className="pending-link">LinkedIn · {t.linkPending}</span>}{profile.github ? <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a> : <span className="pending-link">GitHub · {t.linkPending}</span>}{profile.cvPath && <a href={assetUrl(profile.cvPath)} download>CV <Arrow diagonal /></a>}</div>
      </div></section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><div><strong>{profile.name}</strong><span>{t.footerNote}</span></div><p>© {year} {profile.name}</p><a href="#top">{t.backTop} ↑</a></div></footer>
  </>;
}

export default App;
