// =========================================================
// KALN — OFFICIAL WEBSITE
// MASTER SCRIPT.JS
// =========================================================


// =========================================================
// HELPERS
// =========================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// =========================================================
// PRIVATE FALL INTO ME PREVIEW
// Add ?fallpreview=1 to the URL
// =========================================================

const siteParams = new URLSearchParams(window.location.search);
const fallPreviewMode = siteParams.get("fallpreview") === "1";

if (fallPreviewMode) {
    document.body.classList.add("fall-era");
}


// =========================================================
// RELEASE DATE
// September 18, 2026 — 6:00 AM Central
// =========================================================

const fallIntoMeReleaseTime = new Date(
    "2026-09-18T11:00:00Z"
);

const fallIntoMeLink =
    "https://release.landr.com/991048944886";

let fallIntoMeReleased = false;


// =========================================================
// COUNTDOWN
// =========================================================

const countdownDays =
    document.getElementById("countdown-days");

const countdownHours =
    document.getElementById("countdown-hours");

const countdownMinutes =
    document.getElementById("countdown-minutes");

const countdownSeconds =
    document.getElementById("countdown-seconds");

const fallCountdown =
    document.getElementById("fall-countdown");


function updateFallCountdown() {

    const now = new Date();

    const distance =
        fallIntoMeReleaseTime - now;


    if (distance <= 0) {

        if (fallCountdown) {
            fallCountdown.style.display = "none";
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
// RELEASE DAY SWITCH
// =========================================================

function unlockFallIntoMe() {

    if (fallIntoMeReleased) {
        return;
    }


    const now = new Date();


    if (now < fallIntoMeReleaseTime) {
        return;
    }


    fallIntoMeReleased = true;


    // Automatically change the whole site
    // into the Fall Into Me era.

    document.body.classList.add("fall-era");


    // -----------------------------------------
    // TOP LISTEN BAR
    // -----------------------------------------

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


    // -----------------------------------------
    // HERO
    // -----------------------------------------

    const heroEyebrow =
        $(".hero-copy .eyebrow");

    const heroTagline =
        $(".hero-tagline");

    const heroPrimaryButton =
        $(".hero-actions .button-light");


    if (heroEyebrow) {
        heroEyebrow.textContent =
            "New Release";
    }


    if (heroTagline) {
        heroTagline.textContent =
            "Fall Into Me is out now.";
    }


    if (heroPrimaryButton) {

        heroPrimaryButton.textContent =
            "Listen to Fall Into Me";

        heroPrimaryButton.href =
            fallIntoMeLink;
    }


    // -----------------------------------------
    // MUSIC SECTION
    // -----------------------------------------

    const nowPlayingArt =
        $(".release-art img");

    const nowPlayingTitle =
        $(".release-info h3");

    const nowPlayingKicker =
        $(".release-kicker");

    const nowPlayingCopy =
        $(".release-info .release-copy");

    const nowPlayingButton =
        $(".release-actions .button-light");


    if (nowPlayingArt) {

        nowPlayingArt.src =
            "assets/images/fall-into-me-cover.png";

        nowPlayingArt.alt =
            "Fall Into Me cover art by KALN";
    }


    if (nowPlayingTitle) {
        nowPlayingTitle.textContent =
            "Fall Into Me";
    }


    if (nowPlayingKicker) {
        nowPlayingKicker.textContent =
            "Single · 2026";
    }


    if (nowPlayingCopy) {
        nowPlayingCopy.textContent =
            "A softer chapter, out now.";
    }


    if (nowPlayingButton) {

        nowPlayingButton.textContent =
            "Listen Now";

        nowPlayingButton.href =
            fallIntoMeLink;
    }


    // -----------------------------------------
    // HIDE COMING SOON SECTION
    // -----------------------------------------

    const nextSection =
        $(".next-section");

    if (nextSection) {
        nextSection.style.display = "none";
    }


    // -----------------------------------------
    // UNLOCK FALL INTO ME LYRICS
    // -----------------------------------------

    const fallLyricsPanel =
        $("#fall-into-me");


    if (fallLyricsPanel) {

        fallLyricsPanel.innerHTML = `

            <div class="lyrics-heading">

                <h3>
                    Fall Into Me
                </h3>

                <span>
                    2026
                </span>

            </div>


            <div class="lyrics-sequence">


                <section class="lyric-block">

                    <p class="lyric-label">
                        Verse 1
                    </p>

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

                    <p class="lyric-label">
                        Chorus
                    </p>

                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>

                </section>


                <section class="lyric-block">

                    <p class="lyric-label">
                        Verse 2
                    </p>

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

                    <p class="lyric-label">
                        Chorus
                    </p>

                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>

                </section>


                <section class="lyric-block">

                    <p class="lyric-label">
                        Bridge
                    </p>

                    <p>
                        Let the night take over<br>
                        Let your walls fall lower<br>
                        If you lean, come closer<br>
                        I’ll hold you till it’s over
                    </p>

                </section>


                <section class="lyric-block">

                    <p class="lyric-label">
                        Final Chorus
                    </p>

                    <p>
                        Fall into me… let it be<br>
                        Let your guard fall quietly<br>
                        If you want this, let me see<br>
                        Fall into me… endlessly
                    </p>

                </section>


            </div>

        `;
    }


    // -----------------------------------------
    // META DESCRIPTION
    // -----------------------------------------

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

}


// Run immediately when page loads.

unlockFallIntoMe();


// Keep checking in case someone
// has the website open when it releases.

setInterval(
    unlockFallIntoMe,
    30000
);


// =========================================================
// REVEAL ANIMATIONS
// =========================================================

const revealElements =
    $$(".reveal");


if (
    reducedMotion ||
    !("IntersectionObserver" in window)
) {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

} else {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },

            {
                threshold: 0.14
            }

        );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}


// =========================================================
// CURSOR GLOW
// DESKTOP ONLY
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
// HERO PARALLAX
// NORMAL ERA ONLY
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

            // Important:
            // Let the Fall Into Me CSS animation
            // control the hero instead.

            if (
                document.body.classList.contains(
                    "fall-era"
                )
            ) {
                heroBg.style.transform = "";
                return;
            }


            const scrollY =
                window.scrollY;


            const shift =
                Math.min(
                    scrollY * 0.08,
                    55
                );


            heroBg.style.transform =
                `translate3d(0, ${shift}px, 0) scale(1.07)`;

        },
        {
            passive: true
        }
    );

}


// =========================================================
// TILT CARDS
// DESKTOP ONLY
// =========================================================

const tiltCards =
    $$(".tilt-card");


if (
    !reducedMotion &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    tiltCards.forEach((card) => {

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

                image.style.transform = "";

            }
        );

    });

}


// =========================================================
// LYRICS TABS
// =========================================================

const lyricsTabs =
    $$(".lyrics-tab");

const lyricsContents =
    $$(".lyrics-content");


lyricsTabs.forEach((tab) => {

    tab.addEventListener(
        "click",
        () => {

            const songId =
                tab.dataset.song;


            lyricsTabs.forEach(
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


            lyricsContents.forEach(
                (content) => {

                    content.classList.toggle(
                        "active",
                        content.id === songId
                    );

                }
            );

        }
    );

});


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


    siteNav.classList.remove("open");

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
                siteNav.classList.toggle(
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
        .forEach((link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 850
            ) {
                closeMenu();
            }

        }
    );

}
