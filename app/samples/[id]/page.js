import React from 'react'

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}
async function getPost(params) {
  console.log(params)
  const res = await fetch(`htt/${params.id}`)
  const post = await res.json()

  return post
}
const SingleSample = ({ params }) => {
  return <div>SingleSample</div>
}

export default SingleSample
