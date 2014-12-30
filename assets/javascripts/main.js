requirejs.config({
  paths: {
    jquery: 'vendor/jquery/jquery'
  }
});

require(['jquery'], function($) {
  $(function() {
    var tabs = document.querySelector('paper-tabs');
    var list = document.querySelector('post-list');

    tabs.addEventListener('core-select', function() {
      list.show = tabs.selected;
    });
  });
});
