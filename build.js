var browserify = require('browserify');
var fs = require('fs');
var b = browserify( { prelude : fs.readFileSync('prelude.js', 'utf8'), preludePath : 'prelude.js' });
b.add('./reqs.js');
var strm = b.bundle();
strm.on( 'end', () => process.stdout.write( [ 'let require = __tmpReq;', fs.readFileSync('./reqs.js', 'utf8'), fs.readFileSync( './index.js', 'utf8') ].join('\n') ));
strm.pipe(process.stdout);
