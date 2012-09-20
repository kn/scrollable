(($) ->
  $ ->
    layers = initializeFadableLayers()

    updateFadableLayers = (e) ->
      scrollTop = parseInt $(document).scrollTop()
      for layer in layers
        layer.$elem.css 'opacity', getNewLayerOpacity(layer, scrollTop)
      true

    updateFadableLayers()
    $(document).scroll updateFadableLayers

  initializeFadableLayers = ->
    layers = []
    $layers = $(".fadable")
    if $layers?
      for layer in $layers
        data = {}
        $layer = $(layer)
        data.$elem = $layer
        data.type = $layer.data('fadable-type') || 'out'
        data.start = getNumberData($layer.data 'fadable-start') || 0
        data.end = getNumberData($layer.data 'fadable-end') || $(document).height()
        switch data.type
          when 'out'
            data.init = getNumberData(data.$elem.css('opacity')) || 1
            data.range = data.init / (data.end - data.start)
          when 'in'
            data.init = getNumberData(data.$elem.css('opacity')) || 0
            data.range = (1 - data.init) / (data.end - data.start)
        layers.push data
    layers

  getNewLayerOpacity = (layer, scrollTop) ->
    diff = scrollTop - layer.start
    opacity = 0
    switch layer.type
      when 'out'
        opacity = layer.init - layer.range * diff
        opacity = 0 if opacity < 0
        opacity = layer.init if opacity > layer.init
      when 'in'
        opacity = layer.init + layer.range * diff
        opacity = 1 if opacity > 1
        opacity = layer.init if opacity < layer.init
    opacity

  getNumberData = (numStr) ->
    if numStr? then parseInt numStr else null

)(window.jQuery)
