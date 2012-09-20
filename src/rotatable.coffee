(($) ->
  $ ->
    layers = initializeRotatableLayers()

    updateRotatableLayers = (e) ->
      scrollTop = parseInt $(document).scrollTop()
      for layer in layers
        layer.$elem.css 'transform', "rotate(#{getNewLayerDegrees(layer, scrollTop)}deg)"
      true

    updateRotatableLayers()
    $(document).scroll updateRotatableLayers

  initializeRotatableLayers = ->
    layers = []
    $layers = $(".rotatable")
    if $layers?
      for layer in $layers
        data = {}
        $layer = $(layer)
        data.$elem = $layer
        data.type = $layer.data('rotatable-type') || 'right'
        data.start = getNumberData($layer.data 'rotatable-start') || 0
        data.end = getNumberData($layer.data 'rotatable-end') || $(document).height()
        data.limit = 360 * getNumberData($layer.data 'rotatable-times') || 1
        data.range = data.limit / (data.end - data.start)
        layers.push data
    layers

  getNewLayerDegrees = (layer, scrollTop) ->
    diff = scrollTop - layer.start
    degrees = 0
    switch layer.type
      when 'left'
        degrees = 0 - layer.range * diff
      when 'right'
        degrees = 0 + layer.range * diff
    degrees = 0 if degrees < 0
    degrees = layer.limit if degrees > layer.limit
    degrees

  getNumberData = (numStr) ->
    if numStr? then parseInt numStr else null

)(window.jQuery)
