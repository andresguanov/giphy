import { ListGifs } from "@/components/ListGifs"
import { Spinner } from '@/components/Spinner'
import { useGifs } from "@/hooks/useGifs"

export const SearchResults = ({ params }) => {

    const { keyword } = params

    const { loading, gifs } = useGifs({ keyword })

    return <>
        {
            loading
                ? <Spinner />
                : <ListGifs gifs={gifs} />

        }
    </>

} 