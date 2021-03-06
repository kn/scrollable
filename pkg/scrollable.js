// Generated by CoffeeScript 1.3.3

(function($) {
  var getNewLayerTop, getNumberData, getPositionNum, initializeMovableLayers;
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
            data.init = getPositionNum(data.$elem.css('top'));
            data.pos = 'top';
            break;
          case 'left':
          case 'right':
            data.init = getPositionNum(data.$elem.css('left'));
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
  getPositionNum = function(value) {
    var res;
    res = value.match(/(\d+)px/);
    if (res != null) {
      return getNumberData(res[1]);
    } else {
      return 0;
    }
  };
  return getNumberData = function(numStr) {
    if (numStr != null) {
      return parseInt(numStr);
    } else {
      return null;
    }
  };
})(window.jQuery);
// Generated by CoffeeScript 1.3.3

(function($) {
  var getNewLayerOpacity, getNumberData, initializeFadableLayers;
  $(function() {
    var layers, updateFadableLayers;
    layers = initializeFadableLayers();
    updateFadableLayers = function(e) {
      var layer, scrollTop, _i, _len;
      scrollTop = parseInt($(document).scrollTop());
      for (_i = 0, _len = layers.length; _i < _len; _i++) {
        layer = layers[_i];
        layer.$elem.css('opacity', getNewLayerOpacity(layer, scrollTop));
      }
      return true;
    };
    updateFadableLayers();
    return $(document).scroll(updateFadableLayers);
  });
  initializeFadableLayers = function() {
    var $layer, $layers, data, layer, layers, _i, _len;
    layers = [];
    $layers = $(".fadable");
    if ($layers != null) {
      for (_i = 0, _len = $layers.length; _i < _len; _i++) {
        layer = $layers[_i];
        data = {};
        $layer = $(layer);
        data.$elem = $layer;
        data.type = $layer.data('fadable-type') || 'out';
        data.start = getNumberData($layer.data('fadable-start')) || 0;
        data.end = getNumberData($layer.data('fadable-end')) || $(document).height();
        switch (data.type) {
          case 'out':
            data.init = getNumberData(data.$elem.css('opacity')) || 1;
            data.range = data.init / (data.end - data.start);
            break;
          case 'in':
            data.init = getNumberData(data.$elem.css('opacity')) || 0;
            data.range = (1 - data.init) / (data.end - data.start);
        }
        layers.push(data);
      }
    }
    return layers;
  };
  getNewLayerOpacity = function(layer, scrollTop) {
    var diff, opacity;
    diff = scrollTop - layer.start;
    opacity = 0;
    switch (layer.type) {
      case 'out':
        opacity = layer.init - layer.range * diff;
        if (opacity < 0) {
          opacity = 0;
        }
        if (opacity > layer.init) {
          opacity = layer.init;
        }
        break;
      case 'in':
        opacity = layer.init + layer.range * diff;
        if (opacity > 1) {
          opacity = 1;
        }
        if (opacity < layer.init) {
          opacity = layer.init;
        }
    }
    return opacity;
  };
  return getNumberData = function(numStr) {
    if (numStr != null) {
      return parseInt(numStr);
    } else {
      return null;
    }
  };
})(window.jQuery);
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
