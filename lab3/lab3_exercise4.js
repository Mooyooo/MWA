const fs = require('fs');
const zlib = require('zlib');


function zipFile() {
    const gzip = zlib.createGzip();
    const readable = fs.createReadStream('./bigFile.txt');
    const compressed = fs.createWriteStream('./bigFileCompressed.txt.gz');

    readable.pipe(gzip).pipe(compressed);
}

function unzipFile(){
    const gzip = zlib.createGunzip();
    const writeable =fs.createReadStream('./bigFileCompressed.txt.gz');
    const unzipped = fs.createWriteStream('./bigFileUnzipped.txt');
    writeable.pipe(gzip).pipe(unzipped);
}

zipFile();
unzipFile();