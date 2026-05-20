function filterMaterials(
    materials,
    searchTerm,
    selecetedFilter,
    text
) {

    return materials.filter(material => {

        const matchesSearch =
            text[material.subjectKey]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
    
        const matchesFilter =
            selecetedFilter === 'All'
                ? true
                : text[material.subjectKey] === selecetedFilter
        
        return matchesSearch && matchesFilter
    })
}

export default filterMaterials