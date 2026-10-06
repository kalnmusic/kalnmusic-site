:root {
    --bg: #080808;
    --panel: #101010;
    --panel-2: #151515;
    --ink: #f2eee7;
    --muted: #aaa39a;
    --gold: #b58750;
    --line: rgba(255,255,255,.10);
    --max: 1240px;
}

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    background: var(--bg);
}

body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow-x: hidden;
}

body.lyrics-open {
    overflow: hidden;
}

img {
    display: block;
    width: 100%;
}

a {
    color: inherit;
}

button {
    font: inherit;
}

::selection {
    background: var(--ink);
    color: #111;
}


/* =========================================================
   ACCESSIBILITY
========================================================= */

.skip-link {
    position: fixed;
    left: 14px;
    top: -60px;
    z-index: 99999;

    background: #fff;
    color: #000;

    padding: 10px 14px;

    text-decoration: none;
}

.skip-link:focus {
    top: 14px;
}


/* =========================================================
   TEXTURE
========================================================= */

.noise {
    position: fixed;
    inset: 0;

    z-index: 9998;

    pointer-events: none;

    opacity: .035;

    background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.85'/%3E%3C/svg%3E");

    mix-blend-mode: screen;
}

.cursor-glow {
    position: fixed;

    width: 420px;
    height: 420px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(181,135,80,.10),
            transparent 65%
        );

    pointer-events: none;

    z-index: 1;

    transform: translate(-50%, -50%);
}


/* =========================================================
   LISTEN BAR
========================================================= */

.listen-bar {
    position: fixed;

    inset: 0 0 auto 0;

    z-index: 1000;

    height: 36px;

    overflow: hidden;

    border-bottom: 1px solid var(--line);

    background: rgba(8,8,8,.95);

    backdrop-filter: blur(14px);
}

.listen-marquee {
    display: flex;
    align-items: center;

    height: 100%;

    text-decoration: none;

    overflow: hidden;
}

.listen-track {
    display: flex;

    width: max-content;

    text-transform: uppercase;

    letter-spacing: .22em;
    font-size: .6rem;

    animation: marquee 24s linear infinite;
}

.listen-group {
    min-width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 28px;

    padding: 0 28px;
}

.listen-group span:nth-child(even) {
    color: var(--gold);
}

@keyframes marquee {
    to {
        transform: translateX(-50%);
    }
}


/* =========================================================
   HEADER
========================================================= */

.site-header {
    position: fixed;

    top: 36px;
    left: 0;
    right: 0;

    z-index: 900;

    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 6vw;

    background:
        linear-gradient(
            to bottom,
            rgba(8,8,8,.82),
            transparent
        );
}

.brand {
    text-decoration: none;

    font-family: Georgia, serif;

    letter-spacing: .38em;
    font-size: .95rem;
}

.site-nav {
    display: flex;

    gap: 32px;
}

.site-nav a {
    color: rgba(242,238,231,.74);

    text-decoration: none;
    text-transform: uppercase;

    letter-spacing: .17em;
    font-size: .64rem;

    transition: color .2s ease;
}

.site-nav a:hover {
    color: var(--ink);
}

.menu-toggle {
    display: none;

    width: 38px;
    height: 38px;

    padding: 0;

    border: 0;

    background: none;
    color: var(--ink);
}

.menu-toggle span {
    display: block;

    width: 24px;
    height: 1px;

    margin: 6px auto;

    background: currentColor;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    position: relative;

    min-height: 100svh;

    display: grid;
    place-items: center;

    overflow: hidden;

    background: var(--bg);
}

.hero-bg {
    position: absolute;

    inset: -4%;

    background:
        url("assets/images/kaln-youtube-banner.png")
        center / cover
        no-repeat;

    transform: scale(1.04);

    will-change: transform;

    filter:
        saturate(.78)
        contrast(1.08);
}

.hero-shade {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(0,0,0,.28) 0%,
            rgba(0,0,0,.38) 55%,
            #080808 100%
        ),
        radial-gradient(
            circle at 50% 45%,
            rgba(181,135,80,.11),
            transparent 36%
        );
}

