// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Animate header elements
//     gsap.from('header', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
//     gsap.from('nav ul li', { opacity: 0, y: -20, duration: 0.5, stagger: 0.1, delay: 0.5 });
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate main content
//     gsap.from('main h2', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
//     gsap.from('main p', { opacity: 0, y: 30, duration: 1, delay: 1 });
//     gsap.from('main a', { opacity: 0, y: 30, duration: 1, delay: 1.2 });

//     // Animate feature cards
//     gsap.from('.feature-card', {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         delay: 1.5,
//         ease: 'power3.out'
//     });
//     gsap.from('.testimonial-card', {
//         scrollTrigger: {
//             trigger: '#testimonials',
//             start: 'top 80%'
//         },
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: 'power3.out'
//     });

//     // Animate pricing cards
//     gsap.from('.pricing-card', {
//         scrollTrigger: {
//             trigger: '#pricing',
//             start: 'top 80%'
//         },
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: 'power3.out'
//     });

//     // Animate contact form
//     gsap.from('#contact form', {
//         scrollTrigger: {
//             trigger: '#contact',
//             start: 'top 80%'
//         },
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         ease: 'power3.out'
//     });

//     // Parallax effect on scroll
//     gsap.to('body', {
//         backgroundPositionY: '100%',
//         ease: 'none',
//         scrollTrigger: {
//             trigger: 'body',
//             start: 'top top',
//             end: 'bottom bottom',
//             scrub: true
//         }
//     });
    

//     // Parallax effect on scroll
//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         document.body.style.backgroundPositionY = `${scrollY * 0.5}px`;
//     });

//     // Hover effect for feature cards
//     const featureCards = document.querySelectorAll('.feature-card');
//     featureCards.forEach(card => {
//         card.addEventListener('mouseenter', () => {
//             gsap.to(card, { scale: 1.05, duration: 0.3 });
//         });
//         card.addEventListener('mouseleave', () => {
//             gsap.to(card, { scale: 1, duration: 0.3 });
//         });
//     });
//     // Hover effect for all cards
//     const cards = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', () => {
//             gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
//         });
//         card.addEventListener('mouseleave', () => {
//             gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
//         });
//     });

//     // Typing effect for main heading
//     const mainHeading = document.querySelector('main h2');
//     const headingText = mainHeading.textContent;
//     mainHeading.textContent = '';
//     for (let i = 0; i < headingText.length; i++) {
//         const span = document.createElement('span');
//         span.textContent = headingText[i];
//         span.style.opacity = '0';
//         mainHeading.appendChild(span);
//         gsap.to(span, {
//             opacity: 1,
//             duration: 0.1,
//             delay: 0.05 * i
//         });
//     }

//     // Particle effect in the background
//     particlesJS('particles-js', {
//         particles: {
//             number: { value: 80, density: { enable: true, value_area: 800 } },
//             color: { value: '#ffffff' },
//             shape: { type: 'circle' },
//             opacity: { value: 0.5, random: false },
//             size: { value: 3, random: true },
//             line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
//             move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
//         },
//         interactivity: {
//             detect_on: 'canvas',
//             events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
//             modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
//         },
//         retina_detect: true
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate header elements
    gsap.from('header', { opacity: 0, y: -50, duration: 1, ease: 'power3.out' });
    gsap.from('nav ul li', { opacity: 0, y: -20, duration: 0.5, stagger: 0.1, delay: 0.5 });

    // Animate main content
    gsap.from('main h2', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('main p', { opacity: 0, y: 30, duration: 1, delay: 1 });
    gsap.from('main a', { opacity: 0, y: 30, duration: 1, delay: 1.2 });

    // Animate feature cards
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.feature-card',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate testimonial cards
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate pricing cards
    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '#pricing',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate contact form
    gsap.from('#contact form', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Parallax effect on scroll using GSAP
    gsap.to('body', {
        backgroundPositionY: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });

    // Hover effect for all cards
    const cards = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });

    // Typing effect for main heading
    const mainHeading = document.querySelector('main h2');
    const headingText = mainHeading.textContent;
    mainHeading.textContent = '';
    for (let i = 0; i < headingText.length; i++) {
        const span = document.createElement('span');
        span.textContent = headingText[i];
        span.style.opacity = '0';
        mainHeading.appendChild(span);
        gsap.to(span, {
            opacity: 1,
            duration: 0.1,
            delay: 0.05 * i
        });
    }

    // Particle effect in the background
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});