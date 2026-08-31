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
// RELEASE SETTINGS
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


    const now =
        new Date();

    const distance =
        fallIntoMeReleaseTime -
        now;


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
    // TOP LISTEN BAR
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
    // HERO COPY
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
    // REVEAL FALL INTO ME IN DISCOGRAPHY
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
// SKYWRITING
// =========================================================

let skywritingAnimationFrame =
    null;

let skywritingStarted =
    false;


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


    skywritingStarted =
        true;


    // =====================================================
    // REDUCED MOTION
    // =====================================================

    if (reducedMotion) {

        writingPath.style.opacity =
            ".94";

        writingHaze.style.opacity =
            ".40";

        tracingPlane.style.opacity =
            "0";

        return;

    }


    // =====================================================
    // GET SVG PATH LENGTH
    // =====================================================

    const pathLength =
        writingPath
            .getTotalLength();


    // Start completely hidden.

    writingPath.style.strokeDasharray =
        `${pathLength} ${pathLength}`;

    writingPath.style.strokeDashoffset =
        `${pathLength}`;


    writingHaze.style.strokeDasharray =
        `${pathLength} ${pathLength}`;

    writingHaze.style.strokeDashoffset =
        `${pathLength}`;


    writingPath.style.opacity =
        "0";

    writingHaze.style.opacity =
        "0";

    tracingPlane.style.opacity =
        "0";


    // =====================================================
    // TIMING
    //
    // 0–2 sec:
    // empty sky
    //
    // 2–11 sec:
    // plane writes the complete title
    //
    // 11–16 sec:
    // full title remains
    //
    // 16–19 sec:
    // title dissolves
    //
    // 19–21 sec:
    // empty sky
    // =====================================================

    const EMPTY_BEFORE =
        2000;

    const WRITE_TIME =
        9000;

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
    // PLANE POSITION
    // =====================================================

    function positionPlane(progress) {

        const safeProgress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        const distance =
            pathLength *
            safeProgress;


        const point =
            writingPath
                .getPointAtLength(
                    distance
                );


        const lookAheadDistance =
            Math.min(
                distance + 4,
                pathLength
            );


        const lookBehindDistance =
            Math.max(
                distance - 4,
                0
            );


        const nextPoint =
            writingPath
                .getPointAtLength(
                    lookAheadDistance
                );


        const previousPoint =
            writingPath
                .getPointAtLength(
                    lookBehindDistance
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
    // DRAW CLOUD TRAIL
    // =====================================================

    function drawWriting(progress) {

        const safeProgress =
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
                safeProgress
            );


        writingPath.style.strokeDashoffset =
            `${remaining}`;

        writingHaze.style.strokeDashoffset =
            `${remaining}`;

    }


    // =====================================================
    // RESET
    // =====================================================

    function resetWriting() {

        drawWriting(0);

        writingPath.style.opacity =
            "0";

        writingHaze.style.opacity =
            "0";

        tracingPlane.style.opacity =
            "0";

        positionPlane(0);

    }


    resetWriting();


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
        // PHASE 1
        // EMPTY SKY
        // =================================================

        if (
            elapsed <
            EMPTY_BEFORE
        ) {

            drawWriting(0);

            positionPlane(0);


            writingPath.style.opacity =
                "0";

            writingHaze.style.opacity =
                "0";

            tracingPlane.style.opacity =
                "0";

        }


        // =================================================
        // PHASE 2
        // PLANE WRITES
        // =================================================

        else if (
            elapsed <
            EMPTY_BEFORE +
            WRITE_TIME
        ) {

            const progress =
                (
                    elapsed -
                    EMPTY_BEFORE
                ) /
                WRITE_TIME;


            /*
                IMPORTANT:

                The cloud stroke and the plane use
                the same progress value.

                So the plane is literally the tip
                of the pen.

                Nothing ahead of the plane exists.
            */

            drawWriting(
                progress
            );


            positionPlane(
                progress
            );


            writingPath.style.opacity =
                ".94";

            writingHaze.style.opacity =
                ".44";


            // Smooth plane entrance.

            const planeEntrance =
                Math.min(
                    progress /
                    .025,
                    1
                );


            /*
                Smooth plane exit near the very end
                of the final e.
            */

            const planeExit =
                progress > .985
                    ? Math.max(
                        0,
                        (
                            1 -
                            progress
                        ) /
                        .015
                    )
                    : 1;


            tracingPlane.style.opacity =
                String(
                    planeEntrance *
                    planeExit
                );

        }


        // =================================================
        // PHASE 3
        // COMPLETE TITLE HOLDS
        // =================================================

        else if (
            elapsed <
            EMPTY_BEFORE +
            WRITE_TIME +
            HOLD_TIME
        ) {

            drawWriting(1);


            writingPath.style.opacity =
                ".94";

            writingHaze.style.opacity =
                ".44";

            tracingPlane.style.opacity =
                "0";

        }


        // =================================================
        // PHASE 4
        // CLOUD WRITING DISSOLVES
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


            const mainOpacity =
                .94 *
                (
                    1 -
                    fadeProgress
                );


            const hazeOpacity =
                .44 *
                (
                    1 -
                    fadeProgress
                );


            writingPath.style.opacity =
                String(
                    mainOpacity
                );

            writingHaze.style.opacity =
                String(
                    hazeOpacity
                );

            tracingPlane.style.opacity =
                "0";

        }


        // =================================================
        // PHASE 5
        // EMPTY SKY BEFORE RESTART
        // =================================================

        else {

            resetWriting();

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
// REVEAL EFFECTS
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

            element.classList.add(
                "visible"
            );

        }
    );

}

else {

    const revealObserver =
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
                            .add(
                                "visible"
                            );


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }
                );

            },

            {
                threshold: .12
            }

        );


    reveals.forEach(
        (element) => {

            revealObserver.observe(
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
// HERO PARALLAX
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
                Fall Into Me era uses its own
                animated sky, so disable the
                original hero image movement.
            */

            if (
                document.body
                    .classList
                    .contains(
                        "fall-era"
                    )
            ) {

                heroBg.style.transform =
                    "scale(1.04)";

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
                                .5 -
                                y
                            ) *
                            6;


                        const rotateY =
                            (
                                x -
                                .5
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

const lyricsTabs =
    $$(".lyrics-tab");

const lyricsPanels =
    $$(".lyrics-content");


lyricsTabs.forEach(
    (tab) => {

        tab.addEventListener(

            "click",

            () => {

                const selectedSong =
                    tab.dataset.song;


                lyricsTabs.forEach(
                    (button) => {

                        const isActive =
                            button === tab;


                        button.classList.toggle(
                            "active",
                            isActive
                        );


                        button.setAttribute(
                            "aria-selected",
                            isActive
                                ? "true"
                                : "false"
                        );

                    }
                );


                lyricsPanels.forEach(
                    (panel) => {

                        panel.classList.toggle(
                            "active",
                            panel.id ===
                            selectedSong
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


function closeMobileMenu() {

    if (
        !menuToggle ||
        !siteNav
    ) {

        return;

    }


    siteNav
        .classList
        .remove(
            "open"
        );


    menuToggle
        .setAttribute(
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

            const isOpen =
                siteNav
                    .classList
                    .toggle(
                        "open"
                    );


            menuToggle
                .setAttribute(
                    "aria-expanded",
                    isOpen
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
                    closeMobileMenu
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

                closeMobileMenu();

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
