import materials from "../data/materials";

function getAllMaterials() {
    return materials
}

function getMaterialById(id) {
    
    return materials.find(
        materials => materials.id === Number(id)
    )
}

export {
    getAllMaterials,
    getMaterialById
}