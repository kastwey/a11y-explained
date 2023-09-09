import "./App.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import i18n from "i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import { LanguageContext } from "./services/contexts";
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation();
  const regex = /^\/[a-z]{2}(\/|$)/;
  const language = i18n.language;
  const [langStatus, setLangStatus] = useState(language);

  useEffect(() => {
    setTimeout(() => {
      const elementWithFocus = document.querySelector(":focus") as HTMLElement;
      if (elementWithFocus) {
        elementWithFocus.focus();
      }
      const h2Element = document.querySelector("h2");

      if (h2Element) {
        if (!h2Element.hasAttribute("tabindex")) {
          h2Element.setAttribute("tabindex", "-1");
        }
        h2Element.focus();
      }
    }, 100);
  }, [location.pathname]);

  if (!regex.test(location.pathname)) {
    return (
      <Navigate
        to={`/${language}/${
          location.pathname.startsWith("/")
            ? location.pathname.substring(1)
            : location.pathname
        }${location.search !== "" ? location.search : ""}`}
      />
    );
  }

  return (
    <LanguageContext.Provider value={{ langStatus, setLangStatus }}>
      <HelmetProvider>
        <Helmet>
          <html lang={langStatus} />
        </Helmet>
        <Header />
        <main>
          <Outlet />
        </main>
      </HelmetProvider>
    </LanguageContext.Provider>
  );
}
