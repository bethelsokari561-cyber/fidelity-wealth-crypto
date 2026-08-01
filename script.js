// Fidelity Wealth Crypto

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Fidelity Wealth Crypto 🚀");
});
