rm -rf full-dist

rm dist.tar.gz

echo 'DELETED DIST'

grunt

mv dist app-dist

mkdir full-dist

mv app-dist full-dist/app-dist

cp package.json bower.json motionlog.js photo-server.js full-dist

echo 'TAR-ING...'

tar -zcvf dist.tar.gz full-dist
