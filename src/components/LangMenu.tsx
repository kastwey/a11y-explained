import { useContext, useEffect } from "react";
import { useComponentTranslation } from "../hooks/useComponentTranslation";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext, LanguageContextType } from "../services/contexts";
import i18next from "../services/i18n";

export default function LangMenu() {
    const languages = ["en", "es"];
    const location = useLocation();
    const langContext = useContext(LanguageContext)

    const t = useComponentTranslation("langMenu");
    function changeLanguage(lang: string) {
        i18next.changeLanguage(lang);
    }

    return (
        <nav aria-label={t("Language menu")}>
            <ul>
                {languages.map(l =>
                    <li><Link to={`/${l}/${location.pathname.substring(4)}${location.search}`} onClick={(e) => { changeLanguage(l); }}>{t(l)}</Link></li>
                )}
            </ul>
        </nav>
    );
}