import { Link, useMatches, useLocation } from "react-router-dom";
import { useComponentTranslation } from "../hooks/useComponentTranslation";

export default function Breadcrump() {
  const t = useComponentTranslation("components/Breadcrump");
  const match = useMatches().filter((m) => m.handle && (m.handle as any).crumb);
  return (
    <>
      <nav aria-label={t("Breadcrumb")}>
        {match && match.length > 0 && (
          <ul>
            {match.map((item) => {
              const attributes: { "aria-current": "page" } | { } = location.pathname == item.pathname ? { "aria-current": "page" } : { };
              return (
              <li>
                {location.pathname == item.pathname ? <span {...attributes}>{(item.handle as any)?.crumb()}</span> : (<Link to={item.pathname}>{(item.handle as any)?.crumb()}</Link>)}
              </li>);
            })}
          </ul>
        )}
      </nav>
    </>
  );
}
