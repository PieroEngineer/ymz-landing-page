// Force window to scroll to top on every reload
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    const logo = document.querySelector("#y-logo");
    const anchor = document.querySelector("#nav-logo-anchor");
    const centerTarget = document.querySelector("#logo-center-target");
    const preloaderRect = document.querySelector("#preloader-rect");
    const rectText = document.querySelector("#rect-text");
    const isMobilePreloader = window.matchMedia("(max-width: 640px)").matches;
    const rectExpandedPadding = isMobilePreloader ? "8px" : "60px";
    const navLogoScale = isMobilePreloader ? anchor.offsetWidth / logo.offsetWidth : 0.35;

    const centerRect = centerTarget.getBoundingClientRect();
    
    // Initial States
    gsap.set(logo, { 
        top: centerRect.top + (centerRect.height / 2),
        left: centerRect.left + (centerRect.width / 2),
        xPercent: -50, yPercent: -50, scale: 0.5, opacity: 0 
    });

    // 1. LOGO ARRIVAL
    tl.to(logo, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6,
        ease: "expo.out" 
    })
    
    // 2. RECTANGLE SLIDE OUT
    .to(preloaderRect, {
        scaleX: 1,
        paddingRight: rectExpandedPadding,
        duration: 0.7,
        ease: "expo.inOut"
    }, "-=0.2")
    .to(rectText, {
        opacity: 1,
        duration: 0.4
    }, "-=0.5")

    // 3. COLLAPSE RECTANGLE BACK
    .to(rectText, {
        opacity: 0,
        duration: 0.25
    }, "+=0.8")
    .to(preloaderRect, {
        scaleX: 0,
        paddingRight: "0px",
        duration: 0.4,
        ease: "expo.inOut"
    }, "-=0.1")

    // 4. FLIGHT TO NAVBAR
    // CRITICAL: We DO NOT fade opacity to 0 here.
    .to(logo, {
        top: () => anchor.getBoundingClientRect().top + (anchor.offsetHeight / 2),
        left: () => anchor.getBoundingClientRect().left + (anchor.offsetWidth / 2),
        xPercent: -50,
        yPercent: -50,
        scale: navLogoScale,
        duration: 0.9,
        ease: "expo.inOut"
    })
    
    // 5. REVEAL WEBSITE
    .to("#navbar, #main-content", { 
        opacity: 1, 
        duration: 0.4,
        onStart: () => {
            // Only hide the preloader logo once the navbar is actually visible
            gsap.to(logo, { opacity: 0, duration: 0.25, delay: 0.3 });
        }
    }, "-=0.4")
    .call(initHeroSection)
    .to("#preloader", { 
        opacity: 0, 
        display: "none", 
        duration: 0.3
    }, "-=0.2");

    // Scroll Progress
    window.addEventListener("scroll", () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    });
});

function initHeroSection() {
    const hero = document.querySelector("#hero-section");
    const cornerImg = document.querySelector(".hero-corner-image");
    
    // Set initial state: Hidden and slightly lower
    gsap.set(cornerImg, { opacity: 0, y: 20 });
    gsap.set(["#scene-2-img", "#scene-3-img"], { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(hero, { 
        opacity: 1, 
        duration: 0.5 
    })
    .to(hero, {
        width: "100vw",
        height: "100vh",
        y: 0,
        borderRadius: "0px",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
            gsap.set("#scene-1", { opacity: 1 });
            gsap.set("#scene-1 .desc-text", { y: "0%" });
            initHeroNarrative();
            initComparisonSection();
            ScrollTrigger.refresh();
        }
    })
    // Animate the icon: Fades in and slides UP (y:0)
    .to(cornerImg, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
    }, "-=0.8");

    // REEL LOGIC (Keep this as you had it)
    const slides = document.querySelectorAll(".reel-slide");
    let currentSlide = 0;
    function nextSlide() {
        gsap.to(slides[currentSlide], { filter: "blur(20px)", opacity: 0, duration: .5 });
        currentSlide = (currentSlide + 1) % slides.length;
        gsap.fromTo(slides[currentSlide], 
            { filter: "blur(20px)", opacity: 0 },
            { filter: "blur(0px)", opacity: 1, duration: .5 }
        );
    }
    gsap.set(slides[0], { opacity: 1, filter: "blur(0px)" });
    setInterval(nextSlide, 2500);
}