.hero-copy {
    position: relative;

    z-index: 2;

    width: min(980px, 100%);

    padding:
        140px
        24px
        100px;

    text-align: center;
}

.hero h1 {
    margin: 0;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:
        clamp(
            5rem,
            16vw,
            12.5rem
        );

    font-weight: 400;

    letter-spacing: .05em;
    line-height: .82;

    text-shadow:
        0 18px 60px
        rgba(0,0,0,.35);
}

.eyebrow {
    margin:
        0
        0
        18px;

    color: var(--gold);

    text-transform: uppercase;

    letter-spacing: .33em;
    font-size: .64rem;
}

.hero-tagline {
    margin:
        34px
        auto
        36px;

    max-width: 700px;

    font-family: Georgia, serif;

    font-size:
        clamp(
            1rem,
            2vw,
            1.45rem
        );

    color:
        rgba(
            242,
            238,
            231,
            .88
        );
}

.hero-actions {
    display: flex;
    justify-content: center;

    flex-wrap: wrap;

    gap: 12px;
}

.hero-stamp {
    position: absolute;

    z-index: 2;

    left: 6vw;
    bottom: 32px;

    color:
        rgba(
            242,
            238,
            231,
            .42
        );

    font-size: .56rem;
    letter-spacing: .22em;
}

.scroll-indicator {
    position: absolute;

    z-index: 2;

    right: 6vw;
    bottom: 27px;

    display: flex;
    align-items: center;

    gap: 12px;

    color:
        rgba(
            242,
            238,
            231,
            .45
        );

    text-transform: uppercase;
    text-decoration: none;

    letter-spacing: .2em;
    font-size: .56rem;
}

.scroll-indicator i {
    width: 48px;
    height: 1px;

    background: currentColor;
}


/* =========================================================
   BUTTONS
========================================================= */

.button {
    min-height: 48px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 22px;

    border:
        1px
        solid
        transparent;

    text-decoration: none;
    text-transform: uppercase;

    letter-spacing: .15em;
    font-size: .62rem;

    cursor: pointer;

    transition: .2s ease;
}

.button-light {
    color: #0b0b0b;

    background: var(--ink);
}

.button-light:hover {
    background: #fff;

    transform:
        translateY(-2px);
}

.button-outline {
    color: var(--ink);

    border-color:
        rgba(
            255,
            255,
            255,
            .32
        );

    background:
        rgba(
            0,
            0,
            0,
            .10
        );
}

.button-outline:hover {
    border-color: var(--ink);

    background:
        rgba(
            255,
            255,
            255,
            .05
        );
}


/* =========================================================
   GENERAL SECTIONS
========================================================= */

.section {
    padding:
        130px
        6vw;
}

.section-heading {
    width:
        min(
            var(--max),
            100%
        );

    margin:
        0
        auto
        64px;
}

.section-heading h2,
.about-copy h2,
.world-copy h2,
.connect-inner h2 {
    margin: 0;

    font-family: Georgia, serif;

    font-weight: 400;
    line-height: 1.02;
}

.section-heading h2 {
    font-size:
        clamp(
            3rem,
            7vw,
            6.2rem
        );
}

.section-intro {
    max-width: 500px;

    margin:
        22px
        0
        0;

    color: var(--muted);

    font-size: 1.05rem;
    line-height: 1.7;
}


/* =========================================================
   MUSIC
========================================================= */

.music-section {
    background:
        linear-gradient(
            180deg,
            #080808,
            #0c0c0c
        );
}

.release-feature {
    width:
        min(
            var(--max),
            100%
        );

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        minmax(280px, .9fr)
        1.1fr;

    align-items: center;

    gap:
        clamp(
            50px,
            8vw,
            120px
        );
}

.release-art {
    position: relative;

    overflow: hidden;

    background: #111;

    aspect-ratio: 1;

    box-shadow:
        0 30px 100px
        rgba(0,0,0,.45);
}

.release-art img {
    height: 100%;

    object-fit: cover;

    transition:
        transform
        .2s
        ease;
}

.release-year {
    position: absolute;

    right: 18px;
    bottom: 15px;

    padding: 7px 9px;

    background:
        rgba(
            0,
            0,
            0,
            .75
        );

    backdrop-filter: blur(8px);

    font-size: .55rem;
    letter-spacing: .2em;
}

