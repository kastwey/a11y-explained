import { useTranslation } from 'react-i18next';

export function useComponentTranslation(ns: string) {
  const { t } = useTranslation(ns);
  return t;
}
