const botonProyecto1 = document.querySelectorAll('.proyecto')[0];
const botonProyecto2 = document.querySelectorAll('.proyecto')[1];
const botonProyecto3 = document.querySelectorAll('.proyecto')[2];

botonProyecto1.addEventListener('click', () => mostrarProyecto(0));
botonProyecto2.addEventListener('click', () => mostrarProyecto(1));
botonProyecto3.addEventListener('click', () => mostrarProyecto(2));


function mostrarProyecto(boton) {
    let expandir = document.querySelectorAll(".proyecto img")[boton];
    
    const imagenCombinar = "/src/icons8-combinar-archivos-48.png";
    const imagenDividir = "/src/icons8-dividir-archivos-48.png";
    let imagenActual = expandir.attributes[0].nodeValue;
    
    if (imagenActual === imagenDividir) {
      expandir.setAttribute("src", imagenCombinar);
      imagenActual = imagenCombinar;
    } else {
      expandir.setAttribute("src", imagenDividir);
      imagenActual = imagenDividir;
    }
  
    const infoOculta = document.querySelectorAll(".info_oculta_real")[boton];
    infoOculta.classList.toggle('info_oculta');
}