const { createGzip } = require('zlib');
const { pipeline } = require('stream');
const fs = require('fs');

const gzip = createGzip();
const source = fs.createReadStream('input.txt');
const destination = fs.createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});
