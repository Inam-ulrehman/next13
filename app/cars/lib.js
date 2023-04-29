export const filterSort = (searchParams, filter) => {
  const result = searchParams
    .toString()
    .split('&')
    .filter((item) => !item.startsWith(filter))
    .join('&')
  if (result.length === 0) {
    return ''
  }
  const data = `&${result}`
  return data
}

export const filterMakeParams = (searchParams, searchProp, param, router) => {
  const otherQuery = searchParams
    .toString()
    .split('&')
    .filter((item) => !item.startsWith('make'))
    .join('&')
  if (param) {
    if (param.match(searchProp)) {
      const remove = param
        .split(',')
        .filter((item) => !item.startsWith(searchProp))
        .toString()
      if (remove.length === 0) {
        if (otherQuery) {
          return router.push(`cars?${otherQuery}`)
        }
        return router.push(`cars?`)
      }
      if (otherQuery) {
        return router.push(`cars?make=${remove}&${otherQuery}`)
      }
      return router.push(`cars?make=${remove}`)
    }
    const filterMake = searchParams
      .toString()
      .split('&')
      .filter((item) => item.startsWith('make'))
      .toString()

    let previousMake = filterMake.toString().split('=')[1].replace(/%2C/g, ',')

    if (otherQuery) {
      router.push(`cars?make=${previousMake},${searchProp}&${otherQuery}`)
      return
    }
    router.push(`cars?make=${previousMake},${searchProp}`)
    return
  }
  if (otherQuery) {
    return router.push(`cars?make=${searchProp}&${otherQuery}`)
  }
  router.push(`cars?make=${searchProp}`)
}
