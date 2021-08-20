import useTranslation from "next-translate/useTranslation";
import { Button } from "../elements/button";
import { RadialGradient } from "../elements/radial-gradient";
import { Caret } from "../elements/svg";
import { UpcrateArtcrewSvg } from "../elements/svg/upcrate-artcrew-svg";

export function InviteFriendsSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <div className="z-10 relative text-purple-dark max-w-6xl mx-auto pb-28">
        <div className="md:mt-15 flex flex-col items-center bg-many-heads md:bg-contain bg-no-repeat bg-center">
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center whitespace-pre-line">
            {t("sections.invite_friends.title")}
          </h3>

          <div className="flex justify-center items-center flex-col gap-20 mt-32 relative">
            <UpcrateArtcrewSvg />
            <div className="max-w-4xl mx-auto text-3xl">
              {t("sections.invite_friends.text")}
            </div>
          </div>
          <div className="mt-10">
            <Button
              className="bg-orange text-white hover:bg-red uppcercase"
              href="https://shop.upcrate.art/refer-a-friend/"
            >
              {t("sections.invite_friends.cta")}
              <Caret />
            </Button>
          </div>
        </div>
      </div>
      <RadialGradient className="bg-purple" />
      <RadialGradient className="bg-pink" variant="bottom-right" />
      <RadialGradient className="bg-green" variant="top-left" />
    </section>
  );
}
