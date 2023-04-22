import * as jose from 'jose'

import ShowError from './showError'
import Form from './form'

const RecoverPassword = async ({ params }) => {
  const token = params.id

  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )

    return <Form token={token} />
  } catch (error) {
    return <ShowError error={error.code} />
  }
}

export default RecoverPassword
