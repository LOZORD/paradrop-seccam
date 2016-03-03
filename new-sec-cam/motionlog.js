// motionlog.js -- a port of the old PHP version
'use strict';

var fs = require('fs');
var path = require('path');

// I do this so photos are accessible to the website
// used to be 'app/cam-pictures'
var baseDir = '../motionLog';

var isImage = function(fileName) {
  return /image-\w+.jpg/.test(fileName);
};

var getNMostRecentPhotos = function(n) {
  n = n || 40;

  // Do we want this to be async?
  var allFileNames = fs.readdirSync(baseDir);

  var photoData = allFileNames
    .filter(isImage)
    .map(function (name) {
      var photoPath = path.join('motionLog', name); //XXX: this will probably need to change!!!
      var iStart    = name.indexOf('-') + 1; // don't interpret at negative
      var iEnd      = name.indexOf('.');
      var tsStr     = name.slice(iStart, iEnd);
      var ts = parseInt(tsStr, 10);
      return {
        path: photoPath,
        ts:   ts
      };
    })
    .sort(function(a, b) { return b.ts - a.ts } );

  return photoData.slice(0, n);
};

module.exports = getNMostRecentPhotos;
