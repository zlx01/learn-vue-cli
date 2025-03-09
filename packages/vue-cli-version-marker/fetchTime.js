const scoped = 'https://registry.npmjs.org/@vue/cli'
const unscoped = 'https://registry.npmjs.org/vue-cli-version-marker/latest'

async function getFetchTime (url) {
  // 计算请求时间
  const start = Date.now()
  await fetch(url)
  return Date.now() - start
}

Promise.all([
  getFetchTime(scoped),
  getFetchTime(unscoped)
]).then(([scopedTime, unscopedTime]) => {
  console.log({ scopedTime, unscopedTime })
})
// { scopedTime: 1177, unscopedTime: 1034 }
// { scopedTime: 1423, unscopedTime: 1315 }
// { scopedTime: 1386, unscopedTime: 1282 }
