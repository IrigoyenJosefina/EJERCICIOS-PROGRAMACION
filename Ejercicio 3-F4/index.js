var btnSumar = document.getElementById("btnSumar");
var btnAgregar = document.getElementById("btnAgregar");
var inputProducto = document.getElementById("inputProducto");
var inputCantidad = document.getElementById("inputCantidad");
btnAgregar.addEventListener("click", function () {
    console.log(inputProducto.innerHTML);
});
btnSumar.addEventListener("click", function () {
    console.log(Number(inputCantidad.value));
});
