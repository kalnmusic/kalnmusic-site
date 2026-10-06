// =========================================================
// KALN — OFFICIAL WEBSITE
// SCRIPT.JS
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
                threshold: .14
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

        },
        {
            passive: true
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

            const shift =
                Math.min(
                    window.scrollY * .08,
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


    $$(".lyrics-tab").forEach(
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


    $$(".lyrics-content").forEach(
        (content) => {

            content.classList.toggle(
                "active",
                content.id === songId
            );

        }
    );

}


$$(".lyrics-tab").forEach(
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
                window.innerWidth > 850
            ) {
                closeMenu();
            }

        }
    );

}
