export type SwapiPerson = {
  count: number
  next: string | null
  previous: string | null
  results: SwapiPersonResult[]
}

export type SwapiPersonResult = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type Planet = {
  climate: string
  diameter: string
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}
