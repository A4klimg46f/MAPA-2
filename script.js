{
  "name": "mapbox-gl-compare",
  "version": "0.4.1",
  "description": "Swipe and sync between two maps",
  "main": "index.js",
  "directories": {
    "example": "example"
  },
  "scripts": {
    "start": "cp style.css example/style.css && budo example/index.js --serve example/bundle.js --dir example --live",
    "build": "cp style.css dist/mapbox-gl-compare.css && NODE_ENV=production && browserify index.js | uglifyjs -c -m > dist/mapbox-gl-compare.js",
    "test": "npm run lint && browserify -t envify test/index.js | smokestack -b firefox | tap-status",
    "lint": "eslint --no-eslintrc -c .eslintrc index.js",
    "docs": "documentation build index.js --format=md > API.md"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/mapbox/mapbox-gl-compare.git"
  },
  "keywords": [
    "mapbox",
    "mapboxgl",
    "ui"
  ],
  "author": "Mapbox",
  "license": "ISC",
  "devDependencies": {
    "browserify": "^17.0.0",
    "budo": "^11.7.0",
    "documentation": "^14.0.0",
    "envify": "^4.1.0",
    "eslint": "^8.22.0",
    "mapbox-gl": "^2.10.0",
    "smokestack": "^3.6.0",
    "tap-status": "^1.0.1",
    "tape": "^5.6.0",
    "uglify-js": "^3.17.0"
  },
  "dependencies": {
    "@mapbox/mapbox-gl-sync-move": "^0.3.1"
  }
}