// dashboard.js
fetch("../navbar/navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-placeholder").innerHTML = html;
  })
  .catch((er) => {
    console.log("Failed to load");
  });
