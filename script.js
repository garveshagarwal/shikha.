function openFriendshipLetter() {
    window.location.href = "friendship-letter.html";
}

function moveNoButton() {
    const noButton = document.getElementById('no-button');
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust for button width
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Adjust for button height
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}
