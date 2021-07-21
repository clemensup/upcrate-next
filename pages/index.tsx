import { SubscribeNowSection } from "../components";
import { JoinTheArtCrewSection } from "../components/join-the-art-crew-section";
import { Layout } from "../components/layout";
import { UpcrateAsGiftSection } from "../components/upcrate-as-a-gift";
import { WhyUpcrateSection } from "../components/why-upcrate-section";

export default function Home() {
  return (
    <Layout>
      <h1>test</h1>
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
    </Layout>
  );
}
