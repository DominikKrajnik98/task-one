import axios from 'axios'

const getData = async nextUrl => {
  const response = await axios.get(nextUrl)
  return response.data
}

export default { getData }
