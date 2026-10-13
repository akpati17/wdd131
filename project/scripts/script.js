// --- 1. Arrays and Objects ---
const products = [
    { id: 1, name: "Bamboo Desk Organizer", category: "decor", price: 24.99, image: "images/placeholder1.jpg" },
    { id: 2, name: "Recycled Glass Vase", category: "decor", price: 18.50, image: "images/placeholder2.jpg" },
    { id: 3, name: "Organic Cotton Towel", category: "kitchen", price: 12.00, image: "images/placeholder1.jpg" },
    { id: 4, name: "Beeswax Food Wraps", category: "kitchen", price: 15.00, image: "images/placeholder2.jpg" }
];

// --- 2. Function: Display Products using Array Methods & Template Literals ---
function displayProducts(itemsToDisplay) {
    const container = document.getElementById("product-container");
    if (!container) return; // Exit if not on the catalog page

    container.innerHTML = ""; // Clear current content

    // Array method (.forEach) and EXCLUSIVELY template literals
    itemsToDisplay.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
        `;
        container.appendChild(card);
    });
}

// --- 3. Function: Handle Newsletter Form Submission with localStorage & Conditionals ---
function handleNewsletter(event) {
    event.preventDefault(); // Prevent page refresh

    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("useremail");
    const welcomeDiv = document.getElementById("welcome-message");

    if (!nameInput || !emailInput) return;

    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();

    // Conditional branching validation
    if (userName === "" || userEmail === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Use localStorage to save user data
    localStorage.setItem("ecoSubscriberName", userName);

    // DOM Interaction & Template Literals
    welcomeDiv.innerHTML = `
        <p>Thank you for subscribing, <strong>${userName}</strong>! We have saved your email (${userEmail}) locally.</p>
    `;

    nameInput.value = "";
    emailInput.value = "";
}

// --- 4. Event Listeners & Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Initial catalog render if on catalog page
    displayProducts(products);

    // Filter button event listeners (Conditional branching based on category)
    const allBtn = document.getElementById("all-btn");
    const decorBtn = document.getElementById("decor-btn");
    const kitchenBtn = document.getElementById("kitchen-btn");

    if (allBtn && decorBtn && kitchenBtn) {
        allBtn.addEventListener("click", () => displayProducts(products));

        decorBtn.addEventListener("click", () => {
            const filtered = products.filter(p => p.category === "decor");
            displayProducts(filtered);
        });

        kitchenBtn.addEventListener("click", () => {
            const filtered = products.filter(p => p.category === "kitchen");
            displayProducts(filtered);
        });
    }

    // Form submission listener
    const form = document.getElementById("newsletter-form");
    if (form) {
        form.addEventListener("submit", handleNewsletter);
    }

    // Check localStorage for returning visitors
    const savedName = localStorage.getItem("ecoSubscriberName");
    const welcomeDiv = document.getElementById("welcome-message");
    if (savedName && welcomeDiv) {
        welcomeDiv.innerHTML = `<p>Welcome back, <strong>${savedName}</strong>! Glad to see you again.</p>`;
    }
});