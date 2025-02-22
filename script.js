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

// Функция для создания сердечек
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    document.querySelector(".hearts-container").appendChild(heart);

    let randomX = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;

    heart.style.left = `${randomX}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Создаем сердечки каждую секунду
setInterval(createHeart, 10);
