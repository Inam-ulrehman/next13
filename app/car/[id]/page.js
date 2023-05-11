export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1/cars/static`
  ).then((res) => res.json())

  return posts.result.map((item) => ({ id: item._id }))
}
const fetchData = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1/cars/${id}`,
    { cache: 'no-cache' }
  ).then((res) => res.json())
  return response
}

export default async function Page({ params }) {
  const { id } = params
  const response = await fetchData(id)

  if (!response.success) {
    return <div>{response.msg}</div>
  }

  return (
    <div>
      <p>Id: {response.result._id}</p>
      <p>make: {response.result.make}</p>
      <p>model: {response.result.model}</p>
      <p>price: {response.result.price}</p>
    </div>
  )
}
