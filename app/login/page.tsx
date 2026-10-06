"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <button onClick={() => signIn("google", { callbackUrl: "/admin" })}>
        Sign in with Google
      </button>
    </div>
  );
}
