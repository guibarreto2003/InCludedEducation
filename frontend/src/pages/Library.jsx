import { getLibrary } from "../utils/libraryStorage";

import MaterialCard from "../components/MaterialsInfo/MaterialCard";
import { useLanguage } from "../context/LanguageContext";


function Library() {

    const library = getLibrary()
    const { text } = useLanguage()

    return (

        <div className="container">

            <h1>{text.myLibrary}</h1>

            <div className="materials">

                {library.map(material => (
                    <MaterialCard
                        key={material.id}
                        id={material.id}
                        grade={text[material.gradeKey]}
                        subject={text[material.subjectKey]}
                        image={material.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library
