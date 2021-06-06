import path from 'path'

require('ts-node').register()
console.log(require(path.resolve(__dirname,'test.config.ts')))
