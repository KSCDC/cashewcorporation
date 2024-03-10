import { useLanguage } from "../contexts/LanguageContext"

function useLanguageData(enData,mlData) {
    const {language} = useLanguage()
    const data = language ? enData : mlData
    return data
}

export default useLanguageData