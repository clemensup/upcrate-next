import { AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRandomHeads } from "../../hooks/use-random-heads";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import Image from "next/image";

export function InviteFriendsSection() {
  const { t, lang } = useTranslation("common");
  const heads = useRandomHeads();

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <AnimatePresence>{heads}</AnimatePresence>

      <div className="z-10 relative text-purple-dark max-w-6xl mx-auto pb-28 relative">
        <div className="md:mt-15 flex flex-col items-center">
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center whitespace-pre-line">
            {t("sections.invite_friends.title")}
          </h3>

          <div className="relative md:p-10 border-l-2 border-purple-dark border-t-2 border-r-2 border-b-2 md:border-b-0 mt-10 p-4 bg-white opacity-95 md:opacity-100">
            <div className="flex justify-center items-center flex-col md:gap-20 md:mt-16 relative">
              <Parallax>
                <Image src="/artcrew/invite.jpg" width={900} height={542} />
              </Parallax>
              
            </div>
          </div>
          <div className="mt-10 md:mt-28 z-10">
            <Button
              className="bg-orange text-white hover:bg-red uppcercase"
              href={`https://shop.upcrate.art${lang === "en" ? "" : "/de"}/`}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
