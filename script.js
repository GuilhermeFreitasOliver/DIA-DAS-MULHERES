document.addEventListener('DOMContentLoaded', () => {
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize petal properties
        const startPositionLeft = Math.random() * window.innerWidth;
        const rotationAngle = Math.random() * 360;
        const fallDuration = Math.random() * 3 + 3; // 3-6 seconds
        const size = Math.random() * 10 + 15; // 15-25px
        const opacity = Math.random() * 0.3 + 0.7; // 0.7-1.0
        
        // Apply styles
        petal.style.left = `${startPositionLeft}px`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.transform = `rotate(${rotationAngle}deg)`;
        petal.style.animationDuration = `${fallDuration}s`;
        petal.style.opacity = opacity;
        
        // Add slight color variation
        const hue = Math.random() * 20 + 340; // Range of pink hues
        const saturation = Math.random() * 20 + 80; // 80-100%
        const lightness = Math.random() * 10 + 85; // 85-95%
        petal.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Add to container and remove after animation
        document.getElementById('petals-container').appendChild(petal);
        
        // Remove the petal after animation completes
        setTimeout(() => {
            if (petal && petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, fallDuration * 1000);
    }

    // Create petals periodically
    const createPetals = () => {
        // Create 2-3 petals at once for a more dense effect
        const petalCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < petalCount; i++) {
            setTimeout(createPetal, Math.random() * 100);
        }
    };

    setInterval(createPetals, 200);

    // Add sparkle effect to heart on hover
    const heart = document.querySelector('.heart');
    heart.addEventListener('mouseover', () => {
        heart.style.filter = 'brightness(1.2) drop-shadow(0 0 5px rgba(233, 30, 99, 0.5))';
        setTimeout(() => {
            heart.style.filter = 'none';
        }, 200);
    });
});