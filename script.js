// =========================================================
// KALN — OFFICIAL WEBSITE
// SCRIPT.JS
// =========================================================


// ---------------------------------------------------------
// HELPERS
// ---------------------------------------------------------

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle = $(".menu-toggle");
const siteNav = $(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = siteNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close menu"
                : "Open menu"
        );

    });


    $$(".site-nav a").forEach((link) => {

        link.addEventListener("click", () => {

            siteNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


// =========================================================
// REVEAL ON SCROLL
// =========================================================

const revealElements = $$(".reveal");

if (reducedMotion) {

    revealElements.forEach((element) => {
        element.classList.add("visible");
    });

} else {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

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
// =========================================================

const cursorGlow = $(".cursor-glow");

if (
    cursorGlow &&
    !reducedMotion &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener(
        "pointermove",
        (event) => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        },
        {
            passive: true
        }
    );

}


// =========================================================
// HERO BACKGROUND MOVEMENT
// =========================================================

const hero = $(".hero");
const heroBackground = $(".hero-bg");

if (
    hero &&
    heroBackground &&
    !reducedMotion &&
    window.matchMedia("(pointer: fine)").matches
) {

    hero.addEventListener(
        "pointermove",
        (event) => {

            const rect =
                hero.getBoundingClientRect();

            const x =
                (
                    event.clientX -
                    rect.left
                )
                / rect.width
                - .5;

            const y =
                (
                    event.clientY -
                    rect.top
                )
                / rect.height
                - .5;


            heroBackground.style.transform =
                `
                scale(1.05)
                translate(
                    ${x * -8}px,
                    ${y * -8}px
                )
                `;

        }
    );


    hero.addEventListener(
        "pointerleave",
        () => {

            heroBackground.style.transform =
                "scale(1.04)";

        }
    );

}


// =========================================================
// RELEASE ART TILT
// =========================================================

const tiltCards = $$(".tilt-card");

if (
    !reducedMotion &&
    window.matchMedia("(pointer: fine)").matches
) {

    tiltCards.forEach((card) => {

        card.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (
                        event.clientX -
                        rect.left
                    )
                    / rect.width
                    - .5;

                const y =
                    (
                        event.clientY -
                        rect.top
                    )
                    / rect.height
                    - .5;


                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${y * -4}deg)
                    rotateY(${x * 4}deg)
                    translateY(-3px)
                    `;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


// =========================================================
// LYRICS DRAWER
// =========================================================

const lyricsDrawer = $("#lyrics-drawer");
const lyricsOpenButton = $(".lyric-open");
const lyricsCloseButtons = $$("[data-close-lyrics]");
const lyricsSheet = $(".lyrics-sheet");

let previousFocusedElement = null;


function openLyrics() {

    if (!lyricsDrawer) return;

    previousFocusedElement =
        document.activeElement;

    lyricsDrawer.classList.add("open");

    lyricsDrawer.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "lyrics-open"
    );


    if (lyricsOpenButton) {

        lyricsOpenButton.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    const closeButton =
        $(".lyrics-close");

    if (closeButton) {

        window.setTimeout(
            () => {
                closeButton.focus();
            },
            50
        );

    }

}


function closeLyrics() {

    if (!lyricsDrawer) return;

    lyricsDrawer.classList.remove("open");

    lyricsDrawer.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "lyrics-open"
    );


    if (lyricsOpenButton) {

        lyricsOpenButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    if (
        previousFocusedElement &&
        typeof previousFocusedElement.focus
            === "function"
    ) {

        previousFocusedElement.focus();

    }

}


if (lyricsOpenButton) {

    lyricsOpenButton.addEventListener(
        "click",
        openLyrics
    );

}


lyricsCloseButtons.forEach((button) => {

    button.addEventListener(
        "click",
        closeLyrics
    );

});


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            lyricsDrawer &&
            lyricsDrawer.classList.contains(
                "open"
            )
        ) {

            closeLyrics();

        }

    }
);


// =========================================================
// SIMPLE FOCUS TRAP FOR LYRICS DRAWER
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Tab" ||
            !lyricsDrawer ||
            !lyricsDrawer.classList.contains(
                "open"
            ) ||
            !lyricsSheet
        ) {
            return;
        }


        const focusableElements =
            lyricsSheet.querySelectorAll(
                `
                a[href],
                button:not([disabled]),
                [tabindex]:not([tabindex="-1"])
                `
            );


        if (!focusableElements.length) {
            return;
        }


        const first =
            focusableElements[0];

        const last =
            focusableElements[
                focusableElements.length - 1
            ];


        if (
            event.shiftKey &&
            document.activeElement === first
        ) {

            event.preventDefault();

            last.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {

            event.preventDefault();

            first.focus();

        }

    }
);


// =========================================================
// CLOSE MOBILE MENU IF WINDOW GETS LARGE AGAIN
// =========================================================

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900 &&
            siteNav &&
            menuToggle
        ) {

            siteNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }
);
