import { ListMovies } from 'app/types/MovieList'

const API_URL = 'https://yts.mx/api/v2/'

const fetchAPI = async (endPoint: string, params = {}) => {
  try {
    const query = new URLSearchParams(params).toString()
    const res = await fetch(`${API_URL}${endPoint}?${query}`)

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('failed to fetch', error)
    throw error
  }
}

export const listMoviesApi = (params = {}): Promise<ListMovies> => {
  return fetchAPI('list_movies.json', params)
}
