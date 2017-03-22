# Leaflet.shapeMarkers

> [Leaflet](http://leafletjs.com) plugin to draw simple shape markers with fixed width.

[![travis](https://img.shields.io/travis/Esri/Leaflet.shapeMarkers/master.svg?style=flat-square)](https://travis-ci.org/Esri/Leaflet.shapeMarkers)

### Example

Take a look at the [live demo](http://esri.github.io/Leaflet.shapeMarkers/).

![Example Image](https://raw.github.com/Esri/Leaflet.shapeMarkers/master/example.png)

```js
L.shapeMarkers.xMarker([45.5052, -122.6917], 50).addTo(map)
```
**Leaflet.shapeMarkers targets `v1.x`

### Dependencies

* [Leaflet](http://leaflet.com) version 1.0.0 or higher is required.

### Development Instructions

1. [Fork and clone Leaflet.shapeMarkers](https://help.github.com/articles/fork-a-repo)
2. `cd` into the `Leaflet.shapeMarkers` folder
3. Install the dependencies with `npm install`
4. run `npm run build` from the command line. This will create minified source.  afterward, you can run `npm test` to make sure everything is up to snuff.
5. Make your changes and create a [pull request](https://help.github.com/articles/creating-a-pull-request)

### Versioning

For transparency into the release cycle and in striving to maintain backward compatibility, Esri Leaflet is maintained under the Semantic Versioning guidelines and will adhere to these rules whenever possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility **bumps the major** while resetting minor and patch
* New additions without breaking backward compatibility **bumps the minor** while resetting the patch
* Bug fixes and misc changes **bumps only the patch**

For more information on SemVer, please visit <http://semver.org/>.

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/esri-leaflet-renderers/blob/master/CONTRIBUTING.md).


### Licensing
Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](https://raw.githubusercontent.com/Esri/Leaflet.shapeMarkers/master/LICENSE) file.