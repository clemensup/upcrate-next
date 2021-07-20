import Image from "next/image";

export function JoinTheArtCrewSection() {
  return (
    <section className="text-center text-white bg-purple pt-6 pb-6 px-10 md:pt-20 md:pb-24">
      <h3 className="font-display text-white text-2xl md:text-5xl">
        Join the artcrew
      </h3>
      <div className="md:flex align-center justify-center gap-20 md:text-3xl">
        <div className="mt-10">
          <Image
            src="/join-the-art-crew/1.png"
            layout="fixed"
            width={170}
            height={170}
          />
          <h4 className="font-bold text-purple-dark">Subscribe</h4>
          <p className="max-w-xs m-auto">
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
          <h4 className="font-bold text-purple-dark">Uncrate</h4>
          <p className="max-w-xs m-auto">
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
          <h4 className="font-bold text-purple-dark">Create</h4>
          <p className="max-w-xs m-auto">
            Your crate arrives!!! Open it up and get creative
          </p>
        </div>
      </div>
    </section>
  );
}
