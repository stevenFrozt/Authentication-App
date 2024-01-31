import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { signIn, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SignInForm({ setCurrentForm }) {
  const { data: session } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackParams = searchParams.get("callbackUrl")
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!callbackParams) {
      if (session) {
        router.push("/home")
      }
    }
    if (session && callbackParams) window.location.href = callbackParams
  }, [session, router])

  async function handleSubmit(event) {
    const res = await signIn("credentials", {
      username: event.get("username"),
      password: event.get("password"),
      redirect: false
    })
    if (res.status === 401) {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 5000)
    }
  }

  return (
    <div className="px-10 py-6 text-black w-full">
      <h1 className="text-3xl font-medium my-8">Welcome Back</h1>
      <form action={handleSubmit}>
        <div className="space-y-4 mt-16">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-600 font-medium py-2 "
            >
              Username or Email
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username/Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-gray-600 font-medium py-2"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              required
            />
          </div>
          {/* Display Error Message */}
          <p className="text-red-500 text-center ">
            {isError ? " Wrong Username or Password" : ""}
          </p>
        </div>
        <Button className="mt-8">Sign In</Button>
      </form>
      {/* Register */}
      <div className="py-4 mt-4">
        <p className="text-center">
          Don't have an Account?
          <button
            className="text-blue-500 pl-1"
            onClick={() => setCurrentForm("register")}
          >
            Register Now
          </button>
          .
        </p>
      </div>
    </div>
  )
}
