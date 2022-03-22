const zlib = require('zlib')
const fs = require('fs');
const gunzip = zlib.createGunzip()

const input = fs.createReadStream('input.txt.gz')
const output = fs.createWriteStream('input2.txt')
input.pipe(gunzip).pipe(output)

