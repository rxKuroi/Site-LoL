const h1 = document.getElementById("sommaire_button");
const sommaire = document.getElementById("sommaire");
const Top = document.getElementById("Top");

h1.addEventListener("click", () => {
  if (sommaire.style.display === "block") {
    sommaire.style.display = "none";
  } else {
    sommaire.style.display = "block";
  }
});

Top.addEventListener("click", () => {
  if (Top.style.display === "block") {
    Top.style.display = "none";
  } else {
    Top.style.display = "block";
  }
});
