import L from 'leaflet';
import { ShapeMarker } from './ShapeMarker';

export var CrossMarker = ShapeMarker.extend({

  initialize: function (latlng, size, options) {
    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function () {
    this._renderer._updateCrossMarker(this);
  },

  _svgCanvasIncludes: function () {
    L.Canvas.include({
      _updateCrossMarker: function (layer) {
        var latlng = layer._point;
        var offset = layer._size / 2.0;
        var ctx = this._ctx;

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
      _updateCrossMarker: function (layer) {
        var latlng = layer._point;
        var offset = layer._size / 2.0;

        if (L.Browser.vml) {
          latlng._round();
          offset = Math.round(offset);
        }

        var str = 'M' + latlng.x + ',' + (latlng.y + offset) +
          'L' + latlng.x + ',' + (latlng.y - offset) +
          'M' + (latlng.x - offset) + ',' + latlng.y +
          'L' + (latlng.x + offset) + ',' + latlng.y;

        this._setPath(layer, str);
      }
    });
  }
});

export var crossMarker = function (latlng, size, options) {
  return new CrossMarker(latlng, size, options);
};

export default crossMarker;