function initHeroNarrative() {
    gsap.registerPlugin(ScrollTrigger);

    const heroProgressContainer = document.querySelector(".hero-progress-container");
    const heroProgressBar = document.getElementById("hero-progress-bar");
    const updateHeroProgress = (self) => {
        if (heroProgressContainer && heroProgressBar) {
            const percent = Math.round(self.progress * 100);
            heroProgressBar.style.width = `${percent}%`;
            heroProgressContainer.setAttribute("aria-valuenow", percent);
        }
    };

    const mainTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            // REDUCED: From 4000 to 1000 for higher sensitivity
            end: "+=1000", 
            pin: true,
            // REDUCED: From 1 to 0.05 for snappier response
            scrub: .05, 
            anticipatePin: 1,
            onUpdate: self => {
                updateHeroProgress(self);
            },
            onRefresh: self => {
                updateHeroProgress(self);
                if(self.progress === 0) {
                    gsap.set("#scene-1", { opacity: 1 });
                    gsap.set("#scene-1 .desc-text", { y: "0%" });
                    gsap.set("#scene-2-img", { opacity: 0, rotation: -14, scale: 0.85, yPercent: -50 });
                    gsap.set("#scene-3-img", { opacity: 0, rotation: 14, scale: 0.85, yPercent: -50 });
                }
            }
        }
    });

    // Reset Scene 1 and side images initially
    gsap.set("#scene-1", { opacity: 1 });
    gsap.set("#scene-1 .desc-text", { y: "0%" });
    // Images start hidden; GSAP owns transforms (yPercent centres vertically like the inline translateY(-50%))
    gsap.set("#scene-2-img", { opacity: 0, rotation: -14, scale: 0.85, yPercent: -50 });
    gsap.set("#scene-3-img", { opacity: 0, rotation: 14, scale: 0.85, yPercent: -50 });

    // SCENE REVEAL SEQUENCE
    // Scene 1 to Scene 2
    mainTl.to("#scene-1 .desc-text", { y: "-105%", duration: 1, stagger: 0.1 })
          .to("#scene-1", { opacity: 0, duration: 0.5 }, "-=0.5")
          
          .to("#scene-2", { opacity: 1, duration: 0.5 })
          .to("#scene-2 .desc-text", { y: "0%", duration: 1, stagger: 0.2 })
          // Scene 2 image entrance: clockwise rotation (-14deg -> -3deg)
          .fromTo("#scene-2-img", 
              { opacity: 0, rotation: -14, scale: 0.85, yPercent: -50 }, 
              { opacity: 1, rotation: -3, scale: 1, yPercent: -50, duration: 1, ease: "power2.out" }, 
              "<"
          )
          .to("#scene-2 .desc-text", { y: "-105%", duration: 1, stagger: 0.1, delay: 1 })
          // Scene 2 image exit: counter-clockwise rotation (-3deg -> -16deg)
          .to("#scene-2-img", 
              { opacity: 0, rotation: -16, scale: 0.85, yPercent: -50, duration: 0.8, ease: "power2.in" }, 
              "<"
          )
          .to("#scene-2", { opacity: 0, duration: 0.5 }, "-=0.5")

    // SCENE 3: Standard Reveal -> Stay -> Exit
    mainTl.to("#scene-3", { opacity: 1, duration: 0.5 })
          .to("#scene-3 .desc-text", { y: "0%", duration: .5, stagger: 0.2 })
          // Scene 3 image entrance: counter-clockwise rotation (+14deg -> +3deg)
          .fromTo("#scene-3-img", 
              { opacity: 0, rotation: 14, scale: 0.85, yPercent: -50 }, 
              { opacity: 1, rotation: 3, scale: 1, yPercent: -50, duration: 0.8, ease: "power2.out" }, 
              "<"
          )
          .to("#scene-3 .desc-text", { y: "-110%", duration: .5, delay: .5 })
          // Scene 3 image exit: clockwise rotation (+3deg -> +16deg)
          .to("#scene-3-img", 
              { opacity: 0, rotation: 16, scale: 0.85, yPercent: -50, duration: 0.5, ease: "power2.in" }, 
              "<"
          )
          .to("#scene-3", { opacity: 0, duration: 0.2 });

    // SCENE 4: Blue Box (Transparency handled in CSS)
    mainTl.to("#hero-reel div:last-child", { opacity: 0, duration: .5 }) 
          .to("#scene-4", { opacity: 1, duration: 0.2 })
          .to(".blue-box", { 
              scale: 1, 
              opacity: 1, 
              duration: 1.5, 
              ease: "elastic.out(1, 0.75)" 
          }, "<")
          .to("#scene-4 .desc-text", { y: "0%", duration: .5 });
}

