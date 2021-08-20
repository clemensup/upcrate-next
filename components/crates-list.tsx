import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Product } from "../pages/crates";
import { fetchCrates } from "../utils/wc-api";
import { RadialGradient } from "./elements/radial-gradient";

export function CratesList({ products }: { products: Product[] }) {
  const { t } = useTranslation("common");
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState(products);
  const [isFetching, setIsFetching] = React.useState(false);

  const fetchMoreProducts = async () => {
    setIsFetching(true);

    const nextProducts = await fetchCrates(page * 9).catch(console.error);

    setState(nextProducts.data);
    setIsFetching(false);
    setPage(page + 1);
  };

  if (!state) {
    return <div>{t("pages.crates.crates_list.no_products_message")}</div>;
  }

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden">
      <RadialGradient className="bg-orange" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-center text-2xl md:text-5xl">
          {t("pages.crates.crates_list.title")}
        </h3>
        <p className="mt-8 text-xl max-w-2xl mx-auto text-center">
          {t("pages.crates.crates_list.subtitle")}
        </p>

        <div>
          <ul className="list-none md:grid md:grid-cols-3 max-w-6xl gap-20 justify-center mt-5 md:mt-20 mx-auto my-40">
            {state.map((product) => (
              <li key={product.id}>
                <a href={product.permalink}>
                  <img src={product.images[0].src} width={340} height={340} />
                  <h5 className="text-3xl font-bold">{product.name}</h5>
                  <div className="flex justify-between mt-2">
                    <span className="text-xl">{product.regular_price} €</span>
                    {product.stock_status === "outofstock" && (
                      <span className="font-display text-red-light text-xl">
                        {t("pages.crates.crates_list.stock_status")}
                      </span>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* TODO: PAGINATION <Button
          className="bg-purple text-white"
          onClick={() => fetchMoreProducts()}
        >
          {isFetching ? "Loading" : "Previous Page"}
        </Button> */}
        </div>
      </div>
      <RadialGradient className="bg-green" variant="bottom" />
    </section>
  );
}
