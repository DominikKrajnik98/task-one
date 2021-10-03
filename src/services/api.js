import axios from 'axios'

const getData = async url => {
  const response = await axios.get(url)
  return response.data
}

const getPage = async (url, number) => {
  const respone = await axios.get(url + number)
  return respone.data
}

export default { getData, getPage }
