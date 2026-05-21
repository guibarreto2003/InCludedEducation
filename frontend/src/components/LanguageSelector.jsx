import { useState } from "react";
import translations from "../data/translations";
import './LanguageSelector.css'

function LanguageSelector ({ language, setLanguage}) {
    
    const [showLanguage, setShowLanguage] = useState(false)
    
    const text = translations[language]

    return (
        <div className='language-selector'>
            <button onClick={() => setShowLanguage(!showLanguage)}>
                {text.languageLabel}
            </button>

      
            <div className={`language-options ${showLanguage ? 'show' : ''}`}>
                <button onClick={() => {
                    setLanguage('en')
                    setShowLanguage(false)
                }}
                    className= {language === 'en' ? 'active-language' : ''}
                    > {text.english}
                </button>
        
                <button onClick={() => {
                    setLanguage('pt'),
                    setShowLanguage(false)}  
                }
                    className= {language === 'pt' ? 'active-language' : ''}
                    > {text.portuguese}
                </button>
            </div>
        </div>
    )
}

export default LanguageSelector