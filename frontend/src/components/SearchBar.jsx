import './SearchBar.css'

function SearchBar ({searchTerm, setSearchTerm, text}) {

    return (
        <input
        type="text"
        placeholder={text.searchMaterials}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        />
    )
}

export default SearchBar