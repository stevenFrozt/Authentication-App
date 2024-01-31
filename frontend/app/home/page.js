"use client"
import { signOut } from "next-auth/react"

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col gap-2 text-2xl">
        Welcome Home
        <button onClick={() => signOut()} className="text-blue-500">
          Sign out
        </button>
      </div>
    </div>
  )
}
