import axios from 'axios'
import { HOMEWORLD_URL } from '../utils/urls'

const getInitialHomeworld = async () => {
  const response = await axios.get(HOMEWORLD_URL)
  return response.data
}

const getAdditionalHomeworld = async url => {
  const response = await axios.get(url)
  return response.data
}

export default { getInitialHomeworld, getAdditionalHomeworld }
