// Function to dynamically load the header and footer
async function loadComponent(id, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(id).innerHTML = content;
        } else {
            console.error(`Failed to load ${filePath}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Load the header and footer
// loadComponent("header-placeholder", "header.html");
loadComponent("footer-placeholder", "footer.html");
loadComponent("scrollTopButton-placeholder", "scrollTopButton.html");


