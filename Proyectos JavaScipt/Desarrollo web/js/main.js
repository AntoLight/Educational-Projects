(function () {
    "use strict";
    var regalo = document.getElementById("regalo");
    document.addEventListener("DOMContentLoaded", function () {
        var map = L.map("mapa").setView([-34.912008, -417.942892], 18);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([-34.912008, -417.942892])
            .addTo(map)
            .bindPopup("La casa de los Gamers")
            .openPopup();

        // Var Datos de Usuario
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");

        // Var Pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_dosdias = document.getElementById("pase_dosdias");
        var pase_completo = document.getElementById("pase_completo");

        // Var Botones y Divs
        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var lista_productos = document.getElementById("lista-productos");
        var suma = document.getElementById("suma-total");

        //Extras
        var camisas = document.getElementById("camisa_evento");
        var etiquetas = document.getElementById("etiquetas");

        //Eventos
        if (document.getElementById("calcular")) {
            calcular.addEventListener("click", calcularMontos);
            pase_dia.addEventListener("blur", mostrarDias);
            pase_dosdias.addEventListener("blur", mostrarDias);
            pase_completo.addEventListener("blur", mostrarDias);
            nombre.addEventListener("blur", validarCampos);
            apellido.addEventListener("blur", validarCampos);
            email.addEventListener("blur", validarCampos);
            email.addEventListener("blur", validarMail);

            // Eventos de Validacion
            function validarCampos() {
                if (this.value == "") {
                    errorDiv.style.display = "block";
                    errorDiv.innerHTML = "Este campo es obligatorio";
                    errorDiv.style.border = "1px solid red";
                    this.style.border = "1px solid red";
                    errorDiv.style.padding = "10px";
                    errorDiv.style.textAlign = "center";
                } else {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid #cccccc";
                }
            }
            function validarMail() {
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = "none";
                    this.style.border = "1px solid #cccccc";
                } else {
                    errorDiv.style.display = "block";
                    errorDiv.innerHTML = "Este Email no existe";
                    errorDiv.style.border = "1px solid red";
                    this.style.border = "1px solid red";
                    errorDiv.style.padding = "10px";
                    errorDiv.style.textAlign = "center";
                }
            }
            // Evento de suma y total
            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === "") {
                    alert("Elija un Regalo");
                    regalo.focus();
                } else {
                    var boletoDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar =
                        boletoDia * 30 +
                        boletos2Dias * 45 +
                        boletoCompleto * 50 +
                        cantCamisas * 10 * 0.93 +
                        cantEtiquetas * 2;

                    var listadoProductos = [];
                    if (boletoDia >= 1) {
                        listadoProductos.push(`Pases por un dia: ${boletoDia}`);
                    }
                    if (boletos2Dias >= 1) {
                        listadoProductos.push(`Pases por dos dias: ${boletos2Dias}`);
                    }
                    if (boletoCompleto >= 1) {
                        listadoProductos.push(`Pases completos: ${boletoCompleto}`);
                    }
                    if (cantCamisas >= 1) {
                        listadoProductos.push(`Camisetas: ${cantCamisas}`);
                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(`Etiquetas: ${cantEtiquetas * 10}`);
                    }
                    lista_productos.innerHTML = "";
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + "<br/>";
                    }
                    suma.innerHTML = "$" + totalPagar.toFixed(2);
                }
            }
            // Mostrar dias segun Boletos
            function mostrarDias() {
                var boletoDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];

                if (boletoDia > 0) {
                    diasElegidos.push("viernes");
                }
                if (boletos2Dias > 0) {
                    diasElegidos.push("viernes", "sabado");
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push("viernes", "sabado", "domingo");
                }
                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = "block";
                }
            }
        }
    }); // DOM Content Loaded
})();

$(function () {
    //Lettering
    $(".nombre-sitio").lettering();

    //Menu-fijo
    var windowHeight = $(window).height();
    var barraAltura = $(".barra").innerHeight();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $(".barra").addClass("fixed");
            $("body").css({ "margin-top": barraAltura + "px" });
        } else {
            $(".barra").removeClass("fixed");
            $("body").css({ "margin-top": "0px" });
        }
    });

    //Programa-de-Conferencias
    $(".programa-evento .info-curso:first").show();
    $(".menu-programa a:first").addClass("activo");
    $(".menu-programa a").on("click", function () {
        $(".ocultar").hide();
        $(".menu-programa a").removeClass("activo");
        $(this).addClass("activo");
        var enlace = $(this).attr("href");
        $(enlace).fadeIn(1000);
        return false;
    });

    //Menu-Responsive
    $(".menu-mobile").on("click", function () {
        $(".navegacion-principal").slideToggle();
        console.log("hola");
    });

    //Animaciones-para-los-Numeros
    $(".resumen-evento li:nth-child(1) p").animateNumber({ number: 6 }, 1200);
    $(".resumen-evento li:nth-child(2) p").animateNumber({ number: 15 }, 1200);
    $(".resumen-evento li:nth-child(3) p").animateNumber({ number: 3 }, 1500);
    $(".resumen-evento li:nth-child(4) p").animateNumber({ number: 9 }, 1500);

    //Cuenta-Regresiva
    $(".cuenta-regresiva").countdown("2021/12/10 09:00:00", function (event) {
        $("#dias").html(event.strftime("%D"));
        $("#horas").html(event.strftime("%H"));
        $("#minutos").html(event.strftime("%M"));
        $("#segundos").html(event.strftime("%S"));
    });
});
