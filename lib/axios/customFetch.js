import axios from 'axios'

const customFetch = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_WEBSITE}/api/v1`,
})

customFetch.defaults.headers.common['Authorization'] = '123'

export { customFetch }
