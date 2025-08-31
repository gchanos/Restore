import { debounce, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../app/store/store";
import { setSearchTerm } from "../../catalogSlice";

const Search = () => {
    const {searchTerm} = useAppSelector(state => state.catalog);
    const dispatch = useDispatch();
    const [term, setTerm] = useState(searchTerm);

    useEffect(() => {
        setTerm(searchTerm)
    }, [searchTerm]);

    const debouncedSearch = debounce(event => {
        dispatch(setSearchTerm(event.target.value))
    }, 500);

    return (
        <TextField
            label='Search products'
            variant='outlined'
            type='search'
            fullWidth
            value={term}
            onChange={e => {
                setTerm(e.target.value);
                debouncedSearch(e);
            }}
        />
    )
}

export default Search;