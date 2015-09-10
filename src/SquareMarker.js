import L from 'leaflet';
import { ShapeMarker } from './ShapeMarker';

export var SquareMarker = ShapeMarker.extend({
  options: {
    fill: true
  },

  initialize: function (latlng, size, options) {
    ShapeMarker.prototype.initialize.call(this, latlng, size, options);
  },

  _updatePath: function () {
    this._renderer._updateSquareMarker(this);
  },

  _svgCanvasIncludes: function () {
    L.Canvas.include({
      _updateSquareMarker: function (layer) {
        var latlng = layer._point;
        var offset = layer._size / 2.0;
        var ctx = this._ctx;

        ctx.beginPath();

        ctx.moveTo(latlng.x + offset, latlng.y + offset);
        ctx.lineTo(latlng.x - offset, latlng.y + offset);
        ctx.lineTo(latlng.x - offset, latlng.y - offset);
        ctx.lineTo(latlng.x + offset, latlng.y - offset);

        ctx.closePath();

        this._fillStroke(ctx, layer);
      }
    });

    L.SVG.include({
      _updateSquareMarker: function (layer) {
        var latlng = layer._point;
        var offset = layer._size / 2.0;

        if (L.Browser.vml) {
          latlng._round();
          offset = Math.round(offset);
        }

        var str = 'M' + (latlng.x + offset) + ',' + (latlng.y + offset) +
          'L' + (latlng.x - offset) + ',' + (latlng.y + offset) +
          'L' + (latlng.x - offset) + ',' + (latlng.y - offset) +
          'L' + (latlng.x + offset) + ',' + (latlng.y - offset);

        str = str + (L.Browser.svg ? 'z' : 'x');

        this._setPath(layer, str);
      }
    });
  }
});

export var squareMarker = function (latlng, size, options) {
  return new SquareMarker(latlng, size, options);
};

export default squareMarker;
