import { useContext } from "react";
import { useComponentTranslation } from "../hooks/useComponentTranslation";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext, LanguageContextType } from "../services/contexts";
import i18next from "../services/i18n";

export default function LangMenu() {
    const languages = ["en", "es"];
    const location = useLocation();
    const langContext = useContext(LanguageContext)
    const t = useComponentTranslation("components/LangMenu");
    function changeLanguage(lang: string) {
        i18next.changeLanguage(lang);
        const langStatus = langContext as LanguageContextType;
        if (langStatus !== null) {
            langStatus.setLangStatus(lang);
        }
    }

    return (
        <nav aria-label={t("Language menu")}>
            <ul>
                {languages.map(l => {
                    const attributes: { "aria-current": "page" } | {} = i18next.language === l ? { "aria-current": "page" } : {};
                    return (
                        <li><Link to={`/${l}/${location.pathname.substring(4)}${location.search}`} onClick={() => { changeLanguage(l); }} {...attributes}>{t(l)}</Link></li>
                    );
                })}
            </ul>
        </nav>
    );
}