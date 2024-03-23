const button = document.querySelector(".button");
const input = document.querySelector(".input");
const hataMesajı = document.querySelector(".hata-msg");
const hataİconu = document.querySelector(".hata");

button.addEventListener("click", () => {
  veri = input.value;
  if (veri.includes("@gmail.com") || veri.includes("@hotmail.com")) {
    console.log("başarılı");
  } else {
    hataMesajı.style.display = "block";
    hataİconu.style.display = "inline-block";
  }
});
