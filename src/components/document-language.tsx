"use client";

import { useEffect } from "react";

export function DocumentLanguage({ lang }: { lang: string }) {
  useEffect(() => {
    const previousLanguage = document.documentElement.lang;
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = previousLanguage;
    };
  }, [lang]);

  return null;
}
