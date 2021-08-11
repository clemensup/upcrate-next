import Image from "next/image";
import {
  CaptainCrateSvg,
  HeroSection,
  Layout,
  UnboxYourCreativitySection,
} from "../components";
import { CratesList } from "../components/crates-list";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { fetchCrates } from "../utils/wc-api";

export interface ProductImage {
  id: number;
  name: string;
  src: string;
}
export interface Product {
  id: string;
  name: string;
  images: ProductImage[];
  permalink: string;
  stock_status: "instock" | "outofstock";
  regular_price: string;
}
export interface CratesProps {
  products: Product[];
}

export default function Crates({ products }: CratesProps) {
  return (
    <Layout>
      <HeroSection
        className="bg-orange"
        title={"Crates"}
        image="/crates/hero-image.png"
        mobileImage="/about-us-hero-xs.png"
      />

      <CratesList products={products} />

      <JoinTheArtCrewSection />
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-crates-image-section bg-center bg-cover bg-no-repeat relative flex justify-center items-end p-12">
        <h3 className="text-6xl text-white text-center max-w-xl">
          We found some Art
          <br />
          supplies for you{" "}
        </h3>
      </div>
      <UnboxYourCreativitySection
        className="bg-orange"
        buttonClassName="bg-purple"
      >
        You’re one of the chosen ones who scrolled all the way down.
        <br />
        Now you can also subscribe:)
      </UnboxYourCreativitySection>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const wooCommerceProducts = await fetchCrates().catch(console.error);

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
  };
};
