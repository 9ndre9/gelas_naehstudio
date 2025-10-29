async function loadHTML(id, file) {
  const element = document.getElementById(id);
  try {
    const response = await fetch(file);
    if (response.ok) {
      element.innerHTML = await response.text();
    } else {
      element.innerHTML = "Fehler beim Laden von " + file;
    }
  } catch (error) {
    element.innerHTML = "Fehler: " + error;
  }
}

loadHTML("header", "partials/header.html");
loadHTML("nav", "partials/nav.html");
loadHTML("footer", "partials/footer.html");
