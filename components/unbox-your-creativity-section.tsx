import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Button, Caret } from ".";

interface SubscribeNowSectionProps {
  className?: string;
  buttonClassName?: string;
}

export function UnboxYourCreativitySection({
  children,
  className,
  buttonClassName,
}: React.PropsWithChildren<SubscribeNowSectionProps>): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <section className={`text-center p-10 sm:p-40 ${className}`}>
      <Image src="/unbox-your-creativity.svg" width="280" height="100%" />

      {children && (
        <h3 className="text-3xl text-purple-dark max-w-4xl mx-auto whitespace-pre-wrap">
          {children}
        </h3>
      )}

      {buttonClassName && (
        <Button className={`${buttonClassName} text-white`} href="/TODO">
          {t("subscribe_now_button_text")}
          <Caret />
        </Button>
      )}
    </section>
  );
}
