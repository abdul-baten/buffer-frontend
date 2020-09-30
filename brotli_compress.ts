const brotli = require('brotli');
const fs = require('fs');
const dir = require('node-dir');

const brotliCompressionOption = {
  extension: 'br',
  skipLarger: false,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 11, // 0 - 11,
  lgwin: 22, // default
  threshold: 10240,
};

dir.files('dist', function(err: Error, files: string[]) {
  if (err) throw err;
  files.forEach((file: string) => compress(file));
});

function compress(file: string) {
  const fileRegex = /\.(js|css|html)$/i;
  if (fileRegex.test(file)) {
    const content = fs.readFileSync(file);
    const result = brotli.compress(content, brotliCompressionOption);
    if (result != null && result.length < content.length) {
      fs.writeFileSync(file + '.br', result);
    }
  }
}