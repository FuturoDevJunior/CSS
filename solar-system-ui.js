// solar-system-ui.js
// Lógica de manipulação de UI do sistema solar
// Requer jQuery

(function($) {
  'use strict';

  /**
   * Inicializa a interface do sistema solar.
   * Remove classes iniciais e ativa animações de entrada.
   */
  function initUI(body) {
    body.removeClass('view-2D opening').addClass('view-3D').delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass('set-speed');
      $(this).dequeue();
    });
  }

  /**
   * Define a visualização do universo.
   * @param {jQuery} universe - Elemento do universo
   * @param {string} view - Classe de visualização
   */
  function setView(universe, view) {
    universe.removeClass().addClass(view);
  }

  /**
   * Inicializa todos os event handlers da interface.
   */
  function bindUIEvents() {
    var body = $('body');
    var universe = $('#universe');
    var solarsys = $('#solar-system');

    // Alterna painel de dados
    $('#toggle-data').on('click', function(e) {
      body.toggleClass('data-open data-close');
      e.preventDefault();
    });

    // Alterna painel de controles
    $('#toggle-controls').on('click', function(e) {
      body.toggleClass('controls-open controls-close');
      e.preventDefault();
    });

    // Seleciona planeta/elemento
    $('#data a').on('click', function(e) {
      var ref = $(this).attr('class');
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    // Alterna visualização 2D/3D
    $('.set-view').on('click', function() {
      body.toggleClass('view-3D view-2D');
    });

    // Alterna zoom
    $('.set-zoom').on('click', function() {
      body.toggleClass('zoom-large zoom-close');
    });

    // Define visualização de velocidade
    $('.set-speed').on('click', function() {
      setView(universe, 'scale-stretched set-speed');
    });

    // Define visualização de tamanho
    $('.set-size').on('click', function() {
      setView(universe, 'scale-s set-size');
    });

    // Define visualização de distância
    $('.set-distance').on('click', function() {
      setView(universe, 'scale-d set-distance');
    });
  }

  // Executa ao carregar a janela
  $(window).on('load', function() {
    var body = $('body');
    initUI(body);
    bindUIEvents();
  });

})(jQuery); 