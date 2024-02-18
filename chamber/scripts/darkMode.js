const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "💡";
    } else {
        main.style.background = "var(--accent)";
        main.style.color = "#000";
        modeButton.textContent = "🌑"
    }
})