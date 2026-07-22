import { createContext } from "react";

export type Language = "en" | "fr";

export interface I18nContextValue {
  language: Language;

  setLanguage: (language: Language) => void;

  t(fallback: string, key?: string): string
}

export const I18nContext =
  createContext<I18nContextValue | null>(null);