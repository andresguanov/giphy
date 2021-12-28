import { API_KEY, API_URL } from './settings'

export const getData = async ({ keyword }) => {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=30&offset=0&rating=G&lang=en`

    const resp = await fetch(apiURL)
    const response = await resp.json()
    const { data } = response
    const gifs = data.map(gif => {
        const { id, title, images } = gif
        const { url } = images.downsized_medium
        return { id, title, url }
    })

    return gifs
}