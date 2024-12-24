const particles = document.getElementById("particles");
const numParticles = 100; // Adjust this number for more/less particles
const particleArray = [];

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = Math.random() * 5 + 2 + "s";
    particle.style.opacity = Math.random();
    particles.appendChild(particle);
    particleArray.push(particle);

    setTimeout(() => {
        particle.remove();
        particleArray.splice(particleArray.indexOf(particle), 1);
    }, 7000); // Adjust lifespan of particles
}

// Generate particles continuously
setInterval(createParticle, 200);

// Scroll Event Listener for Animations
document.addEventListener('scroll', function () {
    const introductionSection = document.getElementById('introduction');
    const introductionPosition = introductionSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (introductionPosition < screenHeight * 0.9) { // Trigger animation when 80% of the viewport is reached
        introductionSection.classList.add('active');
    }
});
