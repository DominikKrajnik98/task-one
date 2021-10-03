export const handleCharactersAtInitialization = characters => {
  return characters.map(character => ({
    name: character.name,
    birthYear: character.birth_year,
    homeworld: character.homeworld,
    species: character.species,
    vehiclesAndStarships: character.vehiclesAndStarships,
    status: 'Active',
  }))
}

export const rewriteUrlsToNames = (characters, urlMap) => {
  for (const character of characters) {
    character.homeworld = urlMap.get(character.homeworld)
    const speciesNames = []
    for (const specie of character.species) {
      speciesNames.push(urlMap.get(specie))
    }
    character.species = speciesNames
    const vehiclesNames = []
    for (const vehicle of character.vehiclesAndStarships) {
      vehiclesNames.push(urlMap.get(vehicle))
    }
    character.vehiclesAndStarships = vehiclesNames
  }
  return characters
}

export const preparUrlsToFetch = (character, urlSet) => {
  addHomelansToSet(character, urlSet)
  addSpeciesToSet(character, urlSet)
  addVehiclesAndStarshipsToSet(character, urlSet)
}

const addHomelansToSet = (character, urlSet) => {
  if (!urlSet.has(character.homeworld)) {
    urlSet.add(character.homeworld)
  }
}

const addSpeciesToSet = (character, urlSet) => {
  for (const item of character.species)
    if (!urlSet.has(item)) {
      urlSet.add(item)
    }
}

const addVehiclesAndStarshipsToSet = (character, urlSet) => {
  character.vehiclesAndStarships = [
    ...character.vehicles,
    ...character.starships,
  ]
  //random shouffle vehicles
  character.vehiclesAndStarships.sort(() => Math.random() - 0.5)
  //get first two shouffled vehicles
  character.vehiclesAndStarships = character.vehiclesAndStarships.slice(0, 2)
  for (const vehicle of character.vehiclesAndStarships) {
    urlSet.add(vehicle)
  }
}
