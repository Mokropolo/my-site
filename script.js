const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  msg.textContent = "Работает! Сейчас: " + new Date().toLocaleTimeString();
});
