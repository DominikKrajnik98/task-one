import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/people'

const getInitialCharacters = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getAdditionalCharacters = async nextUrl => {
  const response = await axios.get(nextUrl)
  return response.data
}

export default { getInitialCharacters, getAdditionalCharacters }
