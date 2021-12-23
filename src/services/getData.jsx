
const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'

export const getData = async ({ keyword }) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

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