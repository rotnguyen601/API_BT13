import { useState } from "react";

export const SearchBar = ({functionSearchParent}) => {
    const [term, setTerm] = useState('search');
    const handleChange = (e) => {
        // console.log(e);
        setTerm(e.target.value);
    };
    const handleSubmit =  (e) => {
        e.preventDefault();
        functionSearchParent(term);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={term} />
            </form>
        </div>
    )
}

export default SearchBar;