.release-kicker {
    margin:
        0
        0
        16px;

    color: var(--gold);

    text-transform: uppercase;

    letter-spacing: .25em;
    font-size: .62rem;
}

.release-info h3 {
    margin: 0;

    font-family: Georgia, serif;

    font-size:
        clamp(
            3.7rem,
            8vw,
            8rem
        );

    font-weight: 400;
    line-height: .92;
}

.release-copy {
    max-width: 560px;

    margin:
        28px
        0;

    color: var(--muted);

    font-size: 1.05rem;
    line-height: 1.75;
}

.release-actions {
    display: flex;
    align-items: center;

    flex-wrap: wrap;

    gap: 24px;
}

.text-link {
    padding: 8px 0;

    border: 0;

    border-bottom:
        1px
        solid
        rgba(
            255,
            255,
            255,
            .28
        );

    background: none;

    color: var(--ink);

    cursor: pointer;

    text-transform: uppercase;
    text-decoration: none;

    letter-spacing: .14em;
    font-size: .62rem;
}

.text-link span {
    color: var(--gold);

    margin-left: 8px;
}

.platform-row {
    display: flex;

    flex-wrap: wrap;

    gap: 24px;

    margin-top: 36px;
}

.platform-row a {
    color: var(--muted);

    text-decoration: none;
    text-transform: uppercase;

    letter-spacing: .13em;
    font-size: .6rem;
}

.platform-row a:hover {
    color: var(--ink);
}


/* =========================================================
   KALN WORLD
========================================================= */

.world-section {
    padding:
        130px
        6vw;

    border-top:
        1px
        solid
        var(--line);

    border-bottom:
        1px
        solid
        var(--line);

    background: #0d0d0d;
}

.world-copy {
    width:
        min(
            var(--max),
            100%
        );

    margin:
        0
        auto
        70px;

    display: grid;

    grid-template-columns:
        .55fr
        1.45fr;

    gap: 40px;

    align-items: end;
}

.world-copy h2 {
    max-width: 900px;

    font-size:
        clamp(
            2.8rem,
            6vw,
            5.8rem
        );
}

.world-grid {
    width:
        min(
            var(--max),
            100%
        );

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(
            3,
            1fr
        );

    border-top:
        1px
        solid
        var(--line);
}

.world-card {
    min-height: 310px;

    padding: 34px;

    border-right:
        1px
        solid
        var(--line);
}

.world-card:last-child {
    border-right: 0;
}

.world-number {
    color: var(--gold);

    font-size: .58rem;
    letter-spacing: .2em;
}

.world-card h3 {
    margin:
        72px
        0
        18px;

    font-family: Georgia, serif;

    font-size: 2rem;
    font-weight: 400;
}

.world-card p {
    max-width: 320px;

    margin: 0;

    color: var(--muted);

    line-height: 1.7;
}


/* =========================================================
   ABOUT
========================================================= */

.about-section {
    background: #090909;
}

.about-grid {
    width:
        min(
            var(--max),
            100%
        );

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        .85fr
        1.15fr;

    gap:
        clamp(
            55px,
            8vw,
            120px
        );

    align-items: center;
}

.about-photo-wrap {
    position: relative;

    min-height: 620px;

    overflow: hidden;

    background: #101010;
}

.about-photo-wrap img {
    width: 100%;
    height: 100%;

    min-height: 620px;

    object-fit: cover;

    filter:
        saturate(.72)
        contrast(1.05);
}

.photo-caption {
    position: absolute;

    left: 20px;
    bottom: 18px;

    padding: 7px 9px;

    background:
        rgba(
            8,
            8,
            8,
            .72
        );

    font-size: .55rem;
    letter-spacing: .18em;
}

.about-copy h2 {
    max-width: 760px;

    font-size:
        clamp(
            2.8rem,
            5.5vw,
            5.6rem
        );
}

.about-lead {
    margin:
        32px
        0
        18px;

    color:
        var(--ink)
        !important;

    font-size:
        1.25rem
        !important;
}

.about-copy > p:not(.eyebrow):not(.photo-note) {
    max-width: 680px;

    color: var(--muted);

    font-size: 1.03rem;
    line-height: 1.78;
}

