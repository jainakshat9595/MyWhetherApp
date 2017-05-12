# MEAN Stack Single Page Whether Application

This is a repo for a whether appliation for a Single Page MEAN Stack application.

## Installation
1. Download the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up the server: `node server.js`
5. Go to file "node_modules/bson/ext/index.js", find "bson = require('../build/Release/bson');" and replace with "bson = require('../browser_build/bson');" in the catch block
6. View in browser at http://localhost:8080

If you have any questions or requests, email us at [jainakshat9595@gmail.com](mailto:jainakshat9595@gmail.com).

## Project Details
- Based on MEAN Stack
- Uses AngularAutoComplete Directive along with Google Maps Places API to provide auto suggestions as you type in the search field.
- Uses Google Maps API to get the Lat/Long from the searched place and pin in to the map and centered with marker.
- USes the OpenWhetherMap API to get the current temp, min/max temp and the forecast of the next 5 days.
