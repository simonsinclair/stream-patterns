// main.js
//

(function(w, $, undefined) {
  "use strict";

  var App = {
    checker: true,

    includes: [
      {
        name: "content",
        path: "includes/content.html",
        destination: "#js-panel-content"
      },
      {
        name: "demo",
        path: "includes/demo.html",
        destination: "#js-panel-demo"
      }
    ],

    init: function() {
      App.loadIncludes();
      App.bindEvts();
    },

    loadIncludes: function() {
      $.each(App.includes, function(i, include) {
        $(include.destination).load(include.path);
      });
    },

    bindEvts: function() {
      $('#js-component-tabs').on('click', 'a', App.handleTabClick);

      // Nullify clicks on 'dummy' (#) anchors.
      $('.markup').on('click', 'a[href=#]', function(e) { e.preventDefault(); });

      // Capture document-level keypresses
      $(document).on('keyup', function(e) {
        switch ( e.keyCode ) {
          case 67: // "C"
            App.toggleChecker();
            break;
          default:
            console.log( e.keyCode );
        }
      });

      // (Back to) Top button
      $('#js-footer-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 250);
      });

      // Toggle .markup checkboard background and padding.
      $('#js-checker-toggle').on('change', App.toggleChecker);

      // Simulate Refresh on click
      $('body').on('click', '#js-refresh', App.simulateRefresh);

      // Toggle-able titles
      $('body').on('click', 'a.hgroup__info-toggle', App.toggleTitleInfo);
    },

    handleTabClick: function(e) {
      e.preventDefault();

      $('#js-component-tabs li').removeClass('active');
      $(this)
        .parent()
        .addClass('active');

      App.activateTabPanel( $(this).data('panel-name') );
    },

    activateTabPanel: function(panelName) {
      $('.panel').hide();
      $('#js-panel-' + panelName).show();
    },

    toggleChecker: function() {
      if( App.checker ) {
        $('html').removeClass('checker');
      } else {
        $('html').addClass('checker');
      }
      App.checker = !App.checker;
    },

    simulateRefresh: function() {
      var elem = this;

      $(elem).addClass('refreshing');
      setTimeout(function() {
        $(elem).removeClass('refreshing');
      }, 3000); // Multiple of the transition duration (5 spins)
    },

    toggleTitleInfo: function(e) {
      e.preventDefault();

      var $hgroup = $(this).parent();
      $hgroup.toggleClass('hgroup--expanded');
    }
  };

	$(App.init);
})(this, jQuery);