function initComparisonSection() {
    gsap.registerPlugin(ScrollTrigger);

    const rows = gsap.utils.toArray(".comparison-row");

    rows.forEach((row) => {
        const beforeCard = row.querySelector(".before-card");
        const afterCard = row.querySelector(".after-card");

        // Create a timeline for each row's "Focus" moment
        gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 70%", // Starts scaling when row is near bottom-middle
                end: "top 30%",   // Ends scaling when row leaves top-middle
                scrub: true,      // Smoothly follows scroll
            }
        })
        .fromTo(beforeCard, 
            { scale: 0.9, opacity: 0.8 }, 
            { scale: 1, opacity: 1, duration: 1, ease: "none" }
        )
        .fromTo(afterCard, 
            { scale: 0.9, opacity: 0.8 }, 
            { scale: 1.05, opacity: 1, duration: 1, ease: "none" }, // Slightly larger for emphasis
            "<" // Start at the same time as beforeCard
        );
        
        // Add/Remove shadow class based on position
        ScrollTrigger.create({
            trigger: row,
            start: "top 60%",
            end: "top 40%",
            onEnter: () => {
                beforeCard.classList.add('card-focus');
                afterCard.classList.add('card-focus');
            },
            onLeave: () => {
                beforeCard.classList.remove('card-focus');
                afterCard.classList.remove('card-focus');
            },
            onEnterBack: () => {
                beforeCard.classList.add('card-focus');
                afterCard.classList.add('card-focus');
            },
            onLeaveBack: () => {
                beforeCard.classList.remove('card-focus');
                afterCard.classList.remove('card-focus');
            }
        });
    });
}

function initBenefitFlipCards() {
    const mobileFlipQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const cards = document.querySelectorAll("#benefits-section .flip-card");

    const isPhoneOrTouch = () => {
        return mobileFlipQuery.matches || window.matchMedia("(max-width: 768px)").matches || ('ontouchstart' in window);
    };

    cards.forEach((card) => {
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-pressed", "false");
        let hasUsedTouchHover = false;
        let ignoreNextClick = false;
        let lastFlipTime = 0;

        const toggleCard = () => {
            const now = Date.now();
            if (now - lastFlipTime < 250) return;
            lastFlipTime = now;
            card.classList.toggle("is-flipped");
            card.setAttribute("aria-pressed", card.classList.contains("is-flipped") ? "true" : "false");
        };

        // Existing pointerenter logic
        card.addEventListener("pointerenter", (event) => {
            if (!mobileFlipQuery.matches || event.pointerType === "mouse") return;
            if (hasUsedTouchHover) return;

            hasUsedTouchHover = true;
            ignoreNextClick = true;
            window.setTimeout(() => {
                ignoreNextClick = false;
            }, 500);
            toggleCard();
        });

        // Existing click logic
        card.addEventListener("click", () => {
            if (!isPhoneOrTouch()) return;

            if (ignoreNextClick) {
                ignoreNextClick = false;
                return;
            }

            toggleCard();
        });

        // Existing keyboard logic
        card.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            toggleCard();
        });

        // --- Touch Horizontal Slide (Swipe) Logic for Phone Screens ---
        let touchStartX = 0;
        let touchStartY = 0;
        let touchCurrentX = 0;
        let touchCurrentY = 0;
        let swipeTriggered = false;

        card.addEventListener("touchstart", (e) => {
            if (!isPhoneOrTouch() || e.touches.length !== 1) return;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchCurrentX = touchStartX;
            touchCurrentY = touchStartY;
            swipeTriggered = false;
        }, { passive: true });

        card.addEventListener("touchmove", (e) => {
            if (!isPhoneOrTouch() || swipeTriggered || e.touches.length !== 1) return;
            touchCurrentX = e.touches[0].clientX;
            touchCurrentY = e.touches[0].clientY;

            const diffX = touchCurrentX - touchStartX;
            const diffY = touchCurrentY - touchStartY;
            const absX = Math.abs(diffX);
            const absY = Math.abs(diffY);

            // Detect horizontal slide across card (more horizontal than vertical, past threshold)
            if (absX > absY && absX >= 35) {
                swipeTriggered = true;
                ignoreNextClick = true;
                window.setTimeout(() => {
                    ignoreNextClick = false;
                }, 400);
                toggleCard();
            }
        }, { passive: true });

        card.addEventListener("touchend", (e) => {
            if (!isPhoneOrTouch()) return;
            if (!swipeTriggered) {
                const diffX = touchCurrentX - touchStartX;
                const diffY = touchCurrentY - touchStartY;
                const absX = Math.abs(diffX);
                const absY = Math.abs(diffY);

                if (absX > absY && absX >= 35) {
                    swipeTriggered = true;
                    ignoreNextClick = true;
                    window.setTimeout(() => {
                        ignoreNextClick = false;
                    }, 400);
                    toggleCard();
                }
            }
            swipeTriggered = false;
        }, { passive: true });

        card.addEventListener("touchcancel", () => {
            swipeTriggered = false;
        });

        // Pointer event fallback for swipe gesture (supports pointer/mouse drag on phone viewports)
        let pointerStartX = 0;
        let pointerStartY = 0;
        let isPointerDown = false;
        let pointerSwipeTriggered = false;

        card.addEventListener("pointerdown", (e) => {
            if (!isPhoneOrTouch()) return;
            if (e.pointerType === "mouse" && !window.matchMedia("(max-width: 768px)").matches) return;
            isPointerDown = true;
            pointerStartX = e.clientX;
            pointerStartY = e.clientY;
            pointerSwipeTriggered = false;
        });

        card.addEventListener("pointermove", (e) => {
            if (!isPointerDown || pointerSwipeTriggered) return;
            const diffX = e.clientX - pointerStartX;
            const diffY = e.clientY - pointerStartY;
            const absX = Math.abs(diffX);
            const absY = Math.abs(diffY);

            if (absX > absY && absX >= 35) {
                pointerSwipeTriggered = true;
                ignoreNextClick = true;
                window.setTimeout(() => {
                    ignoreNextClick = false;
                }, 400);
                toggleCard();
            }
        });

        const endPointerSwipe = () => {
            isPointerDown = false;
            pointerSwipeTriggered = false;
        };

        card.addEventListener("pointerup", endPointerSwipe);
        card.addEventListener("pointercancel", endPointerSwipe);
    });
}

