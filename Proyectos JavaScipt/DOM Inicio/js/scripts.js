(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    /*var logo = document.getElementById(logo);
    var navegacion = document.querySelectorAll('a');
     
    for(var i = 0; i<navegacion.length; i++) {
      console.log(navegacion[i].innerText)
    }
    
    var enlaces = document.querySelectorAll('#menu ul li a');
    console.log(enlaces)*/
    
    //Crear enlace en el Html
    var enlacesSidebar = document.querySelector('#sidebar ul');
    var nuevaEntrada = document.createElement('li');
    var nuevoEnlace = document.createElement('a');
    nuevoEnlace.setAttribute("href", "#")
    var textoEntrada = document.createTextNode('Entrada 6');
    enlacesSidebar.appendChild(nuevaEntrada)
    nuevaEntrada.appendChild(nuevoEnlace)
    nuevoEnlace.appendChild(textoEntrada)
    //
  });
  
})();