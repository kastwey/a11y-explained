import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useComponentTranslation } from "../hooks/useComponentTranslation";
import { Trans } from 'react-i18next'
import i18next from "../services/i18n";

export default function Index() {
    const t = useComponentTranslation("pages/Index");
    return (
        <>
            <PageTitle title={t("Home")} />
            <h2>{t("Home")}</h2>
<p>{t("Welcome to A11YExplained, the place to learn about accessibility in a practical and easy way!")}</p>
<p><Trans t={t}>If you're a bit lost, you might want to take a look at our section on: <Link to={`/${i18next.language}/getStarted/`}>What is accessibility?</Link>, or <Link to={`/${i18next.language}/applyingAccessibility`}>How do I apply accessibility to my website?</Link> Or if you're interested in getting resources for your day-to-day work, read on.</Trans></p>

        </>
    );
}