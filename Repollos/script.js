// Mostrar un mensaje cuando se haga clic en el logo
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("h1");

  if (logo) {
    logo.addEventListener("click", () => {
      alert("¡Pollo Repollo te saluda con un Chicken Banana! 🍌🐔");
    });
  }

  // Efecto al pasar el mouse sobre el título
  if (titulo) {
    titulo.addEventListener("mouseover", () => {
      titulo.style.color = "#ff6600";
      titulo.style.transform = "scale(1.05)";
    });

    titulo.addEventListener("mouseout", () => {
      titulo.style.color = "";
      titulo.style.transform = "scale(1)";
    });
  }
});
