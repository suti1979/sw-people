"use client"
import { SwapiPersonResult } from "@/types/swapi"
import Image from "next/image"
import Modal from "./Modal"
import { useState } from "react"

export default function Card({ person }: { person: SwapiPersonResult }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center border-2 border-gray-600 gap-4 md:w-3/5 w-4/5 h-min-48 p-4 m-4 bg-gray-700 rounded-xl shadow-md cursor-pointer hover:bg-gray-500"
      >
        <div className="w-2/5  ">
          <Image
            src={`https://picsum.photos/100?random=${person.birth_year}`}
            alt={person.name}
            width={100}
            height={100}
            priority={true}
            className=" rounded-full border-4 border-gray-400"
          />
        </div>
        <div className="w-3/5 text-right font-mono ">
          <p>
            <span className="font-bold text-yellow-500">{person.name}</span>
          </p>
        </div>
      </div>
      {isModalOpen && <Modal person={person} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
