import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function JoinTheArtCrewSection() {
  return (
    <section className="text-center text-white bg-purple pt-6 pb-10 px-10 md:pt-20 md:pb-24 relative overflow-hidden">
      <RadialGradient className="bg-purple-dark" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-white text-2xl md:text-5xl">
          Join the artcrew
        </h3>
        <div className="md:flex align-center justify-center gap-20">
          <div className="mt-10">
            <Image
              src="/join-the-art-crew/1.png"
              layout="fixed"
              width={170}
              height={170}
            />
            <h4 className="text-2xl font-bold text-purple-dark">Subscribe</h4>
            <p className="max-w-xs m-auto text-white text-xl">
              Sign up to receive your first crate of art supplies.
            </p>
          </div>
          <div className="mt-10">
            <Image
              src="/join-the-art-crew/2.png"
              layout="fixed"
              width={170}
              height={170}
            />
            <h4 className="text-2xl font-bold text-purple-dark">Uncrate</h4>
            <p className="max-w-xs m-auto text-white text-xl">
              Your creative tools are selected, packed and posted
            </p>
          </div>
          <div className="mt-10">
            <Image
              src="/join-the-art-crew/3.png"
              layout="fixed"
              width={170}
              height={170}
            />
            <h4 className="text-2xl font-bold text-purple-dark">Create</h4>
            <p className="max-w-xs m-auto text-white text-xl">
              Your crate arrives!!! Open it up and get creative
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
