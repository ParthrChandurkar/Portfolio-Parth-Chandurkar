import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Download, GitBranch } from 'lucide-react';

function NetworkBackdrop() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let width = 0;
    let height = 0;
    const pointer = { x: -1000, y: -1000 };
    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const step = 42;
      for (let x = 18; x < width; x += step) {
        for (let y = 18; y < height; y += step) {
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          context.fillStyle = distance < 130 ? '#78b8a0' : '#29332e';
          context.fillRect(x, y, 2, 2);
        }
      }
      const startX = width * .62;
      for (let i = 0; i < 5; i++) {
        const y = height * .22 + i * 65;
        const endX = width - 35 - (i % 2) * 70;
        context.strokeStyle = '#324f42';
        context.lineWidth = 1;
        context.beginPath(); context.moveTo(startX, y); context.lineTo(endX - 40, y); context.lineTo(endX, y + 40); context.stroke();
        context.strokeRect(startX - 5, y - 5, 10, 10);
        context.strokeRect(endX - 5, y + 35, 10, 10);
        const progress = motion.matches ? .6 : ((time / 5000 + i * .18) % 1);
        context.fillStyle = i % 2 ? '#a8e85c' : '#52cdb4';
        context.fillRect(startX + (endX - 40 - startX) * progress - 3, y - 3, 6, 6);
      }
      if (!motion.matches) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width; height = box.height;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = width * dpr; canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      cancelAnimationFrame(frame); draw();
    };
    const move = event => { const box = canvas.getBoundingClientRect(); pointer.x = event.clientX - box.left; pointer.y = event.clientY - box.top; };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.parentElement.addEventListener('pointermove', move);
    motion.addEventListener('change', resize);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); canvas.parentElement?.removeEventListener('pointermove', move); motion.removeEventListener('change', resize); };
  }, []);
  return <canvas ref={ref} className="network-backdrop" aria-hidden="true" />;
}

export default function RetroHero({ profile, stats }) {
  return <>
    <section className="retro-hero" aria-labelledby="hero-title">
      <NetworkBackdrop />
      <div className="retro-hero-inner">
        <p className="eyebrow"><span className="status-square" /> PUNE, INDIA / CLOUD & DEVOPS</p>
        <h1 id="hero-title">Parth Rajesh<br /><span>Chandurkar<span className="retro-cursor" aria-hidden="true">_</span></span></h1>
        <p className="retro-intro">Infrastructure. Automation.<br /><strong>A little curiosity in every commit.</strong></p>
        <p className="hero-copy">Final-year IT student building with AWS, Kubernetes, and observability. Exploring how systems work, and how to make them work better.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <ArrowDown size={17} /></a>
          <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer"><Download size={17} /> Resume</a>
          <a className="hero-github" href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-caption" aria-hidden="true">SYSTEMS / CODE / COMMUNITY <span>BUILD / OBSERVE / ITERATE</span></div>
      </div>
    </section>
    <section className="explore-band" aria-label="Explore portfolio">
      <div className="explore-heading"><span className="section-kicker">INDEX / 01</span><h2>Find your way around.</h2></div>
      <div className="directory-links">
        {[['01', 'Projects', '#work', 'Cloud & applied systems'], ['02', 'Open source', '/opensource', 'Meshery & Layer5'], ['03', 'Research', '#research', 'Published on IEEE Xplore'], ['04', 'Experience', '#experience', 'Building & learning']].map(([number, title, href, note]) => <a href={href} key={number}><span className="directory-number">{number}</span><div><strong>{title}</strong><small>{note}</small></div><ArrowUpRight size={20} /></a>)}
      </div>
      <dl className="retro-stats">{stats.map(stat => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt></div>)}</dl>
    </section>
  </>;
}
