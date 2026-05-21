const LIBRARY_KEY = 'library'

function getLibrary() {

    try {
        const library =
            localStorage.getItem(LIBRARY_KEY)
        
        if (!library) {
            return []
        }

        return JSON.parse(library)

}   catch (error) {

        console.error(
            'Error reading library',
            error
        )

        return[]
    }
}
    

function addToLibrary(material) {
    
    if (!material || !material.id) {
        return false
    }

    try {
        const library = getLibrary()
        const alreadyExists = library.some(
            item => item.id === material.id
        )

        if (alreadyExists) {
            return true
        }

        const updatedLibrary = [
            ...library,
            material
        ]

        localStorage.setItem(
            LIBRARY_KEY,
            JSON.stringify(updatedLibrary)
        )

        return true
    
    }   catch (error) {
            console.error(
                'Error adding material',
                error
            )

            return false
    }
}

function removeFromLibrary(id) {

    try {
        const library = getLibrary()

        const updatedLibrary = library.filter(
            item => item.id != id
        )

        localStorage.setItem(
            LIBRARY_KEY,
            JSON.stringify(updatedLibrary)
        )
    
    }   catch (error) {
        
        console.error(
            'Error removing material',
            error
        )
    }
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





