import Image from "next/image";
import { CancelAnyTimeSvg } from "../elements/svg/cancel-any-time-svg";
import { FreeShippingSvg } from "../elements/svg/free-shipping-svg";

export function SubscriptionInfoSection() {
  return (
    <section>
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:pt-10 md:pb-16 text-purple-dark">
        <div className="col-span-3">
          <h4 className="font-bold">HELP/CONTACT</h4>
          <ul className="mt-5 underline flex flex-col gap-2">
            <li>
              <a href="/faqs">How do I subscribe to Upcrate?</a>
            </li>
            <li>
              <a href="/faqs">Where does Upcrate ship to?</a>
            </li>
            <li>
              <a href="/newsletter">Subscribe for Newsletter</a>
            </li>
            <li>
              <a href="/contact">Send a mail</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:mt-12">
          <h4 className="font-bold uppercase text-2xl -mb-5">Shipping</h4>
          <Image
            src="/subscriptions/deutsche-post@2x.png"
            width={98}
            height={95}
          />
        </div>
        <div className="col-span-1 md:mt-12">
          <h4 className="font-bold uppercase text-2xl">Payment Methods</h4>
          <h5 className="underline mt-3 text-2xl">Subscriptions</h5>
          <div className="mt-3">
            <Image
              src="/subscriptions/payment-methods@2x.png"
              width={282}
              height={79}
            />
          </div>
          <h5 className="underline mt-3 text-2xl">Shop</h5>
          <div className="mt-3">
            <Image
              src="/subscriptions/payment-methods@2x.png"
              width={282}
              height={79}
            />
          </div>
        </div>
        <div className="col-span-1 md:mt-12">
          <h4 className="font-bold uppercase text-2xl">Benefits</h4>
          <div className="flex gap-4 text-2xl md:mt-4 items-center">
            <div className="w-12">
              <FreeShippingSvg />
            </div>
            <span>Shipping free worlwide</span>
          </div>
          <div className="flex gap-4 text-2xl md:mt-4 items-center">
            <div className="w-12">
              <CancelAnyTimeSvg />
            </div>
            <span>Cancellation at any time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
