(($) ->
  $ ->
    layers = initializeMovableLayers()

    updateMovableLayers = (e) ->
      scrollTop = parseInt $(document).scrollTop()
      for layer in layers
        layer.$elem.css layer.pos, getNewLayerTop(layer, scrollTop)
      true

    updateMovableLayers()
    $(document).scroll updateMovableLayers

  initializeMovableLayers = ->
    layers = []
    $layers = $(".movable")
    if $layers?
      for layer in $layers
        data = {}
        $layer = $(layer)
        data.$elem = $layer
        data.$elem.css 'position', 'fixed'
        data.type = $layer.data('movable-type') || 'up'
        data.start = getNumberData($layer.data 'movable-start') || 0
        data.end = getNumberData($layer.data 'movable-end') || $(document).height()
        switch data.type
          when 'up', 'down'
            data.init = data.$elem.position().top
            data.pos = 'top'
          when 'left', 'down'
            data.init = data.$elem.position().left
            data.pos = 'left'
        switch data.type
          when 'up', 'left' then data.limit = data.init - (data.end - data.start)
          when 'down', 'right' then data.limit = data.init + (data.end - data.start)
        layers.push data
    layers

  getNewLayerTop = (layer, scrollTop) ->
    diff = scrollTop - layer.start
    pos = 0
    switch layer.type
      when 'up', 'left'
        pos = layer.init - diff
        pos = layer.limit if pos < layer.limit
        pos = layer.init if pos > layer.init
      when 'down', 'right'
        pos = layer.init + diff
        pos = layer.limit if pos > layer.limit
        pos = layer.init if pos < layer.init
    pos
      
  getNumberData = (numStr) ->
    if numStr? then parseInt numStr else null

)(window.jQuery)
