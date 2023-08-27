import { useComponentTranslation } from "../hooks/useComponentTranslation";
import { Helmet } from 'react-helmet';

type PageTitleProps = {
    title: string
};

export default function PageTitle({ title }: PageTitleProps) {
    const t = useComponentTranslation("pageTitle");
    const pageTitle = t("{{title}} - A11YExplained", { title: title });

    return (
        <Helmet>
            <title>{pageTitle}</title>
        </Helmet>
    );
}