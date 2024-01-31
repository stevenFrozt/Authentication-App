import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(request) {
  const { pathname } = request.nextUrl
  const token = await getToken({ req: request })

  const loginPage = "/login"

  // IF USER IS ALREADY LOGGED IN then we protect this paths from users
  const protectedSessionPath = [loginPage]
  const isMatch = protectedSessionPath.some(path => pathname.startsWith(path))
  if (isMatch) {
    if (token) {
      return NextResponse.rewrite(new URL(`/404`, request.url))
    }
  }

  //   USER MIDDLEWARE
  const protectedUserPath = ["/home"]

  if (isProtectedPathMatched(protectedUserPath)) {
    if (!token) {
      const url = new URL(loginPage, request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }
  }

  /**
   *  IS PROTECTED PATH MATCHED FUNCTION
   * */
  function isProtectedPathMatched(paths) {
    const isMatch = paths.some(path => pathname.startsWith(path))
    if (isMatch) return true
    return false
  }

  return NextResponse.next()
}
