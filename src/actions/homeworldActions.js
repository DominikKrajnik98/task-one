import homeworldService from '../services/homeworld'

export const initializeHomeworld = () => {
  return async dispatch => {
    const data = await homeworldService.getInitialHomeworld()
    const rawHomeworld = data.results
    const homeworld = rawHomeworld.map(specie => specie.name)
    dispatch({
      type: 'INIT_HOMEWORLD',
      data: {
        count: data.count,
        names: homeworld,
        next: data.next,
      },
    })
  }
}

export const addHomeworld = (url) => {
  return async dispatch => {
    const data = await homeworldService.getAdditionalHomeworld(url)
    const rawHomeworld = data.results
    const homeworld = rawHomeworld.map(specie => specie.name)
    dispatch({
      type: 'ADD_HOMEWORLD',
      data: {
        count: data.count,
        names: homeworld,
        next: data.next,
      },
    })
  }
}
