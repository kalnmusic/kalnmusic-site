// =========================================================
// KALN — OFFICIAL WEBSITE
// MASTER SCRIPT.JS
// =========================================================

const $ =
    (selector) =>
        document.querySelector(selector);

const $$ =
    (selector) =>
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
    new Date(
        "2026-09-17T11:00:00Z"
    );


const fallIntoMeLink =
    "https://release.landr.com/991048944886";


const spotifyArtistLink =
    "https://open.spotify.com/artist/1I97Z1wZc37Bp7zMpgpxWk";


let fallEraActivated =
    false;


// =========================================================
// ACTIVATE FALL ERA
// =========================================================

function activateFallIntoMeEra() {

    if (fallEraActivated) {
        return;
    }


    fallEraActivated =
        true;


    document.body
        .classList
        .add(
            "fall-era"
        );


    // MARQUEE

    $$(".listen-group")
        .forEach(
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


    // NOW PLAYING

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

    const nowPlayingPlatforms =
        $("#now-playing-platforms");


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


    if (nowPlayingPlatforms) {

        nowPlayingPlatforms.innerHTML = `

            <a
                href="${fallIntoMeLink}"
                target="_blank"
                rel="noopener noreferrer"
            >
                All Platforms
            </a>

            <a
                href="${spotifyArtistLink}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Spotify
            </a>

        `;

    }


    // HIDE COMING SOON

    const nextSection =
        $(".next-section");


    if (nextSection) {
        nextSection.hidden =
            true;
    }


    // DISCOGRAPHY — FALL FIRST

    const discographyGrid =
        $("#discography-grid");

    const fallDiscography =
        $("#fall-into-me-discography");

    const lostDiscography =
        $("#lost-count-discography");


    if (fallDiscography) {
        fallDiscography.hidden =
            false;
    }


    if (
        discographyGrid &&
        fallDiscography &&
        lostDiscography
    ) {

        discographyGrid.insertBefore(
            fallDiscography,
            lostDiscography
        );

    }


    // LYRICS — UNLOCK FALL

    const fallLyricsLocked =
        $("#fall-lyrics-locked");

    const fallFullLyrics =
        $("#fall-full-lyrics");


    if (fallLyricsLocked) {
        fallLyricsLocked.hidden =
            true;
    }


    if (fallFullLyrics) {
        fallFullLyrics.hidden =
            false;
    }


    // LYRICS — FALL TAB FIRST

    const lyricsTabs =
        $("#lyrics-tabs");

    const fallTab =
        $(
            '.lyrics-tab[data-song="fall-into-me"]'
        );

    const lostTab =
        $(
            '.lyrics-tab[data-song="lost-count"]'
        );


    if (
        lyricsTabs &&
        fallTab &&
        lostTab
    ) {

        lyricsTabs.insertBefore(
            fallTab,
            lostTab
        );

    }


    // LYRICS — FALL CONTENT FIRST

    const fallLyricsContent =
        $("#fall-into-me");

    const lostLyricsContent =
        $("#lost-count");


    if (
        fallLyricsContent &&
        lostLyricsContent &&
        fallLyricsContent.parentNode
    ) {

        fallLyricsContent
            .parentNode
            .insertBefore(
                fallLyricsContent,
                lostLyricsContent
            );

    }


    // LYRICS — FALL ACTIVE

    $$(".lyrics-tab")
        .forEach(
            (tab) => {

                const active =
                    tab.dataset.song ===
                    "fall-into-me";


                tab.classList.toggle(
                    "active",
                    active
                );


                tab.setAttribute(
                    "aria-selected",
                    active
                        ? "true"
                        : "false"
                );

            }
        );


    $$(".lyrics-content")
        .forEach(
            (content) => {

                content.classList.toggle(
                    "active",
                    content.id ===
                    "fall-into-me"
                );

            }
        );


    // VISUALS — FALL FIRST

    const visualStrip =
        $("#visual-strip");

    const fallVisual =
        $("#fall-into-me-visual");

    const lostVisual =
        $("#lost-count-visual");


    if (
        visualStrip &&
        fallVisual &&
        lostVisual
    ) {

        visualStrip.insertBefore(
            fallVisual,
            lostVisual
        );

    }


    // META

    const metaDescription =
        $(
            'meta[name="description"]'
        );


    if (metaDescription) {

        metaDescription.setAttribute(
            "content",
            "KALN — Fall Into Me is out now. Listen, read the lyrics, and explore the official website."
        );

    }

}


// =========================================================
// RELEASE CHECK
// =========================================================

function checkFallRelease() {

    const released =
        new Date() >=
        fallIntoMeReleaseTime;


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
        fallIntoMeReleaseTime -
        new Date();


    if (distance <= 0) {

        if (fallCountdown) {
            fallCountdown.hidden =
                true;
        }

        return;

    }


    const days =
        Math.floor(
            distance /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        Math.floor(
            (
                distance /
                (
                    1000 *
                    60 *
                    60
                )
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                distance /
                (
                    1000 *
                    60
                )
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
            String(days).padStart(
                2,
                "0"
            );
    }


    if (countdownHours) {
        countdownHours.textContent =
            String(hours).padStart(
                2,
                "0"
            );
    }


    if (countdownMinutes) {
        countdownMinutes.textContent =
            String(minutes).padStart(
                2,
                "0"
            );
    }


    if (countdownSeconds) {
        countdownSeconds.textContent =
            String(seconds).padStart(
                2,
                "0"
            );
    }

}


updateFallCountdown();


setInterval(
    updateFallCountdown,
    1000
);


// =========================================================
// REVEALS
// =========================================================

const revealElements =
    $$(".reveal");


if (
    reducedMotion ||
    !(
        "IntersectionObserver"
        in window
    )
) {

    revealElements
        .forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

} else {

    const revealObserver =
        new IntersectionObserver(

            (entries,observer) => {

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


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },

            {
                threshold:.14
            }

        );


    revealElements
        .forEach(
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
            passive:true
        }
    );

}


// =========================================================
// TILT CARDS
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
                        (x - .5) * 6;


                    const rotateX =
                        (.5 - y) * 6;


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

function activateLyricsTab(
    selectedTab
) {

    const songId =
        selectedTab.dataset.song;


    $$(".lyrics-tab")
        .forEach(
            (tab) => {

                const active =
                    tab === selectedTab;


                tab.classList.toggle(
                    "active",
                    active
                );


                tab.setAttribute(
                    "aria-selected",
                    active
                        ? "true"
                        : "false"
                );

            }
        );


    $$(".lyrics-content")
        .forEach(
            (content) => {

                content.classList.toggle(
                    "active",
                    content.id ===
                    songId
                );

            }
        );

}


$$(".lyrics-tab")
    .forEach(
        (tab) => {

            tab.addEventListener(
                "click",
                () => {

                    activateLyricsTab(
                        tab
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
