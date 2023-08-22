import packageInfo from '../package.json';
var version = packageInfo.version;
export { version as VERSION };

export { crossMarker } from './CrossMarker';
export { xMarker } from './XMarker';
export { squareMarker } from './SquareMarker';
export { diamondMarker } from './DiamondMarker';
