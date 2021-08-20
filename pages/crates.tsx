import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import {
  CaptainCrateSvg,
  Caret,
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
  const { t } = useTranslation("common");

  return (
    <Layout>
      <HeroSection
        className="bg-orange"
        title={t("pages.crates.title")}
        image="/crates/hero-image.png"
        mobileImage="/about-us-hero-xs.png"
      />

      <CratesList products={products} />

      <JoinTheArtCrewSection>
        <a
          className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-orange hover:bg-pink text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </a>
      </JoinTheArtCrewSection>
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-crates-image-section bg-center bg-cover bg-no-repeat relative flex justify-center items-end p-12">
        <h3 className="text-6xl text-white text-center whitespace-pre-line font-display">
          {t("pages.crates.found_some_art")}
        </h3>
      </div>
      <UnboxYourCreativitySection className="bg-orange my-1">
        <h3 className="text-purple-dark text-4xl mx-auto text-center max-w-5xl font-bold  whitespace-pre-line">
          {t("pages.crates.chosen_one_section.title")}
        </h3>
        <a
          className="bg-purple hover:bg-purple-dark font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 text-white px-10 mx-auto"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </a>
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
