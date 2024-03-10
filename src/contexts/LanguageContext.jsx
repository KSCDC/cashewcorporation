import React,{createContext,useContext,useState} from 'react'

const LanguageContext = createContext()


export const LanguageProvide = ({children}) => {
    const [language,setLanguage] = useState(true)
    return (
        <LanguageContext.Provider value ={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if(!context){
        throw new Error('useLanguage must be used within a Language Provider')
    }
    return context;
}
export default LanguageContext