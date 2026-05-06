/**
 * Piedra, papel, tijera, lagarto y Spock
 *
 * Estructura:
 *  - CHOICES / BEATS: tabla declarativa de reglas.
 *  - state: estado mutable centralizado del juego.
 *  - dom: helpers DOM y de animacion.
 *  - modal: helpers de apertura/cierre.
 *  - game: logica de ronda y fin de partida.
 *  - init: cableado de eventos al cargar la pagina.
 */
(function () {
    'use strict';

    // --- Reglas ----------------------------------------------------------
    var CHOICES = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];

    // Cada jugada vence a las jugadas listadas.
    var BEATS = {
        piedra:  ['tijera', 'lagarto'],
        papel:   ['piedra', 'spock'],
        tijera:  ['papel',  'lagarto'],
        lagarto: ['papel',  'spock'],
        spock:   ['piedra', 'tijera']
    };

    var DEFAULT_VICTORIAS = 3;

    // --- Estado ----------------------------------------------------------
    var state = {
        nombre: 'Usuario',
        victoriasObjetivo: DEFAULT_VICTORIAS,
        puntosUsuario: 0,
        puntosMaquina: 0,
        bloqueado: false
    };

    // --- DOM helpers -----------------------------------------------------
    function $(sel) { return document.querySelector(sel); }

    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function limpiarImagenes(prefijo) {
        CHOICES.forEach(function (c) {
            var img = document.querySelector('.' + prefijo + c);
            if (img) img.classList.remove('show');
        });
    }

    function mostrarImagen(prefijo, choice) {
        var img = document.querySelector('.' + prefijo + choice);
        if (img) img.classList.add('show');
    }

    function flash(el) {
        if (!el) return;
        el.classList.remove('flash');
        // Forzar reflow para reiniciar la animacion.
        void el.offsetWidth;
        el.classList.add('flash');
    }

    // --- Modales ---------------------------------------------------------
    function abrirModal(id) {
        var m = document.getElementById(id);
        if (m) m.classList.add('md-show');
    }

    function cerrarModal(id) {
        var m = document.getElementById(id);
        if (m) m.classList.remove('md-show');
    }

    // --- Logica de ronda ------------------------------------------------
    function decidir(usuario, maquina) {
        if (usuario === maquina) return 'empate';
        return BEATS[usuario].indexOf(maquina) !== -1 ? 'gana' : 'pierde';
    }

    function jugar(idxUsuario) {
        if (state.bloqueado) return;

        var choiceUsuario = CHOICES[idxUsuario];
        var idxMaquina    = aleatorio(0, CHOICES.length - 1);
        var choiceMaquina = CHOICES[idxMaquina];

        limpiarImagenes('us');
        limpiarImagenes('ma');
        mostrarImagen('us', choiceUsuario);
        mostrarImagen('ma', choiceMaquina);

        var resultado = decidir(choiceUsuario, choiceMaquina);
        var mensaje;
        if (resultado === 'gana') {
            mensaje = '¡Ganaste!';
            state.puntosUsuario++;
            $('#M-Usuario').innerHTML = state.puntosUsuario;
        } else if (resultado === 'pierde') {
            mensaje = '¡Perdiste!';
            state.puntosMaquina++;
            $('#M-Maquina').innerHTML = state.puntosMaquina;
        } else {
            mensaje = '¡Empate!';
        }
        $('#resultado').innerHTML = mensaje;

        flash($('#versus'));
        flash($('#resultado'));

        if (state.puntosUsuario >= state.victoriasObjetivo) {
            terminarPartida(true);
        } else if (state.puntosMaquina >= state.victoriasObjetivo) {
            terminarPartida(false);
        }
    }

    // --- Reset / fin de partida -----------------------------------------
    function reiniciarMarcador() {
        state.puntosUsuario = 0;
        state.puntosMaquina = 0;
        state.bloqueado = false;
        $('#M-Usuario').innerHTML = 0;
        $('#M-Maquina').innerHTML = 0;
        $('#resultado').innerHTML = '';
        limpiarImagenes('us');
        limpiarImagenes('ma');
    }

    function terminarPartida(gano) {
        state.bloqueado = true;
        $('#final-titulo').innerHTML  = gano ? '¡Ganaste!' : '¡Perdiste!';
        $('#final-mensaje').innerHTML = gano
            ? '¡Felicidades ' + state.nombre + '! Llegaste a ' + state.victoriasObjetivo + ' victorias.'
            : 'Sheldon llegó a ' + state.victoriasObjetivo + ' victorias antes que tú.';
        abrirModal('modal-final');
    }

    // --- Handlers de los formularios ------------------------------------
    function leerVictorias(input) {
        var v = parseInt(input.value, 10);
        return (!isNaN(v) && v > 0) ? v : DEFAULT_VICTORIAS;
    }

    function aplicarSetup() {
        var nick = ($('#input-nickname').value || '').trim() || 'Usuario';
        state.nombre = nick;
        state.victoriasObjetivo = leerVictorias($('#input-victorias'));
        $('#nombre-usuario').innerHTML = state.nombre;
        cerrarModal('modal-setup');
        reiniciarMarcador();
    }

    function aplicarCambioVictorias() {
        state.victoriasObjetivo = leerVictorias($('#input-cambiar-victorias'));
        cerrarModal('modal-victorias');
        reiniciarMarcador();
    }

    function abrirCambiarVictoriasDesdeFinal() {
        cerrarModal('modal-final');
        $('#input-cambiar-victorias').value = state.victoriasObjetivo;
        abrirModal('modal-victorias');
    }

    function reiniciarDesdeFinal() {
        cerrarModal('modal-final');
        reiniciarMarcador();
    }

    // --- Inicializacion --------------------------------------------------
    function cablearOpciones() {
        CHOICES.forEach(function (id, i) {
            var el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('click', function (e) {
                e.preventDefault();
                jugar(i);
            });
        });
    }

    function cablearBoton(id, handler) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('click', function (e) { e.preventDefault(); handler(); });
    }

    function cablearSubmitEnInput(id, handler) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') { e.preventDefault(); handler(); }
        });
    }

    function init() {
        cablearOpciones();
        cablearBoton('btn-iniciar', aplicarSetup);
        cablearBoton('btn-cambiar-victorias', aplicarCambioVictorias);
        cablearBoton('btn-final-reiniciar', reiniciarDesdeFinal);
        cablearBoton('btn-final-cambiar', abrirCambiarVictoriasDesdeFinal);
        cablearBoton('btn-reset', reiniciarMarcador);

        cablearSubmitEnInput('input-nickname',   aplicarSetup);
        cablearSubmitEnInput('input-victorias',  aplicarSetup);
        cablearSubmitEnInput('input-cambiar-victorias', aplicarCambioVictorias);

        // Pantalla inicial: pedir nickname y victorias.
        abrirModal('modal-setup');
        var nick = $('#input-nickname');
        if (nick) nick.focus();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
