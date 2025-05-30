import { useRouter } from "next/router";
import * as React from "react";

export function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter();

  React.useEffect(persistLocaleCookie, [locale, defaultLocale]);

  function persistLocaleCookie() {
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
  }
}
