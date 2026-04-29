import { NextResponse } from "next/server"
import { auth } from "./app/lib/auth"
// import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export async function proxy(request) {
 console.log("hellow john")
  const session = await auth.api.getSession({
        headers: await headers()
    })
    if(session){
      return NextResponse.next()
    }
    else{
      return NextResponse.redirect(new URL('/signIn', request.url))
    }
}



export const config = {
  matcher: ["/about","/career","/news/:path*"],
}