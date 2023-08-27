import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(HttpApi) // Registering the back-end plugin
    .use(LanguageDetector)
    .init({
        fallbackLng: "en",
        debug: true,
        ns: "translation",
        interpolation: {
            escapeValue: false,
        },
        defaultNS: "translation",
        load: 'languageOnly',
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        detection: {
            order: ['querystring', 'path'],
            lookupQuerystring: 'lng',
            lookupFromPathIndex: 0,
        }
    }
    );

    export default i18next;