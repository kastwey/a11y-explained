import PageTitle from "../components/PageTitle";
import { useComponentTranslation } from "../hooks/useComponentTranslation";

export default function Index() {
    const t = useComponentTranslation("index");
    return (
        <>
            <PageTitle title={t("Home")} />
            <h1>{t("Accessibility demos", { user: "juanjo" })}</h1>
        </>
    );
}