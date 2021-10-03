import speciesService from '../services/species'

export const initializeSpecies = () => {
  return async dispatch => {
    const data = await speciesService.getInitialSpecies()
    const rawSpecies = data.results
    const species = rawSpecies.map(specie => specie.name)
    dispatch({
      type: 'INIT_SPECIES',
      data: {
        count: data.count,
        names: species,
        next: data.next,
      },
    })
  }
}

export const addSpcies = url => {
  return async dispatch => {
    const data = await speciesService.getAdditionalSpecies(url)
    const rawSpecies = data.results
    const species = rawSpecies.map(specie => specie.name)
    dispatch({
      type: 'ADD_SPECIES',
      data: {
        count: data.count,
        names: species,
        next: data.next,
      },
    })
  }
}
