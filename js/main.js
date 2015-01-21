// main.js
//

(function(w, $, undefined) {
  "use strict";

  var App = {

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
      $('body').on('click', 'a[href=#]', function(e) { e.preventDefault(); });

      // (Back to) Top button
      $('#js-footer-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 250);
      });
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
    }
  };

	$(App.init);
})(this, jQuery);
