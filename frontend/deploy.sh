BUILD_SRC="./build/"
BUILD_DST="/var/www/megahack/"
INDEX="./build/index.html"

[ -f $INDEX ] && echo "$INDEX is healthy"

rsync -a $BUILD_SRC $BUILD_DST
