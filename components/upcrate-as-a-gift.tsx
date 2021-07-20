import { Button } from "./elements/button";

export function UpcrateAsGiftSection() {
  return (
    <section className="bg-upcrate-as-gift bg-center bg-cover py-10 md:py-40 px-10 text-center flex flex-col md:gap-80">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl mb-10 md:-mt-10 lg:-mt-32">
        upcrate as a gift
      </h3>
      <Button
        className="bg-orange text-white mt-20"
        href="https://shop.upcrate.art/product/upcrategift/"
      >
        Give a gift
      </Button>
    </section>
  );
}
