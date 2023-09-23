"use client"

import { SwapiPersonResult } from "@/types/swapi"
import { useState } from "react"
import Modal from "./Modal"

export default function Search() {
  const [search, setSearch] = useState("")
  const [person, setPerson] = useState({} as SwapiPersonResult)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const apiUrl = `https://swapi.dev/api/people/?search=${encodeURIComponent(search)}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results[0]) {
          setPerson(data.results[0])
          setIsModalOpen(true)
          setSearch("")
        } else {
          setPerson({ name: `Not found: ${search}` } as SwapiPersonResult)
          setIsModalOpen(true)
          setSearch("")
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
  }

  return (
    <>
      <form className="container md:w-3/5 w-4/5 mb-4" onSubmit={handleSubmit}>
        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 outline-none"
            placeholder="Search character"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-yellow-500 
           font-medium rounded-lg text-sm px-4 py-2 outline-none"
          >
            Search
          </button>
        </div>
      </form>
      {isModalOpen && <Modal person={person} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
