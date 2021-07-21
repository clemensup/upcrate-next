import Image from "next/image";
import { Countdown } from "./countdown";
import { CaptainCrateSvg } from "./elements/svg";

export function WhyUpcrateSection() {
  return (
    <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pt-20 md:pb-24">
      <h4 className="text-green">WHY UPCRATE?</h4>
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
        Exklusive for monthly subscribers
      </h3>

      <div className="md:flex align-center justify-center gap-20 md:text-xl">
        <div className="mt-10">
          <Image
            src="/why-upcrate/1.png"
            layout="fixed"
            width={170}
            height={170}
          />
          <p className="max-w-xs m-auto">
            Sign up to receive your first crate of art supplies.
          </p>
        </div>
        <div className="mt-10">
          <Image
            src="/why-upcrate/2.png"
            layout="fixed"
            width={170}
            height={170}
          />
          <p className="max-w-xs m-auto">
            Your creative tools are selected, packed and posted
          </p>
        </div>
        <div className="mt-10">
          <Image
            src="/why-upcrate/3.png"
            layout="fixed"
            width={170}
            height={170}
          />
          <p className="max-w-xs m-auto">
            Your crate arrives!!! Open it up and get creative
          </p>
        </div>
      </div>

      <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20">
        What’s inside?
      </h3>
      <p>
        Hop on board to discover amazing art treasures in a monthly
        subscription, inspiring you to create.
      </p>

      <CaptainCrateSvg variant="head-only" />
      <div className="image-container">
        <Image className="image" src="/why-upcrate/how-to.png" layout="fill" />
      </div>

      <div>
        <h3 className="font-display text-purple-dark text-xl sm:text-2xl md:text-5xl md:mt-20 md:max-w-2xl mx-auto">
          Time to subscribe for our next upcrate
        </h3>

        <Countdown />
      </div>
    </section>
  );
}
