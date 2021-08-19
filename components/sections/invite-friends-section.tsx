import { Button } from "../elements/button";
import { RadialGradient } from "../elements/radial-gradient";
import { Caret } from "../elements/svg";
import { UpcrateArtcrewSvg } from "../elements/svg/upcrate-artcrew-svg";

export function InviteFriendsSection() {
  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <div className="z-10 relative text-purple-dark max-w-6xl mx-auto pb-28">
        <div className="md:mt-15 flex flex-col items-center bg-many-heads md:bg-contain bg-no-repeat bg-center">
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center">
            Invite friends to the art crew
            <br /> and save money together!
          </h3>

          <div className="flex justify-center items-center flex-col gap-20 mt-32 relative">
            <UpcrateArtcrewSvg />
            <div className="max-w-4xl mx-auto text-3xl">
              If you refer a friend to us via Facebook, Twitter or email and
              he/she/they subscribe, you will both receive a 15% discount on
              further purchases. For example, if your friend subscribes for 3
              months, you will receive a discount code with a value of € 8.16
              that you can redeem in our shop!
            </div>
          </div>
          <div className="mt-10">
            <Button
              className="bg-orange text-white hover:bg-red"
              href="https://shop.upcrate.art/refer-a-friend/"
            >
              REFER A FRIEND
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
