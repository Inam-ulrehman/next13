import { Router } from 'next/router'
import { NextResponse } from 'next/server'
import {
  authAdminApi,
  authAdminDashboard,
  authApi,
  authDashboard,
  isLoggedIn,
} from './lib/authentications'

export function middleware(request, response, event) {
  // this logic is many routes
  // console.log(request.nextUrl.pathname)
  // event.waitUntil(
  //   fetch('https://my-analytics-platform.com', {
  //     method: 'POST',
  //     body: JSON.stringify({ pathname: req.nextUrl.pathname }),
  //   })
  // )

  // ==========Authentication Back End==========

  if (request.nextUrl.pathname.startsWith('/api/v1/auth/')) {
    return authApi(request)
  }

  if (request.nextUrl.pathname.startsWith('/api/v1/authadmin/')) {
    return authAdminApi(request)
  }
  // ==========Authentication Front End==========
  if (request.nextUrl.pathname.startsWith('/dashboard/admin')) {
    // direct response back if fail for actions.
    return authAdminDashboard(request)
  }
  if (request.nextUrl.pathname.startsWith('/dashboard/user')) {
    // direct response back if fail for actions.
    return authDashboard(request)
  }
  // ==========Authentication Front End==========
  if (request.nextUrl.pathname.startsWith('/login')) {
    // direct response back if fail for actions.
    return isLoggedIn(request)
  }
}

// this logic is default
export const config = {
  // any routes to v1 match
  matcher: ['/api/v1/:path*', '/dashboard/:path*', '/login/:path*'],
}
