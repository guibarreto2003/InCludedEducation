import { getLibrary } from "../utils/libraryStorage";

import MaterialCard from "../components/MaterialsInfo/MaterialCard";


function Library({ text }) {

    const library = getLibrary()

    return (

        <div className="container">

            <h1>My Library</h1>

            <div className="materials">

                {library.map(material => (
                    <MaterialCard
                        key={material.id}
                        id={material.id}
                        grade={text[material.gradeKey]}
                        subject={text[material.subjectKeu]}
                        image={material.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library