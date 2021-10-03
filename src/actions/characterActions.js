import charactersService from '../services/characters'
import {
  handleCharactersAtInitialization,
  rewriteUrlsToNames,
  preparUrlsToFetch,
} from '../utils/handleCharacters'
import api from '../services/api'

export const initializeCharacters = () => {
  return async dispach => {
    const data = await charactersService.getInitialCharacters()
    const apiCharacters = data.results
    console.log(data)
    const urlsMap = await fetchAdditionalData(apiCharacters)
    const charactersWithRewritedUrls = rewriteUrlsToNames(
      apiCharacters,
      urlsMap
    )
    const characters = {
      totalCount: data.count,
      listOfCharacters: handleCharactersAtInitialization(
        charactersWithRewritedUrls
      ),
    }
    dispach({
      type: 'INIT_CHARACTERS',
      characters,
    })
  }
}

export const getAnotherPageOfCharacters = pageNumber => {
  return async dispach => {
    const data = await charactersService.getAdditionalCharacters(pageNumber)
    const apiCharacters = data.results
    console.log(data)
    const urlsMap = await fetchAdditionalData(apiCharacters)
    const charactersWithRewritedUrls = rewriteUrlsToNames(
      apiCharacters,
      urlsMap
    )
    const characters = {
      totalCount: data.count,
      listOfCharacters: handleCharactersAtInitialization(
        charactersWithRewritedUrls
      ),
    }
    dispach({
      type: 'GET_ANOTHER_PAGE_OF_CHARACTERS',
      characters,
    })
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
