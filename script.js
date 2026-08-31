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
// FALL INTO ME SETTINGS
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


    const dayElement =
        $("#countdown-days");

    const hourElement =
        $("#countdown-hours");

    const minuteElement =
        $("#countdown-minutes");

    const secondElement =
        $("#countdown-seconds");


    if (dayElement) {

        dayElement.textContent =
            String(days)
                .padStart(2,"0");

    }


    if (hourElement) {

        hourElement.textContent =
            String(hours)
                .padStart(2,"0");

    }


    if (minuteElement) {

        minuteElement.textContent =
            String(minutes)
                .padStart(2,"0");

    }


    if (secondElement) {

        secondElement.textContent =
            String(seconds)
                .padStart(2,"0");

    }

}


updateFallCountdown();

setInterval(
    updateFallCountdown,
    1000
);


// =========================================================
// ACTIVATE FALL INTO ME ERA
// =========================================================

function activateFallIntoMeEra() {

    if (fallEraActivated) {
        return;
    }


    fallEraActivated = true;


    document.body
        .classList
        .add("fall-era");


    // =====================================================
    // TOP MARQUEE
    // =====================================================

    $$(".listen-group")
        .forEach((group) => {

            group.innerHTML = `
                <span>FALL INTO ME — OUT NOW</span>
                <span>•</span>
                <span>STREAM EVERYWHERE</span>
                <span>•</span>
                <span>KALN</span>
                <span>•</span>
            `;

        });


    const marquee =
        $(".listen-marquee");


    if (marquee) {

        marquee.setAttribute(
            "aria-label",
            "Fall Into Me is out now"
        );

    }


    // =====================================================
    // HERO
    // =====================================================

    const heroEyebrow =
        $(".hero-eyebrow");

    const heroTagline =
        $(".hero-tagline");

    const heroPrimary =
        $(".hero-primary");


    if (heroEyebrow) {

        heroEyebrow.textContent =
            "New Single";

    }


    if (heroTagline) {

        heroTagline.textContent =
            "Fall Into Me is out now.";

    }


    if (heroPrimary) {

        heroPrimary.textContent =
            "Listen Now";

        heroPrimary.href =
            fallIntoMeLink;

    }


    // =====================================================
    // NOW PLAYING
    // =====================================================

    const nowPlayingCover =
        $("#now-playing-cover");

    const nowPlayingKicker =
        $("#now-playing-kicker");

    const nowPlayingTitle =
        $("#now-playing-title");

    const nowPlayingCopy =
        $("#now-playing-copy");

    const nowPlayingLink =
        $("#now-playing-link");


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

        nowPlayingLink.href =
            fallIntoMeLink;

        nowPlayingLink.textContent =
            "Listen Now";

    }


    // =====================================================
    // HIDE COMING SOON
    // =====================================================

    const comingSoon =
        $(".next-section");


    if (comingSoon) {

        comingSoon.style.display =
            "none";

    }


    // =====================================================
    // DISCOGRAPHY
    // =====================================================

    const fallDiscography =
        $("#fall-into-me-discography");


    if (fallDiscography) {

        fallDiscography.hidden =
            false;

    }


    // =====================================================
    // UNLOCK FALL INTO ME LYRICS
    // =====================================================

    const lockedLyrics =
        $("#fall-lyrics-locked");

    const fullLyrics =
        $("#fall-full-lyrics");


    if (lockedLyrics) {

        lockedLyrics.hidden =
            true;

    }


    if (fullLyrics) {

        fullLyrics.hidden =
            false;

    }


    // =====================================================
    // META DESCRIPTION
    // =====================================================

    const metaDescription =
        document.querySelector(
            'meta[name="description"]'
        );


    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            "KALN — Fall Into Me is out now. Listen, read the lyrics, and explore the official website."
        );

    }


    // =====================================================
    // START SKYWRITING
    // =====================================================

    startSkywriting();

}


// =========================================================
// PREVIEW MODE
// =========================================================

if (fallPreviewMode) {

    activateFallIntoMeEra();

}


// =========================================================
// ACTUAL RELEASE SWITCH
// =========================================================

