import { Dispatch, SetStateAction, createContext } from "react";
export type LanguageContextType = {
    langStatus: string;
    setLangStatus: Dispatch<SetStateAction<string>>;
  };

  export const LanguageContext = createContext<LanguageContextType | null>(null);