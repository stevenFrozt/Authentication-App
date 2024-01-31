import React from "react"

export default function Button(props) {
  return (
    <button
      {...props}
      className={`px-3 py-3 rounded-md transition-all duration-200 bg-gray-800 w-full text-white outline-1 hover:bg-gray-900 outline-gray-500 border ${props.className}`}
    >
      {props.children || "button"}
    </button>
  )
}
