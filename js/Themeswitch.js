const html = document.getElementById("html");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
} else {
    html.classList.remove("dark");
}

addEventListener("DOMContentLoaded", (event) => {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
        } else {
            html.classList.add("dark");
        }
    });
});
