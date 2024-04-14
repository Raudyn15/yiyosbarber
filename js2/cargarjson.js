function cargarProductos() {
    fetch('productos.json')
      .then(response => response.json())
      .then(json => {
        var container = document.getElementById("productos");
        var productosHTML = '<div class="row">';
        json.productos.forEach(function(producto) {
          productosHTML += '<div class="col-sm-4">' + producto + '</div>';
        });
        productosHTML += '</div>';
        container.innerHTML = productosHTML;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Llama a la función para cargar los productos al cargar la página
cargarProductos();