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

export const filterParams = (searchParams, filter) => {}
