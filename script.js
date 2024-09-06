document.getElementById('scrollBox').addEventListener('scroll', function() {
    const message = document.getElementById('message');
    // Check if user has scrolled to the bottom
    if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        message.classList.remove('hidden');
        message.classList.add('visible');
    }
});
