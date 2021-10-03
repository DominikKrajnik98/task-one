import charactersService from '../services/characters'
import {
  handleCharactersAtInitialization,
  rewriteUrlsToNames,
  preparUrlsToFetch,
} from '../utils/handleCharacters'
import api from '../services/api'
import { setMainUrl } from './mainUrlActions'
import { restetCurrentPage } from './currentPageActions'
import {
  BASIC_URL,
  PAGE_REFERENCE,
  NAME_FILTER_URL,
  DEFAULT_PAGE_NUMBER,
} from '../utils/urls'

export const initializeCharacters = () => {
  return async dispatch => {
    const data = await charactersService.getInitialCharacters()
    const characters = await handleData(data)
    dispatch({
      type: 'INIT_CHARACTERS',
      characters,
    })
  }
}

export const getAnotherPageOfCharacters = pageNumber => {
  return async (dispatch, getState) => {
    const url = getState().mainUrl
    const data = await api.getPage(url, pageNumber)
    const characters = await handleData(data)
    dispatch({
      type: 'GET_ANOTHER_PAGE_OF_CHARACTERS',
      characters,
    })
  }
}

export const getCharactersWithNameFilter = nameFilter => {
  return async dispatch => {
    const url = NAME_FILTER_URL + nameFilter
    const newUrl = url + PAGE_REFERENCE
    dispatch(setMainUrl(newUrl))
    dispatch(restetCurrentPage())
    const data = await api.getData(url)
    const characters = await handleData(data)
    dispatch({
      type: 'GET_ANOTHER_PAGE_OF_CHARACTERS',
      characters,
    })
  }
}

export const resetCharacterFilter = () => {
  return async dispatch => {
    dispatch(setMainUrl(BASIC_URL))
    dispatch(restetCurrentPage())
    const data = await api.getData(BASIC_URL + DEFAULT_PAGE_NUMBER)
    const characters = await handleData(data)
    dispatch({
      type: 'GET_ANOTHER_PAGE_OF_CHARACTERS',
      characters,
    })
  }
}

export const updateCharacters = characters => {
  return {
    type: 'UPDATE_CHARACTERS',
    characters,
  }
}

export const updateCharacter = (name, index) => {
  return {
    type: 'UPDATE_CHARACTER_NAME',
    name,
    index,
  }
}

export const toogleCharacterStatus = (name) => {
  return{
    type: 'TOGGLE_CHARACTER_STATUS',
    name,
  }
}

export const removeCharacter = (name) => {
  return{
    type: 'REMOVE_CHARACTER',
    name,
  }
}

async function handleData(data) {
  const apiCharacters = data.results
  const urlsMap = await fetchAdditionalData(apiCharacters)
  const charactersWithRewritedUrls = rewriteUrlsToNames(apiCharacters, urlsMap)
  return {
    totalCount: data.count,
    listOfCharacters: handleCharactersAtInitialization(
      charactersWithRewritedUrls
    ),
  }
}

async function fetchAdditionalData(characters) {
  const urlMap = new Map()
  const urlSet = new Set()

  for (const character of characters) {
    preparUrlsToFetch(character, urlSet)
  }
  await Promise.all(
    [...urlSet].map(async function (url) {
      const data = await api.getData(url)
      urlMap.set(url, data.name)
    })
  )

  return urlMap
}
