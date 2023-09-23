"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // TODO: toaster
    console.error(error)
  }, [error])

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2>Something went wrong, sorry...</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}
