import axios from 'axios'
import { SPECIES_URL } from '../utils/urls'

const getInitialSpecies = async () => {
  const response = await axios.get(SPECIES_URL)
  return response.data
}

const getAdditionalSpecies = async url => {
  const response = await axios.get(url)
  return response.data
}

export default { getInitialSpecies, getAdditionalSpecies }
