import Image from "next/image";

export function TheGoldenCrateSection() {
  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto">
        The golden crate
      </h3>

      <div className="md:grid grid-cols-2 max-w-8xl gap-20 justify-evenly mt-5 md:mt-20">
        <div className="w-full h-full">
          <Image src="/golden-crate/big.png" width={610} height={612} />
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col text-purple-dark h-full justify-items-end mt-5 md:mt-0 md:text-xl">
            <h4 className="font-bold text-center md:text-left">
              Discover our treasure chest!
            </h4>
            <p className="mt-4 text-center md:text-left">
              Does your box look like this?
              <br />
              Take a picture and send us an email!
              <br />
              In return you will receive a coupon worth 50 € for our shop.
            </p>

            <div className="flex gap-6 md:gap-20 flex-1 items-end mt-5 md:mt-20">
              <a
                className="w-max-content flex flex-col"
                href="https://instagram.com/jj8.kaiser.art"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">@jj8.kaiser.art</span>
                <Image
                  src="/golden-crate/small01.png"
                  width={236}
                  height={314}
                />
              </a>
              <a
                className="w-max-content flex flex-col"
                href="https://instagram.com/hawklbood"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-base">@hawklbood</span>
                <Image
                  src="/golden-crate/small02.png"
                  width={236}
                  height={314}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
