
//jQuery

//COMPRA DE BOLETOS

(function(){
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){
        //Datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var apellido = document.getElementById('email');

        //Compra de entradas
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var btnRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        //extras
        var etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');



        if (document.getElementById('calcular')) {

            calcular.addEventListener('click', calcularPrecio);

            pase_dia.addEventListener('blur', mostrarDias);
            pase_dosdias.addEventListener('blur', mostrarDias);
            pase_completo.addEventListener('blur', mostrarDias);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);

            email.addEventListener('blur', validarMail);

            function validarCampos(){
                if (this.value =='') {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "Este campo es obligatorio";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                }else{
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }
            }
            function validarMail(){
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }else{
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "Introduzca un correo válido";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                }
            }


            function calcularPrecio(event){
                event.preventDefault();
                if(regalo.value === ''){
                    alert("Debes elegir un regalo");
                    regalo.focus();
                }else{
                    var boletosDia = parseInt(pase_dia.value, 10) || 0,
                        boletos2Dias = parseInt(pase_dia.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                    var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                    var listadoProductos = [];
                    if(boletosDia >= 1){
                        listadoProductos.push(boletosDia + 'Pase(s) por día');
                    }

                    if(boletos2Dias >= 1){
                        listadoProductos.push(boletos2Dias + 'Pase(s) por 2 días');
                    }

                    if(boletoCompleto >= 1){
                        listadoProductos.push(boletoCompleto + 'Pase(s) completos');
                    }
                    if(cantCamisas >= 1){
                        listadoProductos.push(cantCamisas + 'Camisa(s)');
                    }
                    if(cantEtiquetas >= 1){
                        listadoProductos.push(cantEtiquetas + 'Paquete(s) de etiquetas');
                    }

                    lista_productos.style.display = "block";
                    lista_productos.innerHTML = '';
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    }

                    suma.innerHTML = "$" + totalPagar.toFixed(2);
                }
            }
            function mostrarDias(){
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;

                var diasElegidos = [];
                if (boletosDia > 0){
                    diasElegidos.push('viernes');
                }else{}
                if(boletos2Dias > 0){
                    diasElegidos.push('viernes', 'sabado');
                }else{}
                if(boletoCompleto > 0){
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                }else{}
                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = 'block';
                }
            }

        }

    });
})();


$(function(){
    //-------------- PLUGUINS--------------
    //NAVEGACION

    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > windowHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        }else{
            $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    //MENU MOVIL

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    //TABULOUS

    $('.programa-evento .info-curso:first').show();

    $('.menu-programa a:first').addClass('activo');

    $('.menu-programa a').on('click', function(){
        $('.menu-programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false; //para evitar el brinco
    });


});
