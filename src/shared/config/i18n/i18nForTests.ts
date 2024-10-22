import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nForTests = i18n.createInstance()

i18nForTests.use(initReactI18next).init({
    lng: 'cimode',
    fallbackLng: 'cimode',
    debug: false,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        cimode: { translations: {} },
    },
})

export default i18nForTests
