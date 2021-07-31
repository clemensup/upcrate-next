import Image from "next/image";
import { SubscribeNowSection } from "../components";
import { FlowingHeads } from "../components/flowing-heads";
import { JoinTheArtCrewSection } from "../components/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { UpcrateAsGiftSection } from "../components/upcrate-as-a-gift";
import { WhatTheArtCrewSaysSection } from "../components/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/why-upcrate-section";

export default function Home() {
  return (
    <Layout>
      <h1>test</h1>
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <FlowingHeads />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-cpt-in-forest bg-center bg-cover"></div>
      <WhatTheArtCrewSaysSection />
      <div className="min-h-sectionBig md:min-h-sectionBigMd">
        unbox your creativity
      </div>
      <div className="min-h-sectionBig md:min-h-sectionBigMd bg-leuchtturm bg-center bg-cover"></div>
      laufband again
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd py-10">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center">
          As featured in
        </h3>
        <div className="flex gap-20 justify-center mt-10 md:mt-32">
          <Image src="/palette.png" width={222} height={103} />

          <div className="hidden md:block">
            <Image src="/palette.png" width={222} height={103} />
          </div>
          <div className="hidden md:block">
            <Image src="/palette.png" width={222} height={103} />
          </div>
          <div className="hidden md:block">
            <Image src="/palette.png" width={222} height={103} />
          </div>
        </div>
      </div>
      <div className="min-h-sectionBig md:min-h-sectionBigMd">
        Former crates in a row
      </div>
    </Layout>
  );
}
