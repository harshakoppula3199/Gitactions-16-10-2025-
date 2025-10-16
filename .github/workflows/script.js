function showMessage() {
  const messageElement = document.getElementById("message");
  const messages = [
    "🎉 GitHub Actions is awesome!",
    "🚀 Your site just deployed automatically!",
    "💡 Continuous deployment made easy!",
    "✨ Hello from JavaScript!"
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  messageElement.textContent = randomMessage;
}
