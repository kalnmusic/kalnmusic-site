// =========================================================
// KALN — OFFICIAL WEBSITE
// MASTER SCRIPT.JS
// =========================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// =========================================================
// FALL INTO ME — PREVIEW + RELEASE SWITCH
// =========================================================

const siteParams = new URLSearchParams(window.location.search);
const fallPreviewMode = siteParams.get("fallpreview") === "1";

const fallIntoMeReleaseTime = new Date("2026-09-17T11:00:00Z");
const fallIntoMeLink = "https://release.landr.com/991048944886";

let fallEraActivated = false;
let skywritingStarted = false;

function activateFallIntoMeEra() {
    if (fallEraActivated) return;

    fallEraActivated = true;

    document.body.classList.add("fall-era");

    $$(".listen-group").forEach((group) => {
        group.innerHTML = `
            <span>FALL INTO ME — OUT NOW</span>
            <span>•</span>
            <span>STREAM EVERYWHERE</span>
            <span>•</span>
            <span>KALN</span>
            <span>•</span>
        `;
    });

    const heroEyebrow = $(".hero-eyebrow");
    const heroTagline = $(".hero-tagline");
    const heroPrimaryButton = $(".hero-primary");

    if (heroEyebrow) {
        heroEyebrow.textContent = "New Single";
    }

    if (heroTagline) {
        heroTagline.textContent = "Fall Into Me is out now.";
    }

    if (heroPrimaryButton) {
        heroPrimaryButton.textContent = "Listen Now";
        heroPrimaryButton.href = fallIntoMeLink;
    }

    const nowPlayingCover = $("#now-playing-cover");
    const nowPlayingKicker = $("#now-playing-kicker");
    const nowPlayingTitle = $("#now-playing-title");
    const nowPlayingCopy = $("#now-playing-copy");
    const nowPlayingLink = $("#now-playing-link");

    if (nowPlayingCover) {
        nowPlayingCover.src =
            "assets/images/fall-into-me-cover.png";

        nowPlayingCover.alt =
            "Fall Into Me cover art by KALN";
    }

    if (nowPlayingKicker) {
        nowPlayingKicker.textContent =
            "Single · 2026";
    }

    if (nowPlayingTitle) {
        nowPlayingTitle.textContent =
            "Fall Into Me";
    }

    if (nowPlayingCopy) {
        nowPlayingCopy.textContent =
            "A softer chapter, out now.";
    }

    if (nowPlayingLink) {
        nowPlayingLink.textContent =
            "Listen Now";

        nowPlayingLink.href =
            fallIntoMeLink;
    }

    const nextSection =
        $(".next-section");

    if (nextSection) {
        nextSection.hidden = true;
    }

    const fallDiscographyCard =
        $("#fall-into-me-discography");

    if (fallDiscographyCard) {
        fallDiscographyCard.hidden = false;
    }

    const metaDescription =
        $('meta[name="description"]');

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            "KALN — Fall Into Me is out now. Listen and explore the official website."
        );
    }

    startSkywriting();
}

function checkFallRelease() {
    const released =
        new Date() >= fallIntoMeReleaseTime;

    if (
        fallPreviewMode ||
        released
    ) {
        activateFallIntoMeEra();
    }
}

checkFallRelease();

setInterval(
    checkFallRelease,
    30000
);

// =========================================================
// COUNTDOWN
// =========================================================

const countdownDays =
    $("#countdown-days");

const countdownHours =
    $("#countdown-hours");

const countdownMinutes =
    $("#countdown-minutes");

const countdownSeconds =
    $("#countdown-seconds");

const fallCountdown =
    $("#fall-countdown");

function updateFallCountdown() {
    const distance =
        fallIntoMeReleaseTime - new Date();

    if (distance <= 0) {
        if (fallCountdown) {
            fallCountdown.hidden = true;
        }

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                distance /
                (1000 * 60 * 60)
            ) % 24
        );

    const minutes =
        Math.floor(
            (
                distance /
                (1000 * 60)
            ) % 60
        );

    const seconds =
        Math.floor(
            (
                distance /
                1000
            ) % 60
        );

    if (countdownDays) {
        countdownDays.textContent =
            String(days).padStart(2, "0");
    }

    if (countdownHours) {
        countdownHours.textContent =
            String(hours).padStart(2, "0");
    }

    if (countdownMinutes) {
        countdownMinutes.textContent =
            String(minutes).padStart(2, "0");
    }

    if (countdownSeconds) {
        countdownSeconds.textContent =
            String(seconds).padStart(2, "0");
    }
}

updateFallCountdown();

setInterval(
    updateFallCountdown,
    1000
);

// =========================================================
// SKYWRITING — PLANE IS THE PEN TIP
// =========================================================

