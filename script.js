function toggleMode() {
  const html = document.documentElement
/* Toggle the theme
   if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // Also do the same
  html.classList.toggle("light");

  // Change the avatar image and alt
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img")

  if(html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar-light.png')
    alt.setAttribute("alt", "Foto de Jonathan Gabriel, com fundo bege")
  } else {
    img.setAttribute('src', './assets/avatar-dark.png')
    alt.setAttribute("alt", "Foto de Jonathan Gabriel, com fundo azul claro")
  }

}
