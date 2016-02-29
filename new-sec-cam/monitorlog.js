// motionlog.js -- a port of the old PHP version
'use strict';

var fs = require('fs');
var path = require('path');

var photoNames = [];
var baseDir = '/.motionLog';

// Do we want this to be async?
photoNames = fs.readdirSync(baseDir);

var tsNameList = [];

photoNames.forEach((name) => {
  var photoPath = path.join(baseDir, name);
  var iStart    = name.indexOf('-');
  var iEnd      = name.indexOf('.');
  var tsStr     = name.slice(iStart, iEnd);
  var ts = parseInt(tsStr, 10);
  tsNameList.push({
    path: photoPath
    ts:   ts
  });
});

tsNameList.sort((a, b) => { b.ts - a.ts });

var firstFourty = tsNameList.slice(0, 39);

console.log(firstFourty);
