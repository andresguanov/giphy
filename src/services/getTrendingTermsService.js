import { API_KEY, API_URL } from './settings'

export const getTrendingTerms = async () => {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    const resp = await fetch(apiURL)
    const response = await resp.json()
    const { data } = response

    return data
}