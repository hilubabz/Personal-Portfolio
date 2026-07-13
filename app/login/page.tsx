"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <button onClick={() => signIn("google", { callbackUrl: "/admin" })}>
      Sign in with Google
    </button>
  );
}