.photo-note {
    margin-top: 34px;

    color: var(--gold);

    text-transform: uppercase;

    letter-spacing: .18em;
    font-size: .56rem;
}


/* =========================================================
   CONNECT
========================================================= */

.connect-section {
    padding:
        135px
        6vw;

    background: var(--ink);

    color: #0a0a0a;
}

.connect-inner {
    width:
        min(
            var(--max),
            100%
        );

    margin: 0 auto;
}

.connect-inner .eyebrow {
    color: #7b5b39;
}

.connect-inner h2 {
    max-width: 900px;

    font-size:
        clamp(
            3.4rem,
            8vw,
            7.5rem
        );
}

.connect-copy {
    max-width: 580px;

    margin:
        24px
        0
        55px;

    color: #5a554e;

    font-size: 1.05rem;
    line-height: 1.7;
}

.social-grid {
    display: grid;

    grid-template-columns:
        repeat(
            2,
            1fr
        );

    border-top:
        1px
        solid
        rgba(
            0,
            0,
            0,
            .18
        );
}

.social-grid a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 92px;

    padding:
        0
        20px;

    border-bottom:
        1px
        solid
        rgba(
            0,
            0,
            0,
            .18
        );

    text-decoration: none;
    text-transform: uppercase;

    letter-spacing: .15em;
    font-size: .67rem;
}

.social-grid a:nth-child(odd) {
    border-right:
        1px
        solid
        rgba(
            0,
            0,
            0,
            .18
        );
}

.social-grid a:hover {
    background:
        rgba(
            0,
            0,
            0,
            .045
        );
}

.social-grid b {
    font-size: 1rem;
    font-weight: 400;
}

.contact {
    margin:
        38px
        0
        0;

    color: #5a554e;

    font-size: .8rem;
}

.contact a {
    color: #111;
}


/* =========================================================
   FOOTER
========================================================= */

.site-footer {
    min-height: 310px;

    display: grid;
    place-items: center;
    align-content: center;

    gap: 18px;

    padding:
        50px
        24px;

    border-top:
        1px
        solid
        var(--line);

    background: #080808;

    text-align: center;
}

.footer-wordmark {
    font-family: Georgia, serif;

    font-size:
        clamp(
            4rem,
            12vw,
            10rem
        );

    letter-spacing: .08em;
    line-height: .8;
}

.site-footer p {
    margin: 0;

    color: var(--muted);

    text-transform: uppercase;

    letter-spacing: .18em;
    font-size: .54rem;
}


/* =========================================================
   LYRICS DRAWER
========================================================= */

.lyrics-drawer {
    position: fixed;

    inset: 0;

    z-index: 10000;

    pointer-events: none;

    visibility: hidden;
}

.lyrics-drawer.open {
    pointer-events: auto;

    visibility: visible;
}

.lyrics-backdrop {
    position: absolute;

    inset: 0;

    background:
        rgba(
            0,
            0,
            0,
            .72
        );

    opacity: 0;

    transition:
        opacity
        .25s
        ease;
}

.lyrics-drawer.open .lyrics-backdrop {
    opacity: 1;
}

.lyrics-sheet {
    position: absolute;

    top: 0;
    right: 0;

    width:
        min(
            720px,
            94vw
        );

    height: 100%;

    overflow-y: auto;

    background: #0d0d0d;

    border-left:
        1px
        solid
        var(--line);

    transform:
        translateX(100%);

    transition:
        transform
        .32s
        cubic-bezier(.2,.8,.2,1);
}

.lyrics-drawer.open .lyrics-sheet {
    transform:
        translateX(0);
}

.lyrics-toolbar {
    position: sticky;

    top: 0;

    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding:
        34px
        38px
        28px;

    border-bottom:
        1px
        solid
        var(--line);

    background:
        rgba(
            13,
            13,
            13,
            .95
        );

    backdrop-filter:
        blur(14px);
}

.lyrics-toolbar h2 {
    margin: 0;

    font-family: Georgia, serif;

    font-size: 2.7rem;
    font-weight: 400;
}

