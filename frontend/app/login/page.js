"use client"
import React, { useState } from "react"
import Image from "next/image"

import SignInForm from "./signInForm"
import RegisterForm from "./registerForm"
export default function Page() {
  const [currentForm, setCurrentForm] = useState("signIn")

  return (
    <div className="grid lg:grid-cols-7 grid-cols-1 md:grid-cols-4 min-h-screen w-full overflow-hidden">
      <div className="bg-black lg:col-span-5 hidden md:col-span-2 md:block relative">
        <Image
          src={
            "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg"
          }
          fill
          priority
          className="absolute object-cover opacity-80"
          alt="Buildings"
        />
        <div className="h-full w-full bg-black/50 absolute z-10 grid place-items-center px-20">
          <div>
            <h1 className="md:text-5xl lg:text-7xl pb-6 font-bold ">LOGO</h1>
            <h2 className="md:text-4xl lg:text-5xl">
              The danger which is least expected soonest comes to us.
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white col-span-1 md:col-span-2 flex h-full ">
        {currentForm === "signIn" ? (
          <SignInForm setCurrentForm={setCurrentForm} />
        ) : (
          <RegisterForm setCurrentForm={setCurrentForm} />
        )}
      </div>
    </div>
  )
}
