import useTranslation from "next-translate/useTranslation";
import React from "react";
import { fetchCrates } from "../utils/wc-api";
import { RadialGradient } from "./elements/radial-gradient";
import { Caret } from "./elements/svg";
import { CratesProps } from "./../pages/crates";
import { useFirstRender } from "../hooks/use-first-render";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.7, rotate: 10, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition, rotate: 0 },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 2, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 0, opacity: 0 },
};

const zoomeImageVariants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1.2, opacity: 1 },
};

export function CratesList({ products, pageCount }: CratesProps) {
  const { t } = useTranslation("common");
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState(products);
  const [isFetching, setIsFetching] = React.useState(false);

  const listRef = React.useRef(null);
  const firstRender = useFirstRender();

  const fetchMoreProducts = async () => {
    setIsFetching(true);
    const nextProducts = await fetchCrates((page - 1) * 9).catch(console.error);
    setState(nextProducts.data);
    setIsFetching(false);

    if (!firstRender) {
      listRef.current.scrollIntoView();
    }
  };

  React.useEffect(() => {
    fetchMoreProducts();
  }, [page]);

  if (!state) {
    return <div>{t("pages.crates.crates_list.no_products_message")}</div>;
  }

  return (
    <section
      className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden"
      ref={listRef}
    >
      <RadialGradient className="bg-orange" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-center text-2xl md:text-5xl">
          {t("pages.crates.crates_list.title")}
        </h3>
        <p className="mt-8 text-xl max-w-2xl mx-auto text-center">
          {t("pages.crates.crates_list.subtitle")}
        </p>

        <div>
          <motion.ul
            className="list-none md:grid md:grid-cols-3 max-w-6xl gap-20 justify-center mt-5 md:mt-20 mx-auto my-40"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          >
            <AnimatePresence>
              {state.map((product) => {
                return (
                  <li key={product.id}>
                    <motion.div variants={thumbnailVariants}>
                      <motion.div
                        variants={frameVariants}
                        transition={transition}
                        className="overflow-hidden"
                        whileHover="hover"
                        initial="initial"
                      >
                        <a href={product.permalink}>
                          {product.images && product.images.length > 0 && (
                            <div
                              className="relative"
                              style={{ paddingBottom: "100%" }}
                            >
                              <motion.img
                                className="absolute top-0 left-0 right-0 bottom-0"
                                src={product.images[0].src}
                                width={340}
                                height={340}
                                variants={imageVariants}
                                transition={transition}
                              />

                              <motion.img
                                className="absolute top-0 left-0 right-0 bottom-0 z-0"
                                src={product.acf.zoom_image}
                                width={340}
                                height={340}
                                variants={zoomeImageVariants}
                                transition={transition}
                              />
                            </div>
                          )}
                        </a>
                      </motion.div>

                      <h5 className="text-2xl font-bold">{product.name}</h5>
                      <div className="flex justify-between mt-2">
                        <span className="text-xl">
                          {product.regular_price} €
                        </span>
                        {product.stock_status === "outofstock" && (
                          <span className="font-display text-red-light text-xl">
                            {t("pages.crates.crates_list.stock_status")}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </AnimatePresence>
          </motion.ul>

          <div className="flex justify-between items-center">
            <motion.button
              className="disabled:opacity-50 font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto bg-purple text-white hover:bg-pink"
              onClick={() => setPage(page - 1)}
              disabled={page === 1 || isFetching}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="transform rotate-180">
                <Caret />
              </div>
              {t("pages.crates.crates_list.previous_page_button")}
            </motion.button>

            <div>
              {isFetching && <div>Loading...</div>}
              Page {page} of {pageCount}
            </div>

            <motion.button
              className="disabled:opacity-50 font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto bg-purple text-white hover:bg-pink"
              onClick={() => setPage(page + 1)}
              disabled={page === pageCount || isFetching}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t("pages.crates.crates_list.next_page_button")}
              <Caret />
            </motion.button>
          </div>
        </div>
      </div>
      <RadialGradient className="bg-green" variant="bottom" />
    </section>
  );
}
