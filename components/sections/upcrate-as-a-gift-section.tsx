import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";

export function UpcrateAsGiftSection() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-center bg-cover text-center relative min-h-sectionBig md:min-h-sectionBigMd py-10 md:py-20">
      <div className="hidden md:block absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src="/upcrate-as-gift/background.jpg"
          layout="fixed"
          width={2200}
          height={889}
        />
      </div>
      <div className="md:hidden absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src="/upcrate-as-gift/background.jpg"
          layout="fixed"
          width={1100}
          height={444.5}
        />
      </div>
      <div className="z-10 relative flex flex-col justify-center items-center">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl z-10">
          {t("sections.upcrate_as_gift.title")}
        </h3>
        <Image src="/upcrate-as-gift/box.png" width={808} height={661} />
        <Button
          className="bg-orange text-white -mt-10"
          href="https://shop.upcrate.art/product/upcrategift/"
        >
          {t("sections.upcrate_as_gift.cta")}
        </Button>
      </div>
    </section>
  );
}
