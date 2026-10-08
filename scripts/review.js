document.addEventListener("DOMContentLoaded", () => {
    // Key for localStorage
    const STORAGE_KEY = "reviewCounter";

    // Retrieve current count from localStorage or default to 0
    let count = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;

    // Increment counter
    count++;

    // Save updated count back to localStorage
    localStorage.setItem(STORAGE_KEY, count);

    // Update display on page
    const counterDisplay = document.getElementById("review-count");
    if (counterDisplay) {
        counterDisplay.textContent = count;
    }

    // Set Footer Date Information
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});