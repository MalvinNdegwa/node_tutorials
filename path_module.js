// console.log(__filename)

const path = require ('path')
console.log(path.sep)

const filepath = path.join('/modules','subfolder','text.txt')
console.log(filepath)

const absolute = path.resolve(__dirname,'/modules','subfolder','text.txt')
console.log(absolute)