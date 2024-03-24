function loadContent(page) {
    fetch(page)
      .then(response => response.text())
      .then(html => {
        document.getElementById('main-content').innerHTML = html;
        // Cargar y ejecutar scripts JavaScript asociados a la página cargada
        const scripts = document.getElementById('main-content').querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          newScript.src = script.src;
          document.body.appendChild(newScript);
        });
      })
      .catch(error => console.error('Error al cargar la página:', error));
}
