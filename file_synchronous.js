const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./Modules/first.txt', 'utf8')
const second = readFileSync('./Modules/second.txt', 'utf8')
console.log(first, second)

writeFileSync(
    './Modules/result.txt',
    `Here is the result ${first + second}`,
    { flag: 'a' }
)