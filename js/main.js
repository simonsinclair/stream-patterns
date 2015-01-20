// main.js
//

(function(w, $, undefined) {
  "use strict";

	var App = {

    includes: [
      {
        name: "posts",
        path: "includes/posts.html",
        destination: "#js-panel-posts"
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
      $('#js-footer-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').scrollTop(0);
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
