document.getElementById('scrollBox').addEventListener('scroll', function() {
    const message = document.getElementById('message');
    // Display the message as soon as scrolling occurs
    if (this.scrollTop > 0) {
        message.classList.remove('hidden');
        message.classList.add('visible');
    }
});
