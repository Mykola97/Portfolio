import { createContext } from "react";

import { Language } from "@/locales/index";

export interface I18nContextValue {
  language: Language;

  setLanguage: (language: Language) => void;

  t(fallback: string, key?: string): string
}

export const I18nContext =
  createContext<I18nContextValue | null>(null);