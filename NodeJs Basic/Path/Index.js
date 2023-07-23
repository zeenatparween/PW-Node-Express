const path = require("path");

// console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);

const filepath1 = '/public_html/home/index.html/';
console.log(filepath1);

const currentfilepath = __filename;
console.log('currentfilepath :> ', currentfilepath );

let basename = path.basename(currentfilepath, '.js');
console.log('basename :>', basename);

let basenamewithoutExt = path.basename(currentfilepath, '.js')
console.log('basenamewithoutExt :> ', basenamewithoutExt);

let dirname = path.dirname(currentfilepath);
console.log('dirname :> ', dirname);

console.log('ext :> ' , path.extname(currentfilepath));
console.log('ext2 :> ' , path.extname('index.md.js'));

let pathToFile = path.format({
    dir: '/public_html/home',
    base:'index.html'
})
console.log('pathToFile :> ', pathToFile);

console.log('IsAbsolute', path.isAbsolute(currentfilepath));
console.log('IsAbsolute', path.isAbsolute('/index.js'));
console.log('IsAbsolute', path.isAbsolute('./index.js'));
console.log('IsAbsolute', path.isAbsolute('../index.js'));

let pathToDir = path.join('/home', 'js', 'dist', 'index.js');
console.log('pathToDir > ', pathToDir);

console.log('parse :> ', path.parse(currentfilepath));

console.log('relative path :> ', path.relative('/home/user/config' , '/home/user/config'));

console.log('resolve :> ', path.resolve());

