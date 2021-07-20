import { SubscribeNowSection } from "../components";
import { JoinTheArtCrewSection } from "../components/join-the-art-crew-section";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>test</h1>
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
    </Layout>
  );
}
