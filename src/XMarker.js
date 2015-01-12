L.Canvas.include({
  _updateXMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0,
        ctx = this._ctx;

    ctx.beginPath();

    ctx.moveTo(latlng.x + offset, latlng.y + offset);
    ctx.lineTo(latlng.x - offset, latlng.y - offset);
    this._fillStroke(ctx, layer);
  }
});

L.SVG.include({
  _updateXMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0;

    if(L.Browser.vml){
      latlng._round();
      offset = Math.round(offset);
    }

    var str = 'M' + (latlng.x + offset) + ',' + (latlng.y + offset) +
      'L' + (latlng.x - offset) + ',' + (latlng.y - offset) +
      'M' + (latlng.x - offset) + ',' + (latlng.y + offset) +
      'L' + (latlng.x + offset) + ',' + (latlng.y - offset);

    this._setPath(layer, str);
  }
});

L.XMarker = L.ShapeMarker.extend({

  initialize: function(latlng, size, options){
    L.ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function(){
    this._renderer._updateXMarker(this);
  }
});

L.xMarker = function(latlng, size, options){
  return new L.XMarker(latlng, size, options);
};
