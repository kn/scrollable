// Generated by CoffeeScript 1.3.3

(function($) {
  var getNewLayerDegrees, getNumberData, initializeRotatableLayers;
  $(function() {
    var layers, updateRotatableLayers;
    layers = initializeRotatableLayers();
    updateRotatableLayers = function(e) {
      var degrees, layer, scrollTop, _i, _len;
      scrollTop = parseInt($(document).scrollTop());
      for (_i = 0, _len = layers.length; _i < _len; _i++) {
        layer = layers[_i];
        degrees = getNewLayerDegrees(layer, scrollTop);
        layer.$elem.css('transform', "rotate(" + degrees + "deg)");
        layer.$elem.css('-webkit-transform', "rotate(" + degrees + "deg)");
        layer.$elem.css('-moz-transform', "rotate(" + degrees + "deg)");
        layer.$elem.css('-ms-transform', "rotate(" + degrees + "deg)");
        layer.$elem.css('-o-transform', "rotate(" + degrees + "deg)");
      }
      return true;
    };
    updateRotatableLayers();
    return $(document).scroll(updateRotatableLayers);
  });
  initializeRotatableLayers = function() {
    var $layer, $layers, data, layer, layers, _i, _len;
    layers = [];
    $layers = $(".rotatable");
    if ($layers != null) {
      for (_i = 0, _len = $layers.length; _i < _len; _i++) {
        layer = $layers[_i];
        data = {};
        $layer = $(layer);
        data.$elem = $layer;
        data.type = $layer.data('rotatable-type') || 'right';
        data.start = getNumberData($layer.data('rotatable-start')) || 0;
        data.end = getNumberData($layer.data('rotatable-end')) || $(document).height();
        data.limit = 360 * (getNumberData($layer.data('rotatable-times')) || 1);
        data.range = data.limit / (data.end - data.start);
        layers.push(data);
      }
    }
    return layers;
  };
  getNewLayerDegrees = function(layer, scrollTop) {
    var degrees, diff;
    diff = scrollTop - layer.start;
    degrees = 0;
    switch (layer.type) {
      case 'left':
        degrees = layer.limit - layer.range * diff;
        break;
      case 'right':
        degrees = 0 + layer.range * diff;
    }
    if (degrees < 0) {
      degrees = 0;
    }
    if (degrees > layer.limit) {
      degrees = layer.limit;
    }
    return degrees;
  };
  return getNumberData = function(numStr) {
    if (numStr != null) {
      return parseInt(numStr);
    } else {
      return null;
    }
  };
})(window.jQuery);
