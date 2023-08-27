import { useComponentTranslation } from "../hooks/useComponentTranslation";
import LangMenu from "./LangMenu";

export default function Header() {
    const t = useComponentTranslation("header");
    return (
        <header>
            <h1>{t("A11Y Explained")}</h1>
            <LangMenu />
        </header>
    );
}