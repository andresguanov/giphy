import { ListGifs } from "../../components/ListGifs"

export const SearchResults = ({ params }) => {

    const { keyword } = params
    return (
        <ListGifs keyword={keyword} />
    )
} 