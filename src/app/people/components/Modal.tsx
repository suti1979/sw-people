import { Planet, SwapiPersonResult } from "@/types/swapi"

async function getPlanet(planetUrl: string) {
  const res = await fetch(`${planetUrl}`)
  return res.json()
}

const Modal: React.FC<{ person: SwapiPersonResult; onClose: () => void }> = async ({
  person,
  onClose,
}) => {
  const planet: Planet = person.homeworld && (await getPlanet(person.homeworld))

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-bg fixed inset-0 bg-black opacity-50"
        onClick={handleBackgroundClick}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg relative md:w-3/5 w-4/5 ">
        <div className="flex flex-col justify-between text-black font-mono">
          <h2 className="text-xl font-bold">{person.name}</h2>
          {person.homeworld && (
            <div>
              <p>
                Height: <span className="font-bold">{person.height}</span>
              </p>
              <p>
                Mass: <span className="font-bold">{person.mass}</span>
              </p>
              <p>
                Birth year: <span className="font-bold">{person.birth_year}</span>
              </p>
              <p>
                Movies: <span className="font-bold">{person.films.length}</span>
              </p>
              <p>
                Planet: <span className="font-bold">{planet.name}</span>
              </p>
              <p>
                Planet terrain: <span className="font-bold">{planet.terrain}</span>
              </p>
              <p>
                Planet climate: <span className="font-bold">{planet.climate}</span>
              </p>
            </div>
          )}
          <button
            className="text-gray-700 hover:text-gray-900 hover:bg-red-400 rounded mt-4 p-2"
            onClick={onClose}
          >
            Close &#10006;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
