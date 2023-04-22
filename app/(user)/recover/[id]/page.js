import * as jose from 'jose'
import ChangePassword from './changePassword'
import ShowError from './showError'

const RecoverPassword = async ({ params }) => {
  const token = params.id

  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    const { exp, userId } = payload

    return <ChangePassword token={token} />
  } catch (error) {
    return <ShowError error={error.code} />
  }
}

export default RecoverPassword
