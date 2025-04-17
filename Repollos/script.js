document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const titulo = document.querySelector("h1");

  if (logo) {
    logo.addEventListener("click", () => {
      alert("¡Pollo Repollo activado! 🍌🐔");

      // Guardar el src original del logo
      const originalSrc = logo.src;

      // Cambiar la imagen del logo a una divertida (puedes cambiar la URL si quieres)
      logo.src = "https://media.tenor.com/wcA4CL5X6T0AAAAM/chicken-dance.gif";

      // Agregar clase para girar
      logo.style.transition = "transform 0.6s";
      logo.style.transform = "rotate(360deg) scale(1.2)";

      // Regresar al estado original después de 3 segundos
      setTimeout(() => {
        logo.src = originalSrc;
        logo.style.transform = "rotate(0deg) scale(1)";
      }, 3000);
    });
  }

  // Efecto sobre el título
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

