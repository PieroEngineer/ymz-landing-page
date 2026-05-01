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
        duration: 1.2, 
        ease: "expo.out" 
    })
    
    // 2. RECTANGLE SLIDE OUT
    .to(preloaderRect, {
        scaleX: 1,
        paddingRight: "60px",
        duration: 1,
        ease: "expo.inOut"
    }, "-=0.2")
    .to(rectText, {
        opacity: 1,
        duration: 0.5
    }, "-=0.6")

    // 3. COLLAPSE RECTANGLE BACK
    .to(rectText, {
        opacity: 0,
        duration: 0.3
    }, "+=1.0") 
    .to(preloaderRect, {
        scaleX: 0,
        paddingRight: "0px",
        duration: 0.8,
        ease: "expo.inOut"
    }, "-=0.1")

    // 4. FLIGHT TO NAVBAR
    // CRITICAL: We DO NOT fade opacity to 0 here.
    .to(logo, {
        top: () => anchor.getBoundingClientRect().top + (anchor.offsetHeight / 2),
        left: () => anchor.getBoundingClientRect().left + (anchor.offsetWidth / 2),
        xPercent: -50, 
        yPercent: -50, 
        scale: 0.35, 
        duration: 1.2, 
        ease: "expo.inOut"
    })
    
    // 5. REVEAL WEBSITE
    .to("#navbar, #main-content", { 
        opacity: 1, 
        duration: 0.8,
        onStart: () => {
            // Only hide the preloader logo once the navbar is actually visible
            gsap.to(logo, { opacity: 0, duration: 0.3, delay: 0.5 });
        }
    }, "-=0.4")
    .call(initHeroSection)
    .to("#preloader", { 
        opacity: 0, 
        display: "none", 
        duration: 0.5 
    }, "-=0.2");

    // Scroll Progress
    window.addEventListener("scroll", () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    });
});

function initHeroSection() {
    const hero = document.querySelector("#hero-section");
    
    gsap.to(hero, {
        opacity: 1,
        width: "100vw",
        height: "100vh",
        y: 0,
        borderRadius: "0px",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
            // 1. Force Scene 1 to its visible state immediately
            gsap.set("#scene-1", { opacity: 1 });
            gsap.set("#scene-1 .desc-text", { y: "0%" });

            initHeroNarrative();
            initComparisonSection();
            
            // 2. Kill and restart ScrollTrigger to catch the new height
            ScrollTrigger.refresh();
        }
    });

    // REEL LOGIC
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
            onRefresh: self => {
                if(self.progress === 0) {
                    gsap.set("#scene-1", { opacity: 1 });
                    gsap.set("#scene-1 .desc-text", { y: "0%" });
                }
            }
        }
    });

    // Reset Scene 1 to be visible initially
    gsap.set("#scene-1", { opacity: 1 });
    gsap.set("#scene-1 .desc-text", { y: "0%" });

    // SCENE REVEAL SEQUENCE
    // Scene 1 to Scene 2
    mainTl.to("#scene-1 .desc-text", { y: "-105%", duration: 1, stagger: 0.1 })
          .to("#scene-1", { opacity: 0, duration: 0.5 }, "-=0.5")
          
          .to("#scene-2", { opacity: 1, duration: 0.5 })
          .to("#scene-2 .desc-text", { y: "0%", duration: 1, stagger: 0.2 })
          .to("#scene-2 .desc-text", { y: "-105%", duration: 1, stagger: 0.1, delay: 1 })
          .to("#scene-2", { opacity: 0, duration: 0.5 }, "-=0.5")

    // SCENE 3: Standard Reveal -> Stay -> Exit
    mainTl.to("#scene-3", { opacity: 1, duration: 0.5 })
          .to("#scene-3 .desc-text", { y: "0%", duration: .5, stagger: 0.2 })
          .to("#scene-3 .desc-text", { y: "-110%", duration: .5, delay: .5 })
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

function initLeadForm() {
    const overlay = document.querySelector("#form-overlay");
    const modal = document.querySelector("#form-modal");
    const closeBtn = document.querySelector("#close-modal");
    const userTypeSelect = document.querySelector("#user-type");
    const restoField = document.querySelector("#resto-field");
    const formVisual = document.querySelector("#form-visual");
    const waitlistBtn = document.querySelector("nav button");

    const openModal = () => {
        // Prevent background scroll
        document.body.style.overflow = 'hidden';
        overlay.classList.remove('pointer-events-none');
        
        const tl = gsap.timeline();
        tl.to(overlay, { opacity: 1, duration: 0.4 })
          .fromTo(modal, 
            { y: 1000, opacity: 0, scale: 0.9 }, 
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, 
            "-=0.2"
          );
    };

    const closeModal = () => {
        gsap.to(modal, { y: 1000, opacity: 0, duration: 0.5, ease: "power2.in", onComplete: () => {
            overlay.classList.add('pointer-events-none');
            overlay.style.opacity = "0";
            document.body.style.overflow = 'auto'; // Restore scroll
        }});
    };

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

    waitlistBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

    // Scroll to bottom trigger
    window.addEventListener('scroll', () => {
        // We add +1 to account for browser sub-pixel rendering (e.g. 4000.5px)
        const scrollPosition = Math.ceil(window.innerHeight + window.pageYOffset);
        const scrollTarget = document.documentElement.scrollHeight;

        // Trigger ONLY when the absolute bottom is reached
        if (scrollPosition >= scrollTarget && overlay.style.opacity !== "1") { 
            openModal();
        }
    });

    const waitlistForm = document.querySelector("#waitlist-form");
    const policyCheck = document.querySelector("#policy-check");
    const policyError = document.querySelector("#policy-error");

    document.querySelector("#waitlist-form").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const userType = userTypeSelect.value;
        const restoNameInput = document.querySelector('input[name="restaurant_name"]');
        const policyCheck = document.querySelector("#policy-check");
        const policyError = document.querySelector("#policy-error");

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

        // 3. Success
        policyError.style.opacity = "0";
        alert("Thanks! We'll notify you soon.");
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
initLeadForm();