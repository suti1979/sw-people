import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-16 items-center justify-between font-mono font-bold text-center text-yellow-500 text-3xl">
        <p>These not the droids you are looking for...</p>
        <Link href="/people">
          <p className="text-yellow-500 hover:text-white">Go for Star Wars people here</p>
        </Link>
      </div>
    </main>
  )
}
