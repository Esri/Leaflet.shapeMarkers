L.Canvas.include({
  _updateDiamondMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0,
        ctx = this._ctx;

      ctx.beginPath();

      ctx.moveTo(latlng.x, latlng.y + offset);
      ctx.lineTo(latlng.x - offset, latlng.y);
      ctx.lineTo(latlng.x, latlng.y - offset);
      ctx.lineTo(latlng.x + offset, latlng.y);

      ctx.closePath();

      this._fillStroke(ctx, layer);
  }
});

L.SVG.include({
  _updateDiamondMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0;

    if(L.Browser.vml){
      latlng._round();
      offset = Math.round(offset);
    }

    var str = 'M' + latlng.x + ',' + (latlng.y + offset) +
      'L' + (latlng.x - offset) + ',' + latlng.y +
      'L' + latlng.x + ',' + (latlng.y - offset) +
      'L' + (latlng.x + offset) + ',' + latlng.y;

    str =  str + (L.Browser.svg ? 'z' : 'x');

    this._setPath(layer, str);
  }
});

L.DiamondMarker = L.ShapeMarker.extend({
  options: {
    fill: true
  },

  initialize: function(latlng, size, options){
    L.ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function(){
    this._renderer._updateDiamondMarker(this);
  }
});

L.diamondMarker = function(latlng, size, options){
  return new L.DiamondMarker(latlng, size, options);
};
