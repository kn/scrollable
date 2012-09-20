$ ->
  module 'scrollable'

  test 'should initialize css position property of an element with movable class', ->
    ok $(document.body).find('.no-attr.movable').css('position') == 'fixed', 'movable postition is set to fixed'
