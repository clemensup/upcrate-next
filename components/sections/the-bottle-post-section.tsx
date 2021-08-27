import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";

export function TheBottlePostSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center md:max-w-xl m-auto">
          {t("sections.the_bottle_post.title")}
        </h3>

        <div className="max-w-8xl mt-5 md:mt-10 mx-auto text-center">
          <Image src="/the-bottle-post/big.png" width={1620} height={764} />

          <div className="w-full h-full">
            <div className="flex flex-col text-purple-dark h-full justify-items-end mt-5 md:mt-0 md:text-xl">
              <p className="text-center max-w-4xl mx-auto md:mt-16">
                {t("sections.the_bottle_post.text")}
              </p>

              <div className="flex gap-6 md:gap-20 mt-5 md:mt-16 max-w-8xl mx-auto">
                <Parallax offset={50}>
                  <a
                    href="https://shop.upcrate.art/product/upcrate20-april-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small01.png"
                      width={500}
                      height={500}
                    />
                    <div className="text-xs md:text-xl">#upcrate20</div>
                  </a>
                </Parallax>
                <Parallax offset={50}>
                  <a
                    href="https://shop.upcrate.art/product/upcrate19-march-2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small02.png"
                      width={500}
                      height={500}
                    />
                    <div className="text-xs md:text-xl">#upcrate19</div>
                  </a>
                </Parallax>
                <Parallax offset={50}>
                  <a
                    href="https://shop.upcrate.art/product/upcrate16-december-2020/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small03.png"
                      width={500}
                      height={500}
                    />
                    <div className="text-xs md:text-xl">#upcrate16</div>
                  </a>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