function checkRelease() {

    if (fallEraActivated) {
        return;
    }


    if (
        new Date() >=
        fallIntoMeReleaseTime
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
// FALL INTO ME SKYWRITING
// =========================================================

let skywritingAnimationFrame = null;
let skywritingStarted = false;


function startSkywriting() {

    if (skywritingStarted) {
        return;
    }


    const writingPath =
        $("#fall-writing-path");

    const writingHaze =
        $("#fall-writing-haze");

    const tracingPlane =
        $("#tracing-plane");


    if (
        !writingPath ||
        !writingHaze ||
        !tracingPlane
    ) {

        return;

    }


    skywritingStarted = true;


    // =====================================================
    // REDUCED MOTION
    // =====================================================

    if (reducedMotion) {

        writingPath.style.strokeDasharray =
            "none";

        writingPath.style.strokeDashoffset =
            "0";

        writingPath.style.opacity =
            "0.94";


        writingHaze.style.strokeDasharray =
            "none";

        writingHaze.style.strokeDashoffset =
            "0";

        writingHaze.style.opacity =
            "0.45";


        tracingPlane.style.opacity =
            "0";

        return;

    }


    // =====================================================
    // PATH SETUP
    // =====================================================

    const pathLength =
        writingPath.getTotalLength();


    writingPath.style.strokeDasharray =
        `${pathLength}`;

    writingPath.style.strokeDashoffset =
        `${pathLength}`;


    writingHaze.style.strokeDasharray =
        `${pathLength}`;

    writingHaze.style.strokeDashoffset =
        `${pathLength}`;


    writingPath.style.opacity =
        "0";

    writingHaze.style.opacity =
        "0";

    tracingPlane.style.opacity =
        "0";


    // =====================================================
    // ANIMATION TIMING
    //
    // 0–2s   empty sky
    // 2–10s  plane writes title
    // 10–15s full title remains
    // 15–18s title dissolves
    // 18–20s empty sky
    // repeat
    // =====================================================

    const EMPTY_BEFORE =
        2000;

    const WRITE_TIME =
        8000;

    const HOLD_TIME =
        5000;

    const FADE_TIME =
        3000;

    const EMPTY_AFTER =
        2000;


    const CYCLE_TIME =
        EMPTY_BEFORE +
        WRITE_TIME +
        HOLD_TIME +
        FADE_TIME +
        EMPTY_AFTER;


    const cycleStart =
        performance.now();


    // =====================================================
    // EASING
    // =====================================================

    function smoothProgress(value) {

        return (
            value < 0.5
                ? 2 * value * value
                : 1 -
                  Math.pow(
                      -2 * value + 2,
                      2
                  ) / 2
        );

    }


    // =====================================================
    // POSITION PLANE
    // =====================================================

    function positionPlane(progress) {

        const clampedProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        const distance =
            pathLength *
            clampedProgress;


        const point =
            writingPath
                .getPointAtLength(
                    distance
                );


        const tangentDistance =
            Math.min(
                distance + 2,
                pathLength
            );


        const nextPoint =
            writingPath
                .getPointAtLength(
                    tangentDistance
                );


        const previousDistance =
            Math.max(
                distance - 2,
                0
            );


        const previousPoint =
            writingPath
                .getPointAtLength(
                    previousDistance
                );


        const angle =
            Math.atan2(
                nextPoint.y -
                previousPoint.y,

                nextPoint.x -
                previousPoint.x
            ) *
            180 /
            Math.PI;


        tracingPlane.setAttribute(
            "transform",
            `
            translate(
                ${point.x}
                ${point.y}
            )
            rotate(
                ${angle}
            )
            `
        );

    }


    // =====================================================
    // DRAW PATH
    // =====================================================

    function drawWriting(progress) {

        const clampedProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        const remaining =
            pathLength *
            (
                1 -
                clampedProgress
            );


        writingPath.style.strokeDashoffset =
            `${remaining}`;

        writingHaze.style.strokeDashoffset =
            `${remaining}`;

    }


    // =====================================================
    // RESET SKY
    // =====================================================

    function resetSkywriting() {

        writingPath.style.strokeDashoffset =
            `${pathLength}`;

        writingHaze.style.strokeDashoffset =
            `${pathLength}`;

        writingPath.style.opacity =
            "0";

        writingHaze.style.opacity =
            "0";

        tracingPlane.style.opacity =
            "0";

        positionPlane(0);

    }


    resetSkywriting();


    // =====================================================
    // ANIMATION LOOP
    // =====================================================

    function animateSkywriting(now) {

        const elapsed =
            (
                now -
                cycleStart
            ) %
            CYCLE_TIME;


        // =================================================
        // PHASE 1 — EMPTY SKY
        // =================================================

        if (
            elapsed <
            EMPTY_BEFORE
        ) {

            writingPath.style.opacity =
                "0";

            writingHaze.style.opacity =
                "0";

            tracingPlane.style.opacity =
                "0";


            drawWriting(0);

            positionPlane(0);

        }


        // =================================================
        // PHASE 2 — PLANE WRITES TITLE
        // =================================================

        else if (
            elapsed <
            EMPTY_BEFORE +
            WRITE_TIME
        ) {

            const rawProgress =
                (
                    elapsed -
                    EMPTY_BEFORE
                ) /
                WRITE_TIME;


            /*
                Keep movement almost linear.

                This is important because the plane
                should feel like it is physically
                handwriting the title rather than
                jumping between letters.
            */

            const progress =
                rawProgress;


            drawWriting(
                progress
            );


            positionPlane(
                progress
            );


            writingPath.style.opacity =
                "0.94";

            writingHaze.style.opacity =
                "0.50";


            /*
                Plane fades in right at the beginning
                of the writing pass.
            */

            const planeFade =
                Math.min(
                    rawProgress /
                    0.045,
                    1
                );


            tracingPlane.style.opacity =
                `${planeFade}`;

        }


        // =================================================
        // PHASE 3 — COMPLETED TITLE HOLDS
        // =================================================

        else if (
            elapsed <
            EMPTY_BEFORE +
            WRITE_TIME +
            HOLD_TIME
        ) {

            drawWriting(1);


            writingPath.style.opacity =
                "0.94";

            writingHaze.style.opacity =
                "0.48";


            /*
                The plane disappears after finishing
                the final stroke.
            */

            tracingPlane.style.opacity =
                "0";


            positionPlane(1);

        }


        // =================================================
        // PHASE 4 — CLOUD TITLE DISSOLVES
        // =================================================

        else if (
            elapsed <
            EMPTY_BEFORE +
            WRITE_TIME +
            HOLD_TIME +
            FADE_TIME
        ) {

            const fadeProgress =
                (
                    elapsed -
                    EMPTY_BEFORE -
                    WRITE_TIME -
                    HOLD_TIME
                ) /
                FADE_TIME;


            drawWriting(1);


            const writingOpacity =
                0.94 *
                (
                    1 -
                    fadeProgress
                );


            const hazeOpacity =
                0.48 *
                (
                    1 -
                    fadeProgress
                );


            writingPath.style.opacity =
                `${writingOpacity}`;

            writingHaze.style.opacity =
                `${hazeOpacity}`;

            tracingPlane.style.opacity =
                "0";

        }


        // =================================================
        // PHASE 5 — EMPTY SKY BEFORE REPEAT
        // =================================================

        else {

            writingPath.style.opacity =
                "0";

            writingHaze.style.opacity =
                "0";

            tracingPlane.style.opacity =
                "0";

            drawWriting(0);

            positionPlane(0);

        }


        skywritingAnimationFrame =
            requestAnimationFrame(
                animateSkywriting
            );

    }


    skywritingAnimationFrame =
        requestAnimationFrame(
            animateSkywriting
        );

}


// =========================================================
// REVEALS
// =========================================================

const reveals =
    $$(".reveal");


if (
    reducedMotion ||
    !(
        "IntersectionObserver"
        in window
    )
) {

    reveals.forEach(
        (element) => {

            element
                .classList
                .add("visible");

        }
    );

} else {

    const observer =
        new IntersectionObserver(
            (entries) => {

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

            /*
                Don't move the old hero image
                during Fall Into Me era.
            */

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
                    window.scrollY *
                    .08,

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
// TILT CARDS
// =========================================================

if (
    !reducedMotion &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    $$(".tilt-card")
        .forEach(
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


                        const rotateX =
                            (
                                0.5 -
                                y
                            ) *
                            6;


                        const rotateY =
                            (
                                x -
                                0.5
                            ) *
                            6;


                        image.style.transform =
                            `
                            perspective(
                                1100px
                            )
                            rotateX(
                                ${rotateX}deg
                            )
                            rotateY(
                                ${rotateY}deg
                            )
                            scale(
                                1.015
                            )
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

                        const active =
                            button === tab;


                        button.classList.toggle(
                            "active",
                            active
                        );


                        button.setAttribute(
                            "aria-selected",
                            active
                                ? "true"
                                : "false"
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
// MOBILE NAV
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

            const open =
                siteNav
                    .classList
                    .toggle("open");


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


// =========================================================
// CLEANUP
// =========================================================

window.addEventListener(
    "pagehide",
    () => {

        if (
            skywritingAnimationFrame
        ) {

            cancelAnimationFrame(
                skywritingAnimationFrame
            );

        }

    }
);
