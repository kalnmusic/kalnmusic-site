// =========================================================
// KALN — MASTER SCRIPT
// =========================================================

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


// =========================================================
// FALL INTO ME
// =========================================================

const siteParams =
    new URLSearchParams(
        window.location.search
    );

const fallPreviewMode =
    siteParams.get("fallpreview") === "1";

const fallIntoMeReleaseTime =
    new Date("2026-09-18T11:00:00Z");

const fallIntoMeLink =
    "https://release.landr.com/991048944886";

let fallEraActivated = false;


// =========================================================
// COUNTDOWN
// =========================================================

function updateFallCountdown() {

    const countdown =
        $("#fall-countdown");

    if (!countdown) {
        return;
    }

    const distance =
        fallIntoMeReleaseTime -
        new Date();


    if (distance <= 0) {

        countdown.style.display =
            "none";

        return;
    }


    const days =
        Math.floor(
            distance /
            86400000
        );

    const hours =
        Math.floor(
            distance /
            3600000
        ) % 24;

    const minutes =
        Math.floor(
            distance /
            60000
        ) % 60;

    const seconds =
        Math.floor(
            distance /
            1000
        ) % 60;


    if ($("#countdown-days")) {
        $("#countdown-days").textContent =
            String(days).padStart(2,"0");
    }

    if ($("#countdown-hours")) {
        $("#countdown-hours").textContent =
            String(hours).padStart(2,"0");
    }

    if ($("#countdown-minutes")) {
        $("#countdown-minutes").textContent =
            String(minutes).padStart(2,"0");
    }

    if ($("#countdown-seconds")) {
        $("#countdown-seconds").textContent =
            String(seconds).padStart(2,"0");
    }

}


updateFallCountdown();

setInterval(
    updateFallCountdown,
    1000
);


// =========================================================
// FALL ERA ACTIVATION
// =========================================================

function activateFallIntoMeEra() {

    if (fallEraActivated) {
        return;
    }

    fallEraActivated = true;


    document.body.classList.add(
        "fall-era"
    );


    // MARQUEE

    $$(".listen-group").forEach(
        (group) => {

            group.innerHTML = `
                <span>FALL INTO ME — OUT NOW</span>
                <span>•</span>
                <span>STREAM EVERYWHERE</span>
                <span>•</span>
                <span>KALN</span>
                <span>•</span>
            `;

        }
    );


    // HERO

    const eyebrow =
        $(".hero-eyebrow");

    const tagline =
        $(".hero-tagline");

    const primary =
        $(".hero-primary");


    if (eyebrow) {
        eyebrow.textContent =
            "New Release";
    }

    if (tagline) {
        tagline.textContent =
            "Fall Into Me is out now.";
    }

    if (primary) {

        primary.textContent =
            "Listen to Fall Into Me";

        primary.href =
            fallIntoMeLink;

    }


    // NOW PLAYING

    const cover =
        $("#now-playing-cover");

    if (cover) {

        cover.src =
            "assets/images/fall-into-me-cover.png";

        cover.alt =
            "Fall Into Me cover art by KALN";

    }


    if ($("#now-playing-title")) {

        $("#now-playing-title").textContent =
            "Fall Into Me";

    }


    if ($("#now-playing-copy")) {

        $("#now-playing-copy").textContent =
            "A softer chapter, out now.";

    }


    if ($("#now-playing-link")) {

        $("#now-playing-link").href =
            fallIntoMeLink;

    }


    // HIDE COMING SOON

    const comingSoon =
        $(".next-section");

    if (comingSoon) {

        comingSoon.style.display =
            "none";

    }


    // DISCOGRAPHY

    const fallDiscography =
        $("#fall-into-me-discography");

    if (fallDiscography) {

        fallDiscography.hidden =
            false;

    }


    // LYRICS

    const lockedLyrics =
        $("#fall-lyrics-locked");

    const fullLyrics =
        $("#fall-full-lyrics");


    if (lockedLyrics) {
        lockedLyrics.hidden = true;
    }

    if (fullLyrics) {
        fullLyrics.hidden = false;
    }

}


// PREVIEW

if (fallPreviewMode) {
    activateFallIntoMeEra();
}


// ACTUAL RELEASE

function checkRelease() {

    if (
        !fallEraActivated &&
        new Date() >= fallIntoMeReleaseTime
    ) {

        activateFallIntoMeEra();

    }

}


checkRelease();

setInterval(
    checkRelease,
    30000
);


// =========================================================
// REVEALS
// =========================================================

const reveals =
    $$(".reveal");


if (
    reducedMotion ||
    !("IntersectionObserver" in window)
) {

    reveals.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

} else {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .14
            }
        );


    reveals.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}


// =========================================================
// CURSOR GLOW
// =========================================================

const cursorGlow =
    $(".cursor-glow");


if (
    cursorGlow &&
    !reducedMotion &&
    window.matchMedia(
        "(pointer:fine)"
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
// NORMAL HERO PARALLAX
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
                    .contains("fall-era")
            ) {

                heroBg.style.transform = "";

                return;
            }


            const shift =
                Math.min(
                    window.scrollY * .08,
                    55
                );


            heroBg.style.transform =
                `translate3d(0,${shift}px,0) scale(1.07)`;

        },
        {
            passive: true
        }
    );

}


// =========================================================
// TILT CARDS
// =========================================================

if (
    !reducedMotion &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    $$(".tilt-card").forEach(
        (card) => {

            const image =
                card.querySelector("img");

            if (!image) {
                return;
            }


            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

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


                    image.style.transform =
                        `
                        perspective(1100px)
                        rotateX(${(0.5-y)*6}deg)
                        rotateY(${(x-0.5)*6}deg)
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

const tabs =
    $$(".lyrics-tab");

const lyricPanels =
    $$(".lyrics-content");


tabs.forEach(
    (tab) => {

        tab.addEventListener(
            "click",
            () => {

                const song =
                    tab.dataset.song;


                tabs.forEach(
                    (button) => {

                        button.classList.toggle(
                            "active",
                            button === tab
                        );

                    }
                );


                lyricPanels.forEach(
                    (panel) => {

                        panel.classList.toggle(
                            "active",
                            panel.id === song
                        );

                    }
                );

            }
        );

    }
);


// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle =
    $(".menu-toggle");

const siteNav =
    $(".site-nav");


if (
    menuToggle &&
    siteNav
) {

    menuToggle.addEventListener(
        "click",
        () => {

            const open =
                siteNav.classList.toggle(
                    "open"
                );

            menuToggle.setAttribute(
                "aria-expanded",
                open
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
                    () => {

                        siteNav.classList.remove(
                            "open"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

}
