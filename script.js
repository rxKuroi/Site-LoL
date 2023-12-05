const h1 = document.getElementById("sommaire_button");
const sommaire = document.getElementById("sommaire");
const roleTop = document.getElementById("Role-Top");
const roleJgl = document.getElementById("Role-Jgl");
const roleMid = document.getElementById("Role-Mid");
const roleAdc = document.getElementById("Role-Adc");
const roleSup = document.getElementById("Role-Sup");
const Top = document.getElementById("Top");
const Jgl = document.getElementById("Jgl");
const Mid = document.getElementById("Mid");
const Adc = document.getElementById("Adc");
const Sup = document.getElementById("Sup");
const SettImage = document.getElementById("SettImage");
const SettText = document.getElementById("SettText");

h1.addEventListener("click", () => {
  if (sommaire.style.display === "block") {
    sommaire.style.display = "none";
  } else {
    sommaire.style.display = "block";
  }
});

Top.addEventListener("click", () => {
  if (roleTop.style.display === "block") {
    roleTop.style.display = "none";
  } else {
    roleTop.style.display = "block";
  }
});

Jgl.addEventListener("click", () => {
  if (roleJgl.style.display === "block") {
    roleJgl.style.display = "none";
  } else {
    roleJgl.style.display = "block";
  }
});

Mid.addEventListener("click", () => {
  if (roleMid.style.display === "block") {
    roleMid.style.display = "none";
  } else {
    roleMid.style.display = "block";
  }
});

Adc.addEventListener("click", () => {
  if (roleAdc.style.display === "block") {
    roleAdc.style.display = "none";
  } else {
    roleAdc.style.display = "block";
  }
});

Sup.addEventListener("click", () => {
  if (roleSup.style.display === "block") {
    roleSup.style.display = "none";
  } else {
    roleSup.style.display = "block";
  }
});

SettImage.addEventListener("mouseenter", () => {
  SettText.style.opacity = "1";
  SettText.style.display = "block";
});

SettImage.addEventListener("mouseleave", () => {
  SettText.style.opacity = "0";
  SettText.style.display = "none";
});
