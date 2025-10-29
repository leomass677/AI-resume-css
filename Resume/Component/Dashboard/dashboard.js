// dashboard.js
// fetch("../navbar/navbar.html")
//   .then((response) => response.text())
//   .then((html) => {
//     document.getElementById("navbar-placeholder").innerHTML = html;
//   })
//   .catch((er) => {
//     console.log("Failed to load");
//   });

// Header.js
fetch("../Header/Header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("Injecting-header").innerHTML = html;
  })
  .catch((er) => {
    console.log("Failed to load");
  });
//
fetch("../navbar/ResponsiveSidebar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("ResponsiveSidebar").innerHTML = html;
  })
  .catch((er) => {
    console.log("Failed to load");
  });
//
