import React from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { getExpirationDate } from "./cookie-banner";
import { FormattedText } from "./formatted-text";

export const bannerCookie = "COLOR_WEEK";

export function Banner() {
  const [showBanner, setShowBanner] = React.useState(false);
  const [cookies, setCookie] = useCookies([bannerCookie]);

  function handleClick(e) {
    e.preventDefault();
    setCookie(bannerCookie, true, { path: "/", expires: getExpirationDate(2) });
    setShowBanner(false);
  }

  React.useEffect(() => {
    console.log(cookies[bannerCookie]);
    if (cookies[bannerCookie] === undefined) {
      setShowBanner(true);
    }
  }, [cookies[bannerCookie]]);

  if (!showBanner) {
    return <div></div>;
  }

  return (
    <Link href="/subscriptions">
      <div className="bg-purple text-white text-center p-3 relative px-12 md:px-auto">
        ✨
        <FormattedText
          transKey="common:bannerText"
          delimiter={[<span className="text-orange" />]}
        />
        <span
          className="absolute right-0 top-0 bottom-0 flex justify-center items-center w-10 font-bold border-l-2"
          onClick={handleClick}
        >
          X
        </span>
      </div>
    </Link>
  );
}
