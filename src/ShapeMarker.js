import L from 'leaflet';

export var ShapeMarker = L.Path.extend({

  initialize: function (latlng, size, options) {
    L.setOptions(this, options);
    this._size = size;
    this._latlng = L.latLng(latlng);
    this._svgCanvasIncludes();
  },

  toGeoJSON: function () {
    return L.GeoJSON.getFeature(this, {
      type: 'Point',
      coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
    });
  },

  _svgCanvasIncludes: function () {
    // implement in sub class
  },

  _project: function () {
    this._point = this._map.latLngToLayerPoint(this._latlng);
  },

  _update: function () {
    if (this._map) {
      this._updatePath();
    }
  },

  _updatePath: function () {
    // implement in sub class
  },

  setLatLng: function (latlng) {
    this._latlng = L.latLng(latlng);
    this.redraw();
    return this.fire('move', {latlng: this._latlng});
  },

  getLatLng: function () {
    return this._latlng;
  },

  setSize: function (size) {
    this._size = size;
    return this.redraw();
  },

  getSize: function () {
    return this._size;
  }
});
