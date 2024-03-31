

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("dynamicNav");

  const navItems = [
    {name: "Post & Comments", loadContent: "/postComments/postCommentsController.html"},
    {name: "Users", loadContent: "/users/userController.html"},
    {name: "WorldStats", loadContent: "/stats/worldStats/worldStatsController.html"},
    {name: "Cryptos", loadContent: "/stats/crypto/cryptoController.html"},
  ];

   // Populate navigation dynamically
   navItems.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("nav-item");
      const a = document.createElement("a");
      a.classList.add("nav-link");
      a.textContent = item.name;
      a.href = item.loadContent;
      a.onclick = function () {
          loadContent(item.loadContent);
          return false; // Prevent default navigation behavior
      };
      li.appendChild(a);
      nav.appendChild(li);
  });
});


function loadContent(page) {
  const container = document.getElementById('main-content');
  container.replaceChildren()
    fetch(page)
      .then(response => response.text())
      .then(html => {
        container.innerHTML = html;
        // Cargar y ejecutar scripts JavaScript asociados a la página cargada
        scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.src = script.src;
          document.body.appendChild(newScript);
        });
      })
      .catch(error => console.error('Error al cargar la página:', error));
}


//Evitar que se sume la altura del main-content con el navBar
window.onload = function() {
  var navbarHeight = document.querySelector('nav').offsetHeight;
  var mainContent = document.getElementById('main-content');
  var availableHeight = window.innerHeight - navbarHeight;
  mainContent.style.minHeight = availableHeight + 'px';
};
