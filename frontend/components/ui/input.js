import React from "react"

export default function Input(props) {
  if (props.type === "text" || props.type === "password") {
    return (
      <input
        {...props}
        className={`px-3 py-3 rounded-md outline-1 outline-gray-500 border ${props.className}`}
      />
    )
  }
}
