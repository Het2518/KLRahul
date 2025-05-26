// This file contains the JavaScript code for the KL Rahul landing page.
// It may include functionality such as event handling, animations, or dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = "Welcome to KL Rahul's Official Homepage!";
    document.body.appendChild(welcomeMessage);

    const button = document.createElement('button');
    button.textContent = "Learn More";
    button.addEventListener('click', () => {
        alert("Stay tuned for updates on KL Rahul's career and achievements!");
    });
    document.body.appendChild(button);
});