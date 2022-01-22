jest.isolateModules(() => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
})
