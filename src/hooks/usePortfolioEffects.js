import { useEffect } from 'react';

export function usePortfolioEffects() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let cursorRaf = 0;
    let previewRaf = 0;

    const cleanups = [];

    const isFine = window.matchMedia('(pointer:fine)').matches;
    if (isFine && dot && ring) {
      document.body.classList.add('has-cursor');

      const onMouseMove = (e) => {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px)`;
      };

      const cursorLoop = () => {
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.transform = `translate(${rx}px, ${ry}px)`;
        cursorRaf = requestAnimationFrame(cursorLoop);
      };

      window.addEventListener('mousemove', onMouseMove);
      cursorRaf = requestAnimationFrame(cursorLoop);
      cleanups.push(() => {
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(cursorRaf);
        document.body.classList.remove('has-cursor');
      });

      document.querySelectorAll('[data-cursor]').forEach((el) => {
        const onEnter = () => {
          ring.classList.add('is-hover');
          ring.dataset.label = el.dataset.cursor === 'view' ? 'View' : '';
        };
        const onLeave = () => ring.classList.remove('is-hover');
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        cleanups.push(() => {
          el.removeEventListener('mouseenter', onEnter);
          el.removeEventListener('mouseleave', onLeave);
        });
      });
    }

    document.querySelectorAll('.magnetic').forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    document.querySelectorAll('.tilt').forEach((el) => {
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rotX = (py - 0.5) * -6;
        const rotY = (px - 0.5) * 8;
        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('visible');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll('.fade-up').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    const bar = document.querySelector('.scroll-progress span');
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (bar) bar.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    const heroBg = document.querySelector('.hero-bg-text');
    const orb = document.querySelector('.hero-orb');
    const onHeroScroll = () => {
      const y = window.scrollY;
      if (heroBg) heroBg.style.transform = `translateY(calc(-50% + ${y * 0.2}px))`;
      if (orb) orb.style.transform = `translate(${y * 0.05}px, ${y * 0.25}px)`;
    };
    window.addEventListener('scroll', onHeroScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onHeroScroll));

    const preview = document.getElementById('hoverPreview');
    const previewIcon = preview?.querySelector('.hover-preview-icon');
    const previewTitle = preview?.querySelector('.hover-preview-title');
    let pvX = 0;
    let pvY = 0;
    let pvTX = 0;
    let pvTY = 0;
    let pvActive = false;

    document.querySelectorAll('.project-card:not(.project-featured)').forEach((card) => {
      const onEnter = () => {
        if (!preview) return;
        const accent =
          getComputedStyle(card).getPropertyValue('--card-accent').trim() || 'var(--accent)';
        preview.style.setProperty('--preview-accent', accent);
        if (previewIcon) previewIcon.textContent = card.dataset.previewIcon || '✦';
        if (previewTitle) previewTitle.textContent = card.dataset.previewTitle || '';
        preview.classList.add('is-visible');
        pvActive = true;
      };
      const onMove = (e) => {
        pvX = e.clientX + 28;
        pvY = e.clientY + 28;
      };
      const onLeave = () => {
        preview?.classList.remove('is-visible');
        pvActive = false;
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    const previewLoop = () => {
      pvTX += (pvX - pvTX) * 0.2;
      pvTY += (pvY - pvTY) * 0.2;
      if (pvActive && preview) preview.style.transform = `translate(${pvTX}px, ${pvTY}px)`;
      previewRaf = requestAnimationFrame(previewLoop);
    };
    previewRaf = requestAnimationFrame(previewLoop);
    cleanups.push(() => cancelAnimationFrame(previewRaf));

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
