import dbConnect from '@/lib/dbConnect'
import mongooseErrorHandler from '@/lib/errors/mongoose-error-handler'
import Contact from '@/models/Contact'

export async function POST(request, res) {
  const pathName = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const cookies = request.cookies.getAll()
  const body = await request.json()
  const { name, email, mobile, subject, message } = body

  await dbConnect()
  try {
    const contacts = await Contact.create({
      name,
      email,
      mobile,
      subject,
      message,
    })
    return new Response(
      JSON.stringify({
        success: true,
        msg: 'Your request is successfully submitted.',
      }),
      { status: 200 }
    )
  } catch (error) {
    return mongooseErrorHandler(error)
  }
}
