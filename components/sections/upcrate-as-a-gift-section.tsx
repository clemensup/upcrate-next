import { Button } from "../elements/button";

export function UpcrateAsGiftSection() {
  return (
    <section className="bg-upcrate-as-gift bg-center bg-cover text-center relative min-h-sectionBig md:min-h-sectionBigMd">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl absolute top-5 md:top-10 left-0 right-0">
        upcrate as a gift
      </h3>
      <Button
        className="bg-orange text-white mt-20 absolute bottom-16 md:bottom-36 left-0 right-0"
        href="https://shop.upcrate.art/product/upcrategift/"
      >
        Give a gift
      </Button>
    </section>
  );
}