function startSkywriting() {
    if (skywritingStarted) return;

    const path =
        $("#skywritingPath");

    const plane =
        $("#skyPlane");

    if (
        !path ||
        !plane
    ) {
        return;
    }

    skywritingStarted = true;

    const length =
        path.getTotalLength();

    path.style.strokeDasharray =
        `${length}`;

    path.style.strokeDashoffset =
        `${length}`;

    if (reducedMotion) {
        path.style.strokeDashoffset =
            "0";

        const end =
            path.getPointAtLength(length);

        plane.setAttribute(
            "transform",
            `translate(${end.x} ${end.y})`
        );

        return;
    }

    const duration =
        14500;

    const start =
        performance.now();

    function frame(now) {
        const progress =
            Math.min(
                (now - start) / duration,
                1
            );

        const eased =
            1 -
            Math.pow(
                1 - progress,
                2.2
            );

        const travelled =
            length * eased;

        path.style.strokeDashoffset =
            `${length - travelled}`;

        const point =
            path.getPointAtLength(
                travelled
            );

        const ahead =
            path.getPointAtLength(
                Math.min(
                    travelled + 2,
                    length
                )
            );

        const angle =
            Math.atan2(
                ahead.y - point.y,
                ahead.x - point.x
            ) *
            180 /
            Math.PI;

        plane.setAttribute(
            "transform",
            `
            translate(${point.x} ${point.y})
            rotate(${angle})
            scale(.78)
            `
        );

        if (progress < 1) {
            requestAnimationFrame(
                frame
            );
        }
    }

    requestAnimationFrame(frame);
}

// =========================================================
// REVEAL ANIMATIONS
// =========================================================

const revealElements =
    $$(".reveal");

if (
    reducedMotion ||
    !("IntersectionObserver" in window)
) {
    revealElements.forEach(
        (element) => {
            element.classList.add(
                "visible"
            );
        }
    );
} else {
    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(
                    (entry) => {
                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target
                            .classList
                            .add("visible");

                        observer.unobserve(
                            entry.target
                        );
                    }
                );
            },
            {
                threshold: 0.14
            }
        );

    revealElements.forEach(
        (element) => {
            revealObserver.observe(
                element
            );
        }
    );
}

// =========================================================
// CURSOR GLOW — DESKTOP ONLY
// =========================================================

const cursorGlow =
    $(".cursor-glow");

if (
    cursorGlow &&
    !reducedMotion &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {
    window.addEventListener(
        "pointermove",
        (event) => {
            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;
        }
    );
}

// =========================================================
// HERO PARALLAX — NORMAL ERA ONLY
// =========================================================

const heroBg =
    $(".hero-bg");

if (
    heroBg &&
    !reducedMotion
) {
    window.addEventListener(
        "scroll",
        () => {
            if (
                document.body
                    .classList
                    .contains(
                        "fall-era"
                    )
            ) {
                heroBg.style.transform =
                    "";

                return;
            }

            const shift =
                Math.min(
                    window.scrollY * 0.08,
                    55
                );

            heroBg.style.transform =
                `
                translate3d(
                    0,
                    ${shift}px,
                    0
                )
                scale(1.07)
                `;
        },
        {
            passive: true
        }
    );
}

// =========================================================
// TILT CARDS — DESKTOP ONLY
// =========================================================

const tiltCards =
    $$(".tilt-card");

if (
    !reducedMotion &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {
    tiltCards.forEach(
        (card) => {
            const image =
                card.querySelector(
                    "img"
                );

            if (!image) {
                return;
            }

            card.addEventListener(
                "mousemove",
                (event) => {
                    const rect =
                        card
                            .getBoundingClientRect();

                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width;

                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height;

                    const rotateY =
                        (x - 0.5) * 6;

                    const rotateX =
                        (0.5 - y) * 6;

                    image.style.transform =
                        `
                        perspective(1100px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(1.015)
                        `;
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    image.style.transform =
                        "";
                }
            );
        }
    );
}

// =========================================================
// LYRICS TABS
// =========================================================

const lyricsTabs =
    $$(".lyrics-tab");

const lyricsContents =
    $$(".lyrics-content");

lyricsTabs.forEach(
    (tab) => {
        tab.addEventListener(
            "click",
            () => {
                const songId =
                    tab.dataset.song;

                lyricsTabs.forEach(
                    (button) => {
                        const active =
                            button === tab;

                        button
                            .classList
                            .toggle(
                                "active",
                                active
                            );

                        button
                            .setAttribute(
                                "aria-selected",
                                active
                                    ? "true"
                                    : "false"
                            );
                    }
                );

                lyricsContents.forEach(
                    (content) => {
                        content
                            .classList
                            .toggle(
                                "active",
                                content.id ===
                                    songId
                            );
                    }
                );
            }
        );
    }
);

// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle =
    $(".menu-toggle");

const siteNav =
    $(".site-nav");

function closeMenu() {
    if (
        !menuToggle ||
        !siteNav
    ) {
        return;
    }

    siteNav.classList.remove(
        "open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}

if (
    menuToggle &&
    siteNav
) {
    menuToggle.addEventListener(
        "click",
        () => {
            const menuOpen =
                siteNav
                    .classList
                    .toggle(
                        "open"
                    );

            menuToggle.setAttribute(
                "aria-expanded",
                menuOpen
                    ? "true"
                    : "false"
            );
        }
    );

    siteNav
        .querySelectorAll("a")
        .forEach(
            (link) => {
                link.addEventListener(
                    "click",
                    closeMenu
                );
            }
        );

    window.addEventListener(
        "resize",
        () => {
            if (
                window.innerWidth >
                850
            ) {
                closeMenu();
            }
        }
    );
}