.lyrics-close {
    width: 44px;
    height: 44px;

    border:
        1px
        solid
        var(--line);

    border-radius: 50%;

    background: none;

    color: var(--ink);

    font-size: 1.7rem;
    line-height: 1;

    cursor: pointer;
}

.lyrics-body {
    padding:
        42px
        38px
        90px;
}

.lyrics-body section {
    padding:
        0
        0
        36px;

    margin:
        0
        0
        36px;

    border-bottom:
        1px
        solid
        var(--line);
}

.lyrics-body section:last-child {
    border-bottom: 0;
}

.lyric-label {
    margin:
        0
        0
        14px
        !important;

    color:
        var(--gold)
        !important;

    text-transform: uppercase;

    letter-spacing: .23em;

    font-size:
        .57rem
        !important;
}

.lyrics-body p {
    margin:
        0
        0
        20px;

    color:
        rgba(
            242,
            238,
            231,
            .86
        );

    font-family: Georgia, serif;

    font-size: 1.08rem;
    line-height: 1.85;
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.reveal {
    opacity: 0;

    transform:
        translateY(24px);

    transition:
        opacity
        .7s
        ease,
        transform
        .7s
        ease;
}

.reveal.visible {
    opacity: 1;

    transform: none;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

    .menu-toggle {
        display: block;
    }

    .site-nav {
        position: absolute;

        top: 64px;
        left: 18px;
        right: 18px;

        display: none;
        flex-direction: column;

        gap: 0;

        padding: 10px;

        background:
            rgba(
                8,
                8,
                8,
                .97
            );

        border:
            1px
            solid
            var(--line);

        backdrop-filter:
            blur(16px);
    }

    .site-nav.open {
        display: flex;
    }

    .site-nav a {
        padding:
            18px
            14px;

        border-bottom:
            1px
            solid
            var(--line);
    }

    .site-nav a:last-child {
        border-bottom: 0;
    }

    .release-feature,
    .about-grid {
        grid-template-columns: 1fr;
    }

    .release-art {
        width:
            min(
                620px,
                100%
            );
    }

    .world-copy {
        grid-template-columns: 1fr;
    }

    .world-grid {
        grid-template-columns: 1fr;
    }

    .world-card {
        min-height: 230px;

        border-right: 0;

        border-bottom:
            1px
            solid
            var(--line);
    }

    .world-card:last-child {
        border-bottom: 0;
    }

    .world-card h3 {
        margin-top: 48px;
    }

    .about-photo-wrap,
    .about-photo-wrap img {
        min-height: 520px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 620px) {

    .cursor-glow {
        display: none;
    }

    .site-header {
        padding:
            0
            20px;
    }

    .listen-group {
        min-width: 165vw;
    }

    .hero h1 {
        font-size:
            clamp(
                4.5rem,
                27vw,
                7.8rem
            );
    }

    .hero-copy {
        padding-left: 20px;
        padding-right: 20px;
    }

    .hero-actions {
        width:
            min(
                340px,
                100%
            );

        margin: auto;

        flex-direction: column;
    }

    .hero-actions .button {
        width: 100%;
    }

    .hero-stamp {
        display: none;
    }

    .scroll-indicator {
        right: 20px;
    }

    .section,
    .world-section,
    .connect-section {
        padding:
            95px
            20px;
    }

    .section-heading {
        margin-bottom: 44px;
    }

    .release-feature {
        gap: 42px;
    }

    .release-info h3 {
        font-size:
            clamp(
                3.4rem,
                18vw,
                5rem
            );
    }

    .release-actions {
        align-items: flex-start;

        flex-direction: column;
    }

    .world-card {
        padding:
            28px
            4px;
    }

    .about-photo-wrap,
    .about-photo-wrap img {
        min-height: 430px;
    }

    .social-grid {
        grid-template-columns: 1fr;
    }

    .social-grid a:nth-child(odd) {
        border-right: 0;
    }

    .lyrics-toolbar,
    .lyrics-body {
        padding-left: 24px;
        padding-right: 24px;
    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation:
            none
            !important;

        transition:
            none
            !important;

        scroll-behavior:
            auto
            !important;
    }

    .reveal {
        opacity: 1;

        transform: none;
    }

}
