document.addEventListener("DOMContentLoaded", function () {

    // Scroll Reveal
    const sections = document.querySelectorAll("section");

    function reveal() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const trigger = window.innerHeight - 100;

            if (sectionTop < trigger) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // executa ao carregar


    // Typing Effect
    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    const words = [
        "Desenvolvedor Front-End",
        "Especialista em React",
        "Integração com APIs REST",
        "Código Limpo e Escalável"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const currentText = currentWord.substring(0, charIndex);
        typingElement.textContent = currentText;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 80);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 40);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1000);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-card").forEach((card) => {
        const slides = card.querySelectorAll(".slide");
        const prevBtn = card.querySelector(".gallery-btn.prev");
        const nextBtn = card.querySelector(".gallery-btn.next");

        if (!slides.length) return;

        let current = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            });
        }

        showSlide(current);
    });
});


