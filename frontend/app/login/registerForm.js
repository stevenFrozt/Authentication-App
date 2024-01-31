import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"

export default function RegisterForm({ setCurrentForm }) {
  const [isDisabled, setIsDisabled] = useState(false)
  async function handleSubmit(formData) {
    const payload = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("firstName"),
      middleName: formData.get("middleName"),
      lastName: formData.get("lastName"),
      birthday: formData.get("birthday")
    }
    try {
      axios.post("http://localhost:8000/users", payload)
      setIsDisabled(true)
      toast.success("Account Registered Successfully")
      setTimeout(() => {
        setCurrentForm("signIn")
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="px-10 py-6 text-black w-full  max-h-screen overflow-y-scroll">
      <h1
        className="text-3xl font-medium my-8 flex items-center gap-1 cursor-pointer"
        onClick={() => setCurrentForm("signIn")}
      >
        <ChevronLeftIcon className="h-8 w-8" />
        Register Form
      </h1>
      <form action={handleSubmit}>
        <div className="space-y-4 mt-16">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-gray-600 font-medium py-2 "
            >
              Username
            </label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-medium py-2 ">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Enter Email"
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
              type="text"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-gray-600 font-medium py-2 "
            >
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter firstName"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="middleName"
              className="text-gray-600 font-medium py-2 "
            >
              Middle Name
            </label>
            <Input
              id="middleName"
              name="middleName"
              type="text"
              placeholder="Enter Middle Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-gray-600 font-medium py-2 "
            >
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="birthday"
              className="text-gray-600 font-medium py-2 "
            >
              Birthday
            </label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              placeholder="Enter Birthday"
              required
              className="px-3 py-3 rounded-md outline-1 outline-gray-500 border"
            />
          </div>
        </div>
        <Button className="mt-8" disabled={isDisabled}>
          {isDisabled ? "Loading..." : "Create Account"}
        </Button>
      </form>
      {/* Register */}
      <div className="py-4 mt-4">
        <p className="text-center">
          Already have an Account?
          <button
            className="text-blue-500 pl-1"
            onClick={() => setCurrentForm("signIn")}
          >
            {" "}
            Sign In
          </button>
          .
        </p>
      </div>
    </div>
  )
}
