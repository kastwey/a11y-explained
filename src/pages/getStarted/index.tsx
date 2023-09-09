import { useComponentTranslation } from "../../hooks/useComponentTranslation";
export default function Index() {
    const t = useComponentTranslation("pages/getStarted/Index");
    return (
        <>
        <h2>{t("Get started!")}</h2>
        </>
    );
}