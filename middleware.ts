import { auth } from "./lib/auth";

const ADMIN_EMAIL = "utsargam44@gmail.com";

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }

  if (req.auth.user?.email !== ADMIN_EMAIL) {
    return Response.redirect(new URL("/", req.nextUrl));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
