import './App.css'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import i18n from "i18next";
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import { LanguageContext } from './services/contexts';
import { useState } from 'react';


export default function App() {
  const location = useLocation();
  const regex = /^\/[a-z]{2}\//;
  const language = i18n.language;
  const [ langStatus, setLangStatus] = useState(language);

  if (!regex.test(location.pathname)) {
    return (
      <Navigate to={`/${language}/${location.pathname.startsWith("/") ? location.pathname.substring(1) : location.pathname}${location.search !== "" ? location.search : ""}`} />
    );
  }
  

  return (
    <LanguageContext.Provider value={{langStatus, setLangStatus }}>
      <Helmet>
        <html lang={langStatus} />
      </Helmet>
      <Header />
      <main>
          <Outlet />
      </main>
    </LanguageContext.Provider>
  );
}

