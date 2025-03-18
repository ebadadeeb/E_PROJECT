

document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.querySelector(".chatbot-container");
    const chatbotToggle = document.querySelector(".chatbot-toggle");
    const chatbotClose = document.querySelector(".chatbot-close");
    const chatbotInput = document.getElementById("chatbot-input-field");
    const chatbotSendBtn = document.getElementById("chatbot-send-btn");
    const chatbotMessages = document.querySelector(".chatbot-messages");

    // Toggle chatbot visibility
    chatbotToggle.addEventListener("click", () => chatbotContainer.style.display = "block");
    chatbotClose.addEventListener("click", () => chatbotContainer.style.display = "none");

    // Basic responses
    const responses = {
        "hello": "Hello! How can I assist you with today?",
        "how does the auction work": "Our auctions allow users to bid on furniture. The highest bid at the end wins the item.",
        "do you offer delivery": "Yes! We offer delivery services for auctioned furniture. Fees may apply based on location.",
        "what payment methods do you accept": "We accept credit/debit cards, PayPal, and bank transfers.",
        "bye": "Goodbye! Feel free to return anytime if you have more questions."
    };

    // Function to handle messages
    function sendMessage() {
        const userMessage = chatbotInput.value.trim().toLowerCase();
        if (userMessage === "") return;

        // Display user message
        chatbotMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;
        chatbotInput.value = "";

        // Display bot response
        setTimeout(() => {
            const botResponse = responses[userMessage] || "I'm not sure about that. Can you ask something related to furniture auctions?";
            chatbotMessages.innerHTML += `<div class="bot-message">${botResponse}</div>`;
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }

    // Send message on button click or Enter key press
    chatbotSendBtn.addEventListener("click", sendMessage);
    chatbotInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    // Make chatbot draggable
    chatbotContainer.addEventListener("mousedown", (event) => {
        let shiftX = event.clientX - chatbotContainer.getBoundingClientRect().left;
        let shiftY = event.clientY - chatbotContainer.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            chatbotContainer.style.left = pageX - shiftX + "px";
            chatbotContainer.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", () => document.removeEventListener("mousemove", onMouseMove), { once: true });
    });

    chatbotContainer.ondragstart = () => false;
});