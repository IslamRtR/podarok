document.getElementById("surprise-btn").addEventListener("click", function() {
    let message = document.getElementById("message");
    message.classList.toggle("hidden");
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let noBtn = this;
    let maxX = window.innerWidth - noBtn.clientWidth;
    let maxY = window.innerHeight - noBtn.clientHeight;
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
