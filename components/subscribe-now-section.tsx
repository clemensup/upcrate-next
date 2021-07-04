import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button, Caret } from ".";

interface SubscribeNowSectionProps {
  className: string;
  description: string;
  buttonClassName: string;
}

export function SubscribeNowSection({
  className,
  description,
  buttonClassName,
}: SubscribeNowSectionProps): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <section className={`text-center p-10 sm:p-40 ${className}`}>
      <Image src="/unbox-your-creativity.svg" width="280" height="100%" />

      <h3 className="text-3xl text-purple-dark max-w-4xl mx-auto whitespace-pre-wrap">
        {description}
      </h3>

      <Button className={`${buttonClassName} text-white`} href="/TODO">
        {t("subscribe_now_button_text")}
        <Caret />
      </Button>
    </section>
  );
}
