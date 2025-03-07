document.addEventListener('DOMContentLoaded', () => {
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomiza as propriedades da pétala
        const startPositionLeft = Math.random() * window.innerWidth;
        const rotationAngle = Math.random() * 360;
        const fallDuration = Math.random() * 3 + 3; // 3-6 segundos
        const size = Math.random() * 10 + 15; // 15-25px
        const opacity = Math.random() * 0.3 + 0.7; // 0.7-1.0
        
        // Aplica estilos
        petal.style.left = `${startPositionLeft}px`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.transform = `rotate(${rotationAngle}deg)`;
        petal.style.animationDuration = `${fallDuration}s`;
        petal.style.opacity = opacity;
        
        // Variação sutil de cor
        const hue = Math.random() * 20 + 340; // tons de rosa
        const saturation = Math.random() * 20 + 80; // 80-100%
        const lightness = Math.random() * 10 + 85; // 85-95%
        petal.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Adiciona a pétala ao container e remove após a animação
        document.getElementById('petals-container').appendChild(petal);
        setTimeout(() => {
            if (petal && petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, fallDuration * 1000);
    }

    // Cria pétalas periodicamente
    const createPetals = () => {
        const petalCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < petalCount; i++) {
            setTimeout(createPetal, Math.random() * 100);
        }
    };

    setInterval(createPetals, 200);

    // Efeito de brilho no coração ao passar o mouse
    const heart = document.querySelector('.heart');
    heart.addEventListener('mouseover', () => {
        heart.style.filter = 'brightness(1.2) drop-shadow(0 0 5px rgba(224, 122, 145, 0.5))';
        setTimeout(() => {
            heart.style.filter = 'none';
        }, 200);
    });
});
