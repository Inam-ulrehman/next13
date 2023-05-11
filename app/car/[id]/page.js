import { customFetch } from '@/lib/axios/customFetch'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await customFetch('/cars/static')
  // const result = posts.data.result
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1/cars/static`
  ).then((res) => res.json())

  return posts.result.map((item) => ({ id: item._id }))
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }) {
  const { id } = params
  console.log(id)
  // ...
}