function initLeadForm() {
    const SUPABASE_URL = "https://giyjehsmcnrfkzaxzpmz.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpeWplaHNtY25yZmt6YXh6cG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NjU3MzIsImV4cCI6MjA5MzM0MTczMn0.kKLcrRlaIq95a7XGmguSln-DaEkPxKLf9n6WEABD-MI";
    const CONTACT_LEADS_TABLE = "contact_leads";

    // const overlay = document.querySelector("#form-overlay");
    // const modal = document.querySelector("#form-modal");
    // const closeBtn = document.querySelector("#close-modal");
    const userTypeSelect = document.querySelector("#user-type");
    const restoField = document.querySelector("#resto-field");
    const formVisual = document.querySelector("#form-visual");
    // const waitlistBtns = document.querySelectorAll(".waitlist-trigger-btn, [data-open-waitlist]");
    // const privacyPolicyLink = document.querySelector("#privacy-policy-link");
    // const privacyPolicyPanel = document.querySelector("#privacy-policy-panel");
    // const privacyPolicyBack = document.querySelector("#privacy-policy-back");

    // Inside function initLeadForm() -> const openModal = () => {
    // const openModal = () => {
    //     document.body.style.overflow = 'hidden';
    //     overlay.classList.remove('pointer-events-none');
        
    //     const tl = gsap.timeline();
    //     tl.to(overlay, { opacity: 1, duration: 0.4 })
    //     .fromTo(modal, 
    //         { y: "100%", opacity: 0, scale: 0.9 }, // Changed 1000 to "100%"
    //         { y: "0%", opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, 
    //         "-=0.2"
    //     );
    // };

    // const openPrivacyPolicy = () => {
    //     privacyPolicyPanel.classList.add("is-visible");
    //     privacyPolicyPanel.setAttribute("aria-hidden", "false");
    //     privacyPolicyBack.focus();
    // };

    // const closePrivacyPolicy = () => {
    //     privacyPolicyPanel.classList.remove("is-visible");
    //     privacyPolicyPanel.setAttribute("aria-hidden", "true");
    //     privacyPolicyLink.focus();
    // };

    // const closeModal = () => {
    //     privacyPolicyPanel.classList.remove("is-visible");
    //     privacyPolicyPanel.setAttribute("aria-hidden", "true");

    //     gsap.to(modal, { y: 1000, opacity: 0, duration: 0.5, ease: "power2.in", onComplete: () => {
    //         overlay.classList.add('pointer-events-none');
    //         overlay.style.opacity = "0";
    //         document.body.style.overflow = 'auto'; // Restore scroll
    //     }});
    // };

    // --- Dynamic Image Logic & Transition ---
    userTypeSelect.addEventListener('change', (e) => {
        const isRestaurant = e.target.value === 'restaurant';
        const newSrc = isRestaurant ? "images/animated_pov_restaurant_using_yummizi.webp" : "images/animated_pov_diner_with_yummizi.webp";

        // 1. Smooth Fade Out
        gsap.to(formVisual, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                // 2. Change Source & Toggle Fields
                formVisual.src = newSrc;
                
                if (isRestaurant) {
                    restoField.classList.remove('hidden');
                } else {
                    restoField.classList.add('hidden');
                }

                // 3. Smooth Fade In
                gsap.to(formVisual, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.inOut"
                });
            }
        });
    });

    // waitlistBtns.forEach(btn => btn.addEventListener('click', openModal));
    // closeBtn.addEventListener('click', closeModal);
    // overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    // privacyPolicyLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     openPrivacyPolicy();
    // });
    // privacyPolicyBack.addEventListener('click', closePrivacyPolicy);
    // document.addEventListener('keydown', (e) => {
    //     if (e.key !== "Escape" || !privacyPolicyPanel.classList.contains("is-visible")) return;
    //     closePrivacyPolicy();
    // });

    // Scroll to bottom trigger
    // window.addEventListener('scroll', () => {
    //     // We add +1 to account for browser sub-pixel rendering (e.g. 4000.5px)
    //     const scrollPosition = Math.ceil(window.innerHeight + window.pageYOffset);
    //     const scrollTarget = document.documentElement.scrollHeight;

    //     // Trigger ONLY when the absolute bottom is reached
    //     if (scrollPosition >= scrollTarget && overlay.style.opacity !== "1") { 
    //         openModal();
    //     }
    // });

    const waitlistForm = document.querySelector("#waitlist-form");
    const policyCheck = document.querySelector("#policy-check");
    const policyError = document.querySelector("#policy-error");
    const submitBtn = waitlistForm.querySelector('button[type="submit"]');
    const defaultSubmitText = submitBtn.textContent;
    const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    waitlistForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const userType = userTypeSelect.value;
        const restoNameInput = document.querySelector('input[name="restaurant_name"]');

        // 1. Policy Checkbox Validation
        if (!policyCheck.checked) {
            policyError.style.opacity = "1";
            gsap.to(policyCheck, { x: 5, repeat: 5, yoyo: true, duration: 0.05 });
            return;
        }

        // 2. Conditional Restaurant Name Validation
        if (userType === 'restaurant' && !restoNameInput.value.trim()) {
            alert("Please enter your Restaurant's Official Name to continue.");
            restoNameInput.focus();
            gsap.to(restoNameInput, { x: 5, repeat: 5, yoyo: true, duration: 0.05, clearProps: "x" });
            return;
        }

        if (!supabaseClient || SUPABASE_URL.includes("your-project-id") || SUPABASE_ANON_KEY.includes("your-anon-public-key")) {
            alert("Supabase is not configured yet. Please add your project URL and anon public key in script.js.");
            return;
        }

        const formData = new FormData(waitlistForm);
        const leadData = {
            full_name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            restaurant_name: userType === "restaurant" ? formData.get("restaurant_name").trim() : "",
            message: formData.get("question").trim()
        };

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {
            const { error } = await supabaseClient
                .from(CONTACT_LEADS_TABLE)
                .insert([leadData]);

            if (error) {
                alert("Error saving data: " + error.message);
                return;
            }
        } catch (error) {
            alert("Error saving data. Please try again in a moment.");
            return;
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = defaultSubmitText;
        }

        // 3. Success
        policyError.style.opacity = "0";
        alert("Success! We will contact you soon.");
        waitlistForm.reset();
        restoField.classList.add("hidden");
        formVisual.src = "images/animated_pov_diner_with_yummizi.webp";
        closeModal();
    });

    // Hide error message as soon as the user clicks the checkbox
    policyCheck.addEventListener('change', () => {
        if (policyCheck.checked) {
            policyError.style.opacity = "0";
        }
    });
}

// Call this at the end of your script
initBenefitFlipCards();
initLeadForm();
