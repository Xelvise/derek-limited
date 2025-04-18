function loadIframe(url, title) {
    // Create modal container
    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;

    // Modify URL to ensure it's for social media content
    url = url.replace("ghostwriter", "social-media-content");

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.title = title;
    iframe.style.cssText = `
        width: 90%;
        height: 90%;
        border: none;
        border-radius: 8px;
        background: white;
    `;

    // Create close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "×";
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    // Add click handler to close modal
    closeBtn.onclick = () => modal.remove();
    modal.onclick = e => {
        if (e.target === modal) modal.remove();
    };

    // Listen for messages from the iframe
    window.addEventListener("message", event => {
        // Check the origin of the message for security
        if (event.origin === new URL(url).origin) {
            if (event.data === "closeModal") {
                modal.remove(); // Close the modal
            }
        }
    });

    // Assemble and show modal
    modal.appendChild(iframe);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
}
