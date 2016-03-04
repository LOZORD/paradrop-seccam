rm -rf dist

echo 'DELETED DIST'

grunt

mv dist app-dist

mkdir full-dist

mv app-dist full-dist/app-dist

cp package.json bower.json motionlog.js photo-server.js full-dist
