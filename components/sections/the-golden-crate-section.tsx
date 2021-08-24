import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export function TheGoldenCrateSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto">
        {t("sections.the_golden_crate.title")}
      </h3>

      <div className="md:grid grid-cols-2 max-w-6xl gap-20 justify-evenly mt-5 md:mt-20 mx-auto">
        <div className="w-full h-full">
          <Image src="/golden-crate/big.png" width={610} height={612} />
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col text-purple-dark h-full justify-items-end mt-5 md:mt-0 md:text-xl">
            <h4 className="font-bold text-center md:text-left">
              {t("sections.the_golden_crate.subtitle")}
            </h4>
            <p className="mt-4 text-center md:text-left whitespace-pre-line">
              {t("sections.the_golden_crate.text")}
            </p>

            <div className="flex gap-6 md:gap-20 flex-1 items-end mt-5 md:mt-12">
              <a
                className="w-max-content flex flex-col overflow-hidden"
                href="https://instagram.com/jj8.kaiser.art"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">@jj8.kaiser.art</span>
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src="/golden-crate/small01.png"
                      width={236}
                      height={314}
                    />
                  </motion.div>
                </div>
              </a>
              <a
                className="w-max-content flex flex-col"
                href="https://instagram.com/hawklbood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">@hawklbood</span>
                <div className="overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image
                      src="/golden-crate/small02.png"
                      width={236}
                      height={314}
                    />
                  </motion.div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
