// dashboard.js
fetch("../Header/Header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("InjectingHeader").innerHTML = html;
  })
  .catch((er) => {
    console.log("Failed to load");
  });
