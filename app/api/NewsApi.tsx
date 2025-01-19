import { News } from 'app/types/NewsList'

const API_URL = 'https://api.hnpwa.com/v0/'

const fetchAPI = async (endPoint: string, params: number) => {
  try {
    const res = await fetch(`${API_URL}${endPoint}/${params}.json`)

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

export const newsApi = (params: number): Promise<News[]> => {
  return fetchAPI('news', params)
}
