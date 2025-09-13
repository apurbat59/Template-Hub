import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if user is authenticated
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true'
  
  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard', '/templates']
  
  // If trying to access protected route without authentication
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  
  // If authenticated user tries to access auth page, redirect to dashboard
  if (pathname === '/auth' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
