// Floating bubbles moving across the screen
document.addEventListener('DOMContentLoaded', function () {
    const background = document.querySelector('.background');
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('floating-bubble');

        const size = Math.random() * 30 + 10; // 10px to 40px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        const xStart = Math.random() * 100;
        const yStart = Math.random() * 100;
        const xEnd = Math.random() * 100;
        const yEnd = Math.random() * 100;

        bubble.style.setProperty('--x-start', `${xStart}vw`);
        bubble.style.setProperty('--y-start', `${yStart}vh`);
        bubble.style.setProperty('--x-end', `${xEnd}vw`);
        bubble.style.setProperty('--y-end', `${yEnd}vh`);
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        bubble.style.animationDuration = `${20 + Math.random() * 20}s`;

        background.appendChild(bubble);
    }
});
