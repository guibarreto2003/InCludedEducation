function FilterBar ({selectedFilter, setSelectedFilter}) {

    const filters = [
        'English',
        'Portuguese',
        'Literature',
        'Writing',
        'Grammar',
        'Reading Interpretation',
        'Chronicle',
        'Poetry',
        'Short Story',
        'Novel',
        'Linguistics',
        'Textual Genres',
        'Essay',
        'Argumentation',
        'History',
        'Geography'
    ]


    return (

        <div className="filter-bar">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setSelectedFilter(
                        selectedFilter === filter
                            ? 'All'
                            : filter
                    )
                    }
                    className={
                        selectedFilter === filter
                            ? 'active-filter'
                            : ''
                    }
                >
                {filter}
                </button>
            ))}
        </div>
        
    )
}

export default FilterBar