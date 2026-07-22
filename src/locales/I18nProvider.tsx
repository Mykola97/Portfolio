"use client";

import { useState } from "react";
import { I18nContext, Language } from "@/locales/I18nContext";

import en from "@/locales/en";
import fr from "@/locales/fr";

const translations = {
  en,
  fr
};

export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  function normalize(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ");
}

  function t(fallback: string, key?: string): string {

    if (!key) {
      return fallback;
    }

    const value = key
      .split(".")
      .reduce(
        (obj: any, part) => obj?.[part],
        translations[language]
      );

    if (typeof value !== "string") {
      console.warn(`Missing translation: ${key}`);
      return fallback;
    }

    return normalize(value);
  }

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}