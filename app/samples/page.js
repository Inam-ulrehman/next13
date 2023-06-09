import Link from 'next/link'
import React from 'react'
import CreateSample from '../components/samples/create-sample'
import DeleteSample from '../components/samples/delete-sample'
import { cookies, headers } from 'next/headers'
export const metadata = {
  title: 'Samples',
  description: 'Generated by create next app',
}
const getSamples = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/v1/samples`, {
    cache: 'no-store',
  })
  const samples = await res.json()
  return samples
}

const Samples = async () => {
  const data = await getSamples()
  if (!data) {
    return
  }
  return (
    <div>
      <div>
        <strong>Total</strong> {data.length}
      </div>
      <div className='create-sample'>
        <CreateSample />
      </div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>
              <strong>{item._id}</strong>
            </h1>
            <p>{item.name}</p>
            <Link href={`/samples/${item._id}`}>Read More</Link>
            <DeleteSample _id={item._id} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Samples
