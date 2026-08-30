const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal
if (!reducedMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => observer.observe(el));
} else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
}

// Hero parallax
const heroBg = $('.hero-bg');
if (heroBg && !reducedMotion) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        heroBg.style.transform = `translate3d(0, ${Math.min(y * 0.10, 55)}px, 0) scale(1.07)`;
    }, { passive: true });
}

// Mouse glow
const glow = $('.cursor-glow');
if (glow && !reducedMotion) {
    window.addEventListener('pointermove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

// Tilt album art
if (!reducedMotion) {
    $$('.tilt-card').forEach(card => {
        const img = $('img', card);
        card.addEventListener('pointermove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - .5;
            const y = (e.clientY - r.top) / r.height - .5;
            img.style.transform = `rotateY(${x * 7}deg) rotateX(${-y * 7}deg) scale(1.012)`;
        });
        card.addEventListener('pointerleave', () => {
            img.style.transform = '';
        });
    });
}

// Lyrics tabs
const lyricTabs = $$('.lyrics-tab');
const lyricPanels = $$('.lyrics-content');

lyricTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        lyricTabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        lyricPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const panel = document.getElementById(tab.dataset.song);
        if (panel) panel.classList.add('active');
    });
});

// Mobile nav
const menuToggle = $('.menu-toggle');
const nav = $('.site-nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(open));
    });
    $$('.site-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}
