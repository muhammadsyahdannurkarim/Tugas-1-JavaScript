document.getElementsByTagName("head")[0].appendChild(document.createElement("title"));
document.getElementsByTagName("title")[0].innerText = "website kosong";

// inputan username
var username = document.createElement("input");
username.setAttribute("type", "text");
username.setAttribute("placeholder", "Input Username");
document.body.appendChild(username);

// inputan password
var Password = document.createElement("input");
Password.setAttribute("type", "password");
Password.setAttribute("placeholder", "Input Password");
document.body.appendChild(Password);

// Tombol input
var tombol = document.getElementById("click");

function Masuk() {
  document.getElementById("teks").innerText = "Anda Telah Masuk Ke Website Kosong";
}

tombol.addEventListener("click", Masuk);
