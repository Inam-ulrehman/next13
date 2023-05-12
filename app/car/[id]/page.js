import dbConnect from '@/lib/dbConnect'
import Car from '@/models/Car'
import Components from './components'

export async function generateStaticParams() {
  await dbConnect()
  const result = await Car.find()
  return result.map((item) => ({ id: item._id.toString() }))
}
export default async function Page({ params }) {
  await dbConnect()
  const { id } = params
  const response = async () => {
    try {
      const result = await Car.findById({ _id: id })
      result._id = result._id.toString()
      return result
    } catch (err) {
      return { success: false }
    }
  }
  const result = await response()

  if (result.success === false) {
    return <div>Sorry product is not in the list</div>
  }

  return <Components result={JSON.stringify(result)}></Components>
}
