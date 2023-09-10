import { useComponentTranslation } from "../../../../hooks/useComponentTranslation";
export const title = "Images";

export default function Index() {
    const t = useComponentTranslation("pages/barriers/images/Index");
    return (
        <h2>{t(title)}</h2>
        
    )
}