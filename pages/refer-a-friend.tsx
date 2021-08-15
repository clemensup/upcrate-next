import { HeroSection, Layout } from "../components";
import { FlowingHeads } from "../components/flowing-heads";

export default function ReferAFriend() {
  return (
    <Layout>
      <HeroSection
        className="bg-purple"
        title={"FAQ"}
        image="/refer-a-friend/hero-image.png"
      />
      TODO: INVITE YOUR BESTIES SECTION <br />
      TODO: Advantages for members of the art crew
      <FlowingHeads className="bg-green" />
    </Layout>
  );
}
