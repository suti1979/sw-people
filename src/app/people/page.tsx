import { SwapiPerson } from "@/types/swapi"
import Card from "./components/Card"
import Link from "next/link"
import Search from "./components/Search"

const API_URL = "https://swapi.dev/api/people/?page="

async function getSwPeople(pageId: string) {
  const res = await fetch(`${API_URL}${pageId}`)
  return res.json()
}

interface Props {
  searchParams: {
    pageId: string
  }
}

export default async function People({ searchParams: { pageId = "1" } }: Props) {
  const swPeopleData: SwapiPerson = await getSwPeople(pageId)

  return (
    <main className="container mx-auto flex min-h-screen  flex-col items-center justify-between mt-4">
      <Search />
      <section className="w-full flex flex-col items-center justify-center ">
        {swPeopleData.results.map((person) => (
          <Card key={person.name} person={person} />
        ))}
      </section>

      <section className="flex gap-8 my-8">
        {swPeopleData.previous && (
          <Link href={`/people/?pageId=${parseInt(pageId) - 1}`}>
            <span className="p-4 rounded bg-slate-500 hover:bg-slate-200 hover:text-black">
              &#x2190;
            </span>
          </Link>
        )}
        {swPeopleData.next && (
          <Link href={`/people/?pageId=${parseInt(pageId) + 1}`}>
            <span className="p-4 rounded bg-slate-500 hover:bg-slate-200 hover:text-black">
              &#x2192;
            </span>
          </Link>
        )}
      </section>
    </main>
  )
}
