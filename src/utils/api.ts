import axios from 'axios'

const ROOT_URL = 'https://amiiboapi.com/api/amiibo/?character=Mario'

export default axios.create({
  baseURL: ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
