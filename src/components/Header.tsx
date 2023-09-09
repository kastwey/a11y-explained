import { useComponentTranslation } from "../hooks/useComponentTranslation";
import LangMenu from "./LangMenu";
import { useLocation } from "react-router-dom";
import Breadcrump from './Breadcrump';
export default function Header() {
    const t = useComponentTranslation("components/Header");
    const location = useLocation();

    return (
        <header>
            <h1>{t("A11Y Explained")}</h1>
            <LangMenu />
            <Breadcrump  currentPath={location.pathname} />
        </header>
    );
}