import { createContext, useContext, useState } from "react";

import translations from "../data/translations";

const LanguageContext = createContext()

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    const text = translations[language]

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                text
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

function useLanguage() {
    return useContext(LanguageContext)
}

export {
    LanguageProvider,
    useLanguage
}