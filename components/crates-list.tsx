import React from "react";
import { Product } from "../pages/crates";
import { fetchCrates } from "../utils/wc-api";
import { Button } from "./elements/button";

export function CratesList({ products }: { products: Product[] }) {
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState(products);
  const [isFetching, setIsFetching] = React.useState(false);

  const fetchMoreProducts = async () => {
    setIsFetching(true);

    const nextProducts = await fetchCrates(page * 9).catch(console.error);

    console.log(nextProducts);

    setState(nextProducts.data);
    setIsFetching(false);
    setPage(page + 1);
  };

  if (!state) {
    return <div>no products</div>;
  }

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto">
        Our previous crates
      </h3>
      <p className="mt-8 text-xl max-w-lg mx-auto text-center">
        If you’re not familiar with subscription boxes then you might be
        wondering how this all works. It’s fairly simple….
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
                      SOLD OUT
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
    </section>
  );
}
