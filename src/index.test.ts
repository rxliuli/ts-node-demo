import path from 'path'

it('加载 test.config.ts', () => {
  require('ts-node').register()
  console.log(require(path.resolve(__dirname, './test.config.ts')))
})
