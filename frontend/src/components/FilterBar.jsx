function FilterBar ({selectedFilter, setSelectedFilter, text}) {

    const filters = [
        'all',
        'english',
        'portuguese',
        'literature',
        'writing',
        'grammar',
        'readingInterpretation',
        'chronicle',
        'poetry',
        'shortStory',
        'novel',
        'linguistics',
        'textualGenres',
        'essay',
        'argumentation',
        'history',
        'geography'
    ]


    return (

        <div className="filter-bar">
            {filters.map(filter => (
                <button
                    key={text[filter]}
                    onClick={() => setSelectedFilter(
                        selectedFilter === filter
                            ? 'all'
                            : filter
                    )
                    }
                    className={
                        selectedFilter === filter
                            ? 'active-filter'
                            : ''
                    }
                >
                {text[filter]}
                </button>
            ))}
        </div>
        
    )
}

export default FilterBar