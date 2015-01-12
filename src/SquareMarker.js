L.Canvas.include({
  _updateSquareMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0,
        ctx = this._ctx;

    ctx.beginPath();

    ctx.moveTo(latlng.x+offset, latlng.y+offset);
    ctx.lineTo(latlng.x - offset, latlng.y + offset);
    ctx.lineTo(latlng.x - offset, latlng.y - offset);
    ctx.lineTo(latlng.x + offset, latlng.y - offset);

    ctx.closePath();

    this._fillStroke(ctx, layer);
  }
});

L.SVG.include({
  _updateSquareMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0;

    if(L.Browser.vml){
      latlng._round();
      offset = Math.round(offset);
    }

    var str = 'M' + (latlng.x + offset) + ',' + (latlng.y + offset) +
      'L' + (latlng.x - offset) + ',' + (latlng.y + offset) +
      'L' + (latlng.x - offset) + ',' + (latlng.y - offset) +
      'L' + (latlng.x + offset) + ',' + (latlng.y - offset);

    str =  str + (L.Browser.svg ? 'z' : 'x');

    this._setPath(layer, str);
  }
});

L.SquareMarker = L.ShapeMarker.extend({
  options: {
    fill: true
  },

  initialize: function(latlng, size, options){
    L.ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function(){
    this._renderer._updateSquareMarker(this);
  }
});

L.squareMarker = function(latlng, size, options){
  return new L.SquareMarker(latlng, size, options);
};
