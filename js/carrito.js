const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");

if(productosEnCarrito){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "" ;

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = 
        `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.imagen}">
            <div class="carrito-producto-titulo">
                <small>Nombre</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${producto.id}" class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
        `

        contenedorCarritoProductos.append(div);
    });

}

console.log(productosEnCarrito)

// <div id="carrito-productos" class="carrito-productos disabled">
//     <div class="carrito-producto">
//     <img class="carrito-producto-imagen" src="/assets/img/abrigos/01.jpg" alt="">
//     <div class="carrito-producto-titulo">
//         <small>Nombre</small>
//         <h3>Abrigo 01</h3>
//     </div>
//     <div class="carrito-producto-cantidad">
//         <small>Cantidad</small>
//         <p>1</p>
//     </div>
//     <div class="carrito-producto-precio">
//         <small>Precio</small>
//         <p>$1000</p>
//     </div>
//     <div class="carrito-producto-subtotal">
//         <small>Subtotal</small>
//         <p>$1000</p>
//     </div>
//     <button class="carrito-producto-eliminar"><i class="bi bi-trash-fill"></i></button>
// </div>