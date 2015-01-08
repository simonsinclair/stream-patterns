// main.js
//

(function(w, $, undefined) {
  "use strict";

	var App = {

    postLoaded: {

    },

    init: function() {
      App.loadContent();
      App.bindEvts();
    },

    loadContent: function() {
      // Load content in to hidden tab panels.
    },

    bindEvts: function() {
      $('#js-component-tabs').on('click', 'a', App.handleTabClick);
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
      $('.panel.panel--' + panelName).show();
    }
  };

	$(App.init);
})(this, jQuery);
