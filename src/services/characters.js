import axios from 'axios'
import { BASIC_URL } from '../utils/urls'

const getInitialCharacters = async () => {
  const response = await axios.get(BASIC_URL)
  return response.data
}

export default { getInitialCharacters }
