// ================= CARRITO =================

let cantidadCarrito = 0;

function agregarCarrito(producto) {

    cantidadCarrito++;

    document.getElementById("contador").textContent =
        cantidadCarrito;

    alert(
        producto + " fue agregado al carrito."
    );
}


// ================= BUSCADOR =================

const buscador =
    document.getElementById("buscador");

const categoria =
    document.getElementById("categoria");

const productos =
    document.querySelectorAll(".producto");


function filtrarProductos() {

    const texto =
        buscador.value.toLowerCase();

    const categoriaSeleccionada =
        categoria.value;


    productos.forEach(function(producto) {

        const nombre =
            producto.dataset.nombre.toLowerCase();

        const categoriaProducto =
            producto.dataset.categoria;


        const coincideNombre =
            nombre.includes(texto);


        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            categoriaProducto === categoriaSeleccionada;


        if (
            coincideNombre &&
            coincideCategoria
        ) {

            producto.style.display = "block";

        } else {

            producto.style.display = "none";

        }

    });

}


buscador.addEventListener(
    "input",
    filtrarProductos
);


categoria.addEventListener(
    "change",
    filtrarProductos
);


// ================= FORMULARIO =================

const formulario =
    document.getElementById("formulario");


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        alert(
            "Gracias " +
            nombre +
            ". Tu mensaje fue enviado."
        );

        formulario.reset();

    }
);