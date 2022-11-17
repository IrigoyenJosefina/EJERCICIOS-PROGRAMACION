const btnSumar = document.getElementById("btnSumar") as HTMLButtonElement;
const btnAgregar = document.getElementById("btnAgregar") as HTMLButtonElement;
let inputProducto = document.getElementById("inputProducto") as HTMLInputElement;
let inputCantidad = document.getElementById("inputCantidad") as HTMLInputElement;


btnAgregar.addEventListener("click", ()=>{
    console.log(inputProducto.innerHTML);
});

btnSumar.addEventListener("click", ()=>{
    console.log(Number(inputCantidad.value));
});

