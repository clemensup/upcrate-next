import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t, lang } = useTranslation("common");

  return (
    <Layout>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            {t("pages.terms_and_conditions.title")}
          </h1>
          {lang === "en" && (
            <div className="mt-20">
              All contracts concluded within the validity of these terms and
              conditions shall be subject to the statutory warranty. In
              addition, the following individual warranty provisions are made:
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Scope</h2>
              For the entire business relationship between Upcrate, owner:
              Clemens Roosen, Suhrsweg 3, D-22305 Hamburg (hereinafter also
              “Upcrate”, “Provider” or “we”) and the customer (hereinafter
              referred to as “Customer”), the following terms and conditions
              apply exclusively ( hereinafter also “GTC”) of the provider
              <br />
              <br />
              All agreements concluded between the customer and the supplier
              regarding the delivery of goods result in particular from these
              General Terms and Conditions, our written order confirmation and
              our declaration of acceptance. Conflicting, deviating or
              supplementary general terms and conditions of the customer are not
              recognized.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Contract conclusion and non-binding information
              </h2>
              All information about our goods and prices are non-binding.By
              completing and confirming the order form provided by the supplier,
              the customer can make a binding offer to conclude a contract for
              the continued delivery of goods.
              <br />
              <br />
              All customer information in the ordering process must be current
              and truthful. The customer password may not be disclosed to third
              parties and must be kept inaccessible to unauthorized persons. Any
              loss or disclosure must be reported to the provider in text form
              without delay. The customer is liable for misuse, for example in
              the case of orders with his customer password by third parties in
              accordance with the statutory provisions.
              <br />
              <br />
              The provider immediately confirms the customer’s access to the
              order form electronically. The provider can accept this offer
              either expressly by sending a binding declaration of acceptance or
              by sending the ordered goods or debiting the purchase price. Until
              this time, the provider can refuse acceptance at any time without
              stating reasons. Only with the acceptance of the offer by the
              provider a contract between the customer and the provider is
              effectively closed.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Contract period, termination and contract renewal
              </h2>
              With the offer variants (monthly, 3 months, 6 months or 12 months)
              the subscription runs first over the minimum use period booked by
              the user. Thereafter, the subscription will be extended for
              renewal periods of the same duration if it is not terminated in
              time by the user or upcrate. The notice period is three weeks to
              the end of each month of the last box and requires notice of the
              termination function in the user account or the text form.
              <br />
              <br />
              Delivery, delivery dates, partial deliveries and retention of
              title
              <br />
              <br />
              The provider reserves the right to deliver only after full payment
              by the customer. There is no entitlement to prior delivery. Our
              delivery dates or delivery periods are only non-binding
              information, unless these are expressly regulated as binding
              between the supplier and the customer. The provider is entitled at
              any time to partial delivery and partial performance, if this is
              reasonable for the customer.
              <br />
              <br />
              In the event that we do not make use of our right of retention and
              arrange for the delivery before full payment, we reserve the
              ownership of the purchased item until full payment of the purchase
              price.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Prices, shipping costs, due date, payment, set-off and retention
              </h2>
              All prices include the applicable value added tax, packaging costs
              and shipping costs. For subscriptions, the purchase price claim
              will be debited on the day of the order. Thereafter, a recurrent
              charge will be made depending on the term of the subscription. The
              term is selectable between monthly, quarterly, semi-annual and
              annual.
              <br />
              <br />
              Example of a monthly subscription: order on April 25, debit on
              April 25, recurring debit on May 25, June 25, etc. Example of a
              quarterly subscription: order on April 25, debit on April 25,
              recurring debit on July 25, October 25, etc. Example of a
              semiannual subscription: order on April 25, debit on April 25,
              recurring debit on October 25, April 25 of the following year,
              etc. Example of an annual subscription: order on April 25, debit
              on April 25, recurring debit on April 25 of the following year,
              etc.
              <br />
              <br />
              For the payment, the customer only has the payment terms agreed
              and specified in the order.
              <br />
              <br />
              The customer is only entitled to offset if his counterclaims have
              been legally established or are undisputed by the provider. The
              customer is only authorized to exercise a right of retention
              insofar as his counterclaim is based on the same contractual
              relationship.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Rights in case of defects and damages
              </h2>
              Insofar as the delivered goods do not have the quality agreed
              between the supplier and the customer, or if they are not suitable
              for the purposes stipulated in the contract or their general use,
              or if they do not have the characteristics which the customer
              could expect after our public statements, then so the provider
              commits to supplementary performance. This does not apply if the
              provider is entitled to refuse subsequent performance due to the
              statutory provisions. The customer must grant the supplier a
              reasonable period for supplementary performance.
              <br />
              <br />
              The supplementary performance is carried out at the customer’s
              option by removing the defect or delivering new goods. The
              customer is not entitled during the period for subsequent
              performance to reduce the purchase price or to withdraw from the
              contract. If the provider has tried the supplementary performance
              twice in vain, then this is considered as failed. If the
              supplementary performance has failed, the customer is entitled, at
              his discretion, to reduce the purchase price or to withdraw from
              the contract.
              <br />
              <br />
              The customer can only assert claims for damages due to a defect in
              accordance with the following paragraphs if the supplementary
              performance has failed. The right of the customer to assert
              further claims for damages under the following conditions remains
              unaffected.
              <br />
              <br />
              The European Commission provides a platform for online dispute
              resolution (OS). The platform can be found at
              http://ec.europa.eu/consumers/odr/
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Applicable law
              </h2>
              German law applies to the exclusion of the UN purchase law.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Cancellation</h2>
              The legal right of withdrawal applies.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Alternative Dispute Resolution in accordance with Art. 14 (1)
                ODR-VO and § 36 VSBG:
              </h3>
              The European Commission provides an online dispute resolution (OS)
              platform available at https://ec.europa.eu/consumers/odr.
              <br />
              We are not obligated and unwilling to participate in a dispute
              settlement procedure before a consumer arbitration board.
            </div>
          )}
        </div>
        <RadialGradient className="bg-green" variant="bottom-right" />
      </section>
    </Layout>
  );
}
