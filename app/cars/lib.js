export const filterSort = (searchParams, filter) => {
  const result = searchParams
    .toString()
    .split('&')
    .filter(
      (item) =>
        !item.startsWith(filter) &&
        !item.startsWith('page') &&
        !item.startsWith('limit')
    )
    .join('&')
    .replace(/%2C/g, ',')

  if (result.length === 0) {
    return ''
  }
  const data = `&${result}`
  return data
}

export const filterMakeParams = (
  searchParams,
  searchProp,
  param,
  router,
  searchWord
) => {
  const otherQuery = searchParams
    .toString()
    .split('&')
    .filter(
      (item) =>
        !item.startsWith(searchWord) &&
        !item.startsWith('page') &&
        !item.startsWith('limit') &&
        !item.startsWith('sortfield')
    )
    .join('&')
    .replace(/%2C/g, ',')

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
        return router.push(`cars?${searchWord}=${remove}&${otherQuery}`)
      }
      return router.push(`cars?${searchWord}=${remove}`)
    }
    const filterMake = searchParams
      .toString()
      .split('&')
      .filter((item) => item.startsWith(searchWord))
      .toString()

    let previousMake = filterMake.toString().split('=')[1].replace(/%2C/g, ',')

    if (otherQuery) {
      router.push(
        `cars?${searchWord}=${previousMake},${searchProp}&${otherQuery}`
      )
      return
    }
    router.push(`cars?${searchWord}=${previousMake},${searchProp}`)
    return
  }
  if (otherQuery) {
    return router.push(`cars?${searchWord}=${searchProp}&${otherQuery}`)
  }
  router.push(`cars?${searchWord}=${searchProp}`)
}
