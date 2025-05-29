function loadChat() {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";
  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "chat-message " + msg.sender;
    div.innerText = `${msg.sender}: ${msg.text}`;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage(e, sender) {
  e.preventDefault();
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push({ sender, text });
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  input.value = "";
  loadChat();
}

window.onload = loadChat;
