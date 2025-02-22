document.getElementById("surprise-btn").addEventListener("click", function() {
    let message = document.getElementById("message");
    message.classList.toggle("hidden");
});

function moveButton() {
    let noBtn = document.getElementById("no-btn");
    let maxX = window.innerWidth - noBtn.clientWidth;
    let maxY = window.innerHeight - noBtn.clientHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Обрабатываем наведение мыши (для ПК)
document.getElementById("no-btn").addEventListener("mouseover", moveButton);

// Обрабатываем касание (для телефонов)
document.getElementById("no-btn").addEventListener("touchstart", moveButton);
