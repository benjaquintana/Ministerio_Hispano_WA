(function() {
    "use strict";
    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function(){

        //Campo Datos Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //Campo Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        //Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        calcular.addEventListener('click', calcularMontos);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarEmail);

        function validarCampos(){
            if(this.value == '') {
                errorDiv.style.display= 'block';
                errorDiv.innerHTML= 'Este campo es obligatorio';
                this.style.border= '1px solid red';
                errorDiv.style.border= '1px solid red';
            } 
            else {
                errorDiv.style.display= 'none';
                this.style.border= '1px solid #cccccc';
            }
        }

        function validarEmail(){
            if (this.value.indexOf('@') > -1){
                errorDiv.style.display= 'none';
                this.style.border= '1px solid #cccccc';
            }
            else {
                errorDiv.style.display= 'block';
                errorDiv.innerHTML= 'El correo debe tener @';
                this.style.border= '1px solid red';
                errorDiv.style.border= '1px solid red';
            }
        }

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === '') {
                alert("Debes elegir un regalo");
                regalo.focus();
            } 
            else {
                var boletosDia = parseInt (pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt (pase_dosdias.value, 10) || 0,
                    boletosCompletos = parseInt (pase_completo.value, 10) || 0,
                    cantCamisas = parseInt (camisas.value, 10) || 0,
                    cantEtiquetas = parseInt (etiquetas.value, 10) || 0;

                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompletos * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
               
                var listadoProductos = [];
                if(boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pase por Día');
                }
                if(boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pase por 2 Día');
                }
                if(boletosCompletos >= 1) {
                    listadoProductos.push(boletosCompletos + ' Pase Completo');
                }
                if(cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas');
                }
                if(cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas');
                }
                lista_productos.style.display = "block"
                lista_productos.innerHTML = '';
                for(var i = 0; i< listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }
                suma.innerHTML = "$ " + totalPagar.toFixed(2);
            }
        }

        function mostrarDias() {
            var boletosDia = parseInt (pase_dia.value, 10) || 0,
                boletos2Dias = parseInt (pase_dosdias.value, 10) || 0,
                boletosCompletos = parseInt (pase_completo.value, 10) || 0;

            var diasElegidos = [];
            if (boletosDia > 0) {
                diasElegidos.push('viernes');
                console.log(diasElegidos);
            }
            if (boletos2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos);
            }
            if (boletosCompletos > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
                console.log(diasElegidos);
            }
            for(var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }
        }

    })
})();

$(function(){
    
    //Programa de Conferencia
    $('.programa_evento .info_curso:first').show();
    $('.menu_programa a:first').addClass('activo');
    $('.menu_programa a').on('click', function() {
        $('.menu_programa a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace=$(this).attr('href');
        $(enlace).fadeIn(1000);
        return(false);
    });

    //Cuenta regrasiva
    $('.cuenta_regresiva').countdown('2020/06/1 00:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
        
    //Campo de mapa
    var map = L.map('mapa').setView([47.2829,-122.3324], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([47.2829,-122.3324]).addTo(map)
        .bindPopup('<b>Iglesia de Federal Way</b>')
        .openPopup();

    //Listado de Ministerios
    $('.lista_ministerios .info_ministerio:first').show();
    $('.menu_ministerios a:first').addClass('activo');
    $('.menu_ministerios a').on('click', function() {
        $('.menu_ministerios a').removeClass('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();
        var enlace=$(this).attr('href');
        $(enlace).fadeIn(1000);
        return(false);
    });
});