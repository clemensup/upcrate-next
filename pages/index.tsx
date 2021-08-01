import Image from "next/image";
import { CaptainCrateSvg, SubscribeNowSection } from "../components";
import { AsFeaturedInSection } from "../components/as-featured-in-section";
import { ConnectSloganSection } from "../components/connect-slogan-section";
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
      <FlowingHeads className="bg-green-dark" />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-cpt-in-forest bg-center bg-cover"></div>
      <WhatTheArtCrewSaysSection />
      <div className="min-h-sectionBig md:min-h-sectionBigMd">
        unbox your creativity
      </div>
      <div className="min-h-sectionBig md:min-h-sectionBigMd bg-leuchtturm bg-center bg-cover"></div>
      <FlowingHeads className="bg-purple" />
      <AsFeaturedInSection />
      <div className="min-h-sectionBig md:min-h-sectionBigMd">
        Former crates in a row
      </div>
      <div>Featured artists we worked with</div>
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white">
          Let’s draw <span className="font-display">as one.</span>
          <br /> Let’s connect&nbsp;
          <span className="font-display">worldwide</span>
          <br /> and <span className="font-display">live art</span> together
        </h4>
      </ConnectSloganSection>
    </Layout>
  );
}
