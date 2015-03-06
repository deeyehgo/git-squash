/* jshint devel:true */
(function(window, undefined) {
  console.log('\'Allo \'Allo!');
  var s = Snap();
  var c = s.circle(100,100,50);
  var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' })
  c.attr({
    fill: '#bada55',
    stroke: '#000',
    strokeWidth: 5,
    mask: r
  });

  var cc = s.circle('50%', '50%', '50%');
  cc.attr({
    fill: '#0f5',
    id: 'te',
    stroke: '#00f'
  });
  TweenMax.fromTo("#te", 1, {attr:{r:'0', 'stroke-width': 0}, transformOrigin:"center center"} ,{attr:{r:'1000', 'stroke-width': 1000},transformOrigin:"center center", ease:Power2.easeInOut, repeat: -1, yoyo: true});

  TweenMax.fromTo("#circmask", 2, {attr:{r:'0'}, transformOrigin:"center center"} ,{attr:{r:'1000'},transformOrigin:"center center", ease:Power2.easeInOut, repeat: -1, yoyo: true});

  $(window).resize(function() {
    $('svg').css({
      'width': $(window).width(),
      'height': $(window).height(),
    })
  });
  $(window).trigger('resize');
})(window);
