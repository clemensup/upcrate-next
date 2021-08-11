import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pt-20 md:pb-24">
      <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
        How it works
      </h3>
      <p className="mt-8 text-xl max-w-lg mx-auto text-center">
        If you’re not familiar with subscription boxes then you might be
        wondering how this all works. It’s fairly simple….
      </p>

      <div className="md:grid grid-flow-rows grid-cols-6 grid-rows-2 gap-4 mt-20 align-center justify-center gap-20 md:text-xl relative">
        <div className="mt-10 col-span-2 items-center flex justify-center">
          <div className="relative max-w-md">
            <span className="text-purple font-display text-6xl absolute -top-8 left-5 z-10">
              1.
            </span>
            <Image
              src="/how-it-works/how-it-works-section01.png"
              layout="intrinsic"
              width={390}
              height={312}
            />
            <p>
              choose your sailing schedule (1 or 3 months), add it to the cart
              and checkout.
            </p>
          </div>
        </div>
        <div className="md:-mt-16 mt-10 col-span-2 items-center flex justify-center">
          <div className="relative max-w-md">
            <span className="text-rose font-display text-6xl absolute -top-8 left-5 z-10">
              2.
            </span>
            <Image
              src="/how-it-works/how-it-works-section02.png"
              layout="intrinsic"
              width={482}
              height={322}
            />
            <p>
              our art treasures will be put together by Captain Crates crew and
              will be shipped out with the next batch of boxes on the 15th of
              each month
            </p>
          </div>
        </div>
        <div className="mt-10 col-span-2 items-center flex justify-center">
          <div className="relative max-w-md">
            <span className="text-green font-display text-6xl absolute -top-8 left-5 z-10">
              3.
            </span>
            <Image
              src="/how-it-works/how-it-works-section03.png"
              layout="intrinsic"
              width={389}
              height={311}
            />
            <p>
              Unbox your creativity with your new supplies and our co-captain’s
              (artist of the month) video, interview and art advice. Share your
              artwork your the art crew (#upcrate) and participate in our
              monthly #upcratebattle!
            </p>
          </div>
        </div>
        <div className="mt-10 col-span-3 items-center flex justify-center md:order-5">
          <div className="relative max-w-md">
            <span className="text-orange font-display text-6xl absolute -top-8 left-5 z-10">
              4.
            </span>
            <Image
              src="/how-it-works/how-it-works-section04.png"
              layout="intrinsic"
              width={432}
              height={341}
            />
            <p>
              If you loved your box and want to stay subscribed - relax and wait
              until the next month. Your subscription automatically renews and
              your next crate is already saved for you.
            </p>
          </div>
        </div>
        <div className="mt-10 col-span-3 items-center flex justify-center md:order-4">
          <div className="relative max-w-md">
            <span className="text-pink font-display text-6xl absolute -top-8 left-5 z-10">
              5.
            </span>
            <Image
              src="/how-it-works/how-it-works-section05.png"
              layout="intrinsic"
              width={390}
              height={312}
            />
            <p>
              In case you’re getting seasick on the way and you’d like to cancel
              your subscription, simply log into your customer account and opt
              out at any time. No further payments will be taken until you
              decide to hop on board again.
            </p>
          </div>
        </div>
        <div className="hidden md:flex absolute top-0 right-0 bottom-0 left-0 justify-center items-center">
          <h4 className="text-5xl text-purple font-display">
            Ready
            <br />
            Set
            <br />
            Draw!
          </h4>
        </div>
      </div>
    </section>
  );
}
