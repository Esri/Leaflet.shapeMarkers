L.Canvas.include({
  _updateCrossMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0,
        ctx = this._ctx;

    ctx.beginPath();
    ctx.moveTo(latlng.x, latlng.y + offset);
    ctx.lineTo(latlng.x, latlng.y - offset);
    this._fillStroke(ctx, layer);

    ctx.moveTo(latlng.x - offset, latlng.y);
    ctx.lineTo(latlng.x + offset, latlng.y);
    this._fillStroke(ctx, layer);
  }
});

L.SVG.include({
  _updateCrossMarker: function(layer){
    var latlng = layer._point,
        offset = layer._size / 2.0;

    if(L.Browser.vml){
      latlng._round();
      offset = Math.round(offset);
    }

    var str =  'M' + latlng.x + ',' + (latlng.y + offset) +
      'L' + latlng.x + ',' + (latlng.y - offset) +
      'M' + (latlng.x - offset) + ',' + latlng.y +
      'L' + (latlng.x + offset) + ',' + latlng.y;

    this._setPath(layer, str);
  }
});

L.CrossMarker = L.ShapeMarker.extend({

  initialize: function (latlng, size, options){
    L.ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function(){
    this._renderer._updateCrossMarker(this);
  }
});

L.crossMarker = function(latlng, size, options){
  return new L.CrossMarker(latlng, size, options);
};
