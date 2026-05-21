function getLibrary() {

    const library =
        localStorage.getItem('library')

    return library
        ? JSON.parse(library)
        : []
}

function addToLibrary(material) {
    
    const library = getLibrary()

    const alreadyExists = library.some(
        item => item.id === material.id
    )

    if (alreadyExists) return

    library.push(material)

    localStorage.setItem(
        'library',
        JSON.stringify(library)
    )
}

function removeFromLibrary(id) {

    const library = getLibrary()

    const updatedLibrary = library.filter(
        item => item.id !== id
    )

    localStorage.setItem(
        'library',
        JSON.stringify(updatedLibrary)
    )
}

function isInLibrary(id) {

    const library = getLibrary()

    return library.some(
        item => item.id === id
    )
}

export{
    getLibrary,
    addToLibrary,
    removeFromLibrary,
    isInLibrary
}





