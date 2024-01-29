const redBtn = document.getElementById("red-btn");
const yellowBtn = document.getElementById("yellow-btn");
const greenBtn = document.getElementById("green-btn");

const lights = document.querySelectorAll(".light");

redBtn.addEventListener("click", () => {
    lights.forEach((light) => {
        if (light.classList.contains("red")) {
            light.style.opacity = 1;
        } else {
            light.style.opacity = 0.3;
        }
    });
});

yellowBtn.addEventListener("click", () => {
    lights.forEach((light) => {
        if (light.classList.contains("yellow")) {
            light.style.opacity = 1;
        } else {
            light.style.opacity = 0.3;
        }
    });
});

greenBtn.addEventListener("click", () => {
    lights.forEach((light) => {
        if (light.classList.contains("green")) {
            light.style.opacity = 1;
        } else {
            light.style.opacity = 0.3;
        }
    });
});