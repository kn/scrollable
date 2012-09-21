// Generated by CoffeeScript 1.3.3

(function($) {
  var getNewLayerTop, getNumberData, initializeMovableLayers;
  $(function() {
    var layers, updateMovableLayers;
    layers = initializeMovableLayers();
    updateMovableLayers = function(e) {
      var layer, scrollTop, _i, _len;
      scrollTop = parseInt($(document).scrollTop());
      for (_i = 0, _len = layers.length; _i < _len; _i++) {
        layer = layers[_i];
        layer.$elem.css(layer.pos, getNewLayerTop(layer, scrollTop));
      }
      return true;
    };
    updateMovableLayers();
    return $(document).scroll(updateMovableLayers);
  });
  initializeMovableLayers = function() {
    var $layer, $layers, data, layer, layers, _i, _len;
    layers = [];
    $layers = $(".movable");
    if ($layers != null) {
      for (_i = 0, _len = $layers.length; _i < _len; _i++) {
        layer = $layers[_i];
        data = {};
        $layer = $(layer);
        data.$elem = $layer;
        data.$elem.css('position', 'fixed');
        data.type = $layer.data('movable-type') || 'up';
        data.start = getNumberData($layer.data('movable-start')) || 0;
        data.end = getNumberData($layer.data('movable-end')) || $(document).height();
        switch (data.type) {
          case 'up':
          case 'down':
            data.init = data.$elem.position().top;
            data.pos = 'top';
            break;
          case 'left':
          case 'right':
            data.init = data.$elem.position().left;
            data.pos = 'left';
        }
        switch (data.type) {
          case 'up':
          case 'left':
            data.limit = data.init - (data.end - data.start);
            break;
          case 'down':
          case 'right':
            data.limit = data.init + (data.end - data.start);
        }
        layers.push(data);
      }
    }
    return layers;
  };
  getNewLayerTop = function(layer, scrollTop) {
    var diff, pos;
    diff = scrollTop - layer.start;
    pos = 0;
    switch (layer.type) {
      case 'up':
      case 'left':
        pos = layer.init - diff;
        if (pos < layer.limit) {
          pos = layer.limit;
        }
        if (pos > layer.init) {
          pos = layer.init;
        }
        break;
      case 'down':
      case 'right':
        pos = layer.init + diff;
        if (pos > layer.limit) {
          pos = layer.limit;
        }
        if (pos < layer.init) {
          pos = layer.init;
        }
    }
    return pos;
  };
  return getNumberData = function(numStr) {
    if (numStr != null) {
      return parseInt(numStr);
    } else {
      return null;
    }
  };
})(window.jQuery);
