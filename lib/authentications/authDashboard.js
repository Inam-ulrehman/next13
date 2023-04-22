import { NextResponse } from 'next/server'
import * as jose from 'jose'

export const authDashboard = async (request) => {
  let token = request.cookies.get('Authorization_Token')?.value
  if (token === undefined || !token) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEBSITE}/login`)
  }
  try {
    await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_WEBSITE}/login`)
  }
}
