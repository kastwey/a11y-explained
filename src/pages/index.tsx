import PageTitle from "../components/PageTitle";
import { useComponentTranslation } from "../hooks/useComponentTranslation";

export default function Index() {
    const t = useComponentTranslation("index");
    return (
        <>
            <PageTitle title={t("Home")} />
            <h2>{t("Home")}</h2>
            <p>{t("Welcome to A11IExplained! If you want to learn more about accessibility, this is your site!")}</p>
        </>
    );
}