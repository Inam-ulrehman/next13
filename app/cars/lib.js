export const sortParams = (searchParams) => {
  const result = searchParams
    .toString()
    .split('&')
    .filter(
      (item) =>
        !item.startsWith('sortField') && !item.startsWith('sortDirection')
    )
    .join('&')
  return result
}
