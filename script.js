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
// ========================================
// FALL INTO ME — AUTOMATIC RELEASE SWITCH
// September 18, 2026 at 6:00 a.m. Central
// ========================================

const fallIntoMeReleaseTime = new Date('2026-09-18T11:00:00Z');


// ========================================
// FALL INTO ME — COUNTDOWN
// ========================================

const countdownDays = document.getElementById('countdown-days');
const countdownHours = document.getElementById('countdown-hours');
const countdownMinutes = document.getElementById('countdown-minutes');
const countdownSeconds = document.getElementById('countdown-seconds');
const fallCountdown = document.getElementById('fall-countdown');

function updateFallCountdown() {

    const now = new Date();
    const distance = fallIntoMeReleaseTime - now;

    if (distance <= 0) {
        if (fallCountdown) {
            fallCountdown.style.display = 'none';
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (countdownDays) {
        countdownDays.textContent = String(days).padStart(2, '0');
    }

    if (countdownHours) {
        countdownHours.textContent = String(hours).padStart(2, '0');
    }

    if (countdownMinutes) {
        countdownMinutes.textContent = String(minutes).padStart(2, '0');
    }

    if (countdownSeconds) {
        countdownSeconds.textContent = String(seconds).padStart(2, '0');
    }
}

updateFallCountdown();

const fallCountdownInterval = setInterval(updateFallCountdown, 1000);


const fallIntoMeLink = 'https://release.landr.com/991048944886';

let fallIntoMeReleased = false;

function unlockFallIntoMe() {
    if (fallIntoMeReleased || new Date() < fallIntoMeReleaseTime) {
        return;
    }

    fallIntoMeReleased = true;

    // Update the scrolling announcement bar
    const listenMarquee = document.querySelector('.listen-marquee');
    const listenGroups = document.querySelectorAll('.listen-group');

    if (listenMarquee) {
        listenMarquee.setAttribute(
            'aria-label',
            'Fall Into Me by KALN is out now'
        );
    }

    listenGroups.forEach((group, index) => {
        group.innerHTML = `
            <span>FALL INTO ME — OUT NOW</span><span>•</span>
            <span>STREAM EVERYWHERE</span><span>•</span>
            <span>KALN</span><span>•</span>
        `;

        if (index > 0) {
            group.setAttribute('aria-hidden', 'true');
        }
    });

    // Update the main hero button
    const heroListenButton = document.querySelector(
        '.hero-actions .button-light'
    );

    if (heroListenButton) {
        heroListenButton.textContent = 'Listen to Fall Into Me';
        heroListenButton.href = fallIntoMeLink;
    }

    // Change the Now Playing box to Fall Into Me
    const releaseFeature = document.querySelector('.release-feature');

    if (releaseFeature) {
        const cover = releaseFeature.querySelector('.release-art img');
        const kicker = releaseFeature.querySelector('.release-kicker');
        const title = releaseFeature.querySelector('.release-info h3');
        const description = releaseFeature.querySelector('.release-copy');
        const listenButton = releaseFeature.querySelector(
            '.release-actions .button-light'
        );
        const platformRow = releaseFeature.querySelector('.platform-row');

        if (cover) {
            cover.src = 'assets/images/fall-into-me-cover.png';
            cover.alt = 'Fall Into Me cover art by KALN';
        }

        if (kicker) {
            kicker.textContent = 'Single · 2026';
        }

        if (title) {
            title.textContent = 'Fall Into Me';
        }

        if (description) {
            description.textContent =
                'Let your guard down and fall into the feeling.';
        }

        if (listenButton) {
            listenButton.textContent = 'Listen Now';
            listenButton.href = fallIntoMeLink;
        }

        if (platformRow) {
            platformRow.innerHTML = `
                <a href="${fallIntoMeLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    Choose Streaming Platform
                </a>
            `;
        }
    }

    // Remove the Coming Soon section
    const comingSoonSection = document.querySelector('.next-section');

    if (comingSoonSection) {
        comingSoonSection.style.display = 'none';
    }

    // Unlock the complete Fall Into Me lyrics
    const fallIntoMeLyrics = document.getElementById('fall-into-me');

    if (fallIntoMeLyrics) {
        fallIntoMeLyrics.innerHTML = `
            <div class="lyrics-heading">
                <h3>Fall Into Me</h3>
                <span>2026</span>
            </div>

            <div class="lyrics-sequence">

                <section class="lyric-block">
                    <p class="lyric-label">Verse 1</p>
                    <p>
                        Slow motion on my skin<br>
                        You breathe and I give in<br>
                        You say this means nothing<br>
                        But your eyes say different
                    </p>

                    <p>
                        I’m drifting where you move<br>
                        Losing all my rules<br>
                        If you want me too<br>
                        I’ll fall right into you
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Chorus</p>
                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Verse 2</p>
                    <p>
                        Your touch is sinking in<br>
                        Soft like summer wind<br>
                        You pull me close again<br>
                        I feel you under my skin
                    </p>

                    <p>
                        I’m drifting where you move<br>
                        Falling into you<br>
                        If you want me too<br>
                        I’ll give all of me to you
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Chorus</p>
                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Bridge</p>
                    <p>
                        Let the night take over<br>
                        Let your walls fall lower<br>
                        If you lean, come closer<br>
                        I’ll hold you till it’s over
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Final Chorus</p>
                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>
                </section>

                <section class="lyric-block">
                    <p class="lyric-label">Outro</p>
                    <p>
                        Fall… fall into me<br>
                        Fall… endlessly
                    </p>
                </section>

            </div>
        `;
    }

    // Update the browser-tab description
    const descriptionTag = document.querySelector(
        'meta[name="description"]'
    );

    if (descriptionTag) {
        descriptionTag.content =
            'KALN — Fall Into Me is out now. Listen and read the complete lyrics.';
    }
}

// Check immediately whenever the website opens
unlockFallIntoMe();

// Keep checking for visitors who already have the page open
const fallIntoMeReleaseChecker = setInterval(() => {
    unlockFallIntoMe();

    if (fallIntoMeReleased) {
        clearInterval(fallIntoMeReleaseChecker);
    }
}, 30000);
