// motionlog.js -- a port of the old PHP version
'use strict';

var fs = require('fs');
var path = require('path');

var baseDir = './pictures';

var isImage = (fileName) => /image-\w+.jpg/.test(fileName);

var getNMostRecentPhotos = (n) => {
  n = n || 40;

  // Do we want this to be async?
  var allFileNames = fs.readdirSync(baseDir);

  var photoData = allFileNames
    .filter(isImage)
    .map((name) => {
      var photoPath = path.join(baseDir, name);
      var iStart    = name.indexOf('-') + 1; // don't interpret at negative
      var iEnd      = name.indexOf('.');
      var tsStr     = name.slice(iStart, iEnd);
      var ts = parseInt(tsStr, 10);
      return {
        path: photoPath,
        ts:   ts
      };
    })
    .sort((a, b) => b.ts - a.ts );

  return photoData.slice(0, n);
};

module.exports = getNMostRecentPhotos;
