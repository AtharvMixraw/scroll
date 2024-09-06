const slider = document.getElementById('slider');
const message = document.getElementById('message');
let isDragging = false;
let startY = 0, startX = 0;

// Mouse and touch event listeners
slider.addEventListener('mousedown', startDrag);
slider.addEventListener('touchstart', startDrag);
document.addEventListener('mousemove', onDrag);
document.addEventListener('touchmove', onDrag);
document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
}

function onDrag(e) {
    if (!isDragging) return;

    let currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    let currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    // Calculate new position
    let diffX = currentX - startX;
    let diffY = currentY - startY;
    startX = currentX;
    startY = currentY;

    // Update slider position
    let newTop = slider.offsetTop + diffY;
    let newLeft = slider.offsetLeft + diffX;

    // Keep the slider within the viewport
    newTop = Math.max(0, Math.min(window.innerHeight - slider.offsetHeight, newTop));
    newLeft = Math.max(0, Math.min(window.innerWidth - slider.offsetWidth, newLeft));

    slider.style.top = `${newTop}px`;
    slider.style.left = `${newLeft}px`;

    // Check if slider is at the bottom of the page
    if (newTop >= window.innerHeight - slider.offsetHeight) {
        message.classList.remove('hidden');
        message.classList.add('visible');
    }
}

function stopDrag() {
    isDragging = false;
}
