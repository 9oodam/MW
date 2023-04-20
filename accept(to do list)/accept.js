const savedNickname = localStorage.getItem("userNickname");
const savedName = localStorage.getItem("userName");
const savedPassword = localStorage.getItem("userPassword");

document.getElementById("nickname").textContent = savedNickname;
document.getElementById("name").textContent = savedName;
document.getElementById("password").textContent = savedPassword;

const acceptButton = document.getElementById("accept");
const rejectButton = document.getElementById("reject");

acceptButton.addEventListener("click", function() {
    console.log("User accepted");
});

rejectButton.addEventListener("click", function() {
    console.log("User rejected");
});