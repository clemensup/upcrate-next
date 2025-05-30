import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function CancellationPolicy() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.terms_and_conditions.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.terms_and_conditions.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.terms.og_description")}
        />
      </Head>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            <Trans
              i18nKey="common:pages.terms_and_conditions.title"
              components={{
                1: <br className="block md:hidden" />,
              }}
            />
          </h1>

          {lang === "en" ? (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Scope</h2>
              For the entire business relationship between Upcrate, represented
              by COLORSPAZE LTD Akropoleos 27 5282 Paralimni, Ammochostos
              CYPRUS, phone: +49 177 543 39 13, service time: weekdays from 12
              to 13 o'clock, e-mail: info@upcrate.art (hereinafter also referred
              to as "Upcrate", "Provider" or "we") and the customer (hereinafter
              referred to as "Customer"), the following terms and conditions
              (hereinafter also referred to as "GTC") of the Provider shall
              apply exclusively.
              <br />
              <br />
              Upcrate sells products exclusively to consumers within the meaning
              of § 13 of the German Civil Code (BGB).
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
              The subscription is renewed every second month until the
              subscription is cancelled by the user in his upcrate account or in
              written by either email or mail.
              <br />
              The subscription contract can be canceled up to the last day
              before the next debit date being the 1 st of January, 1 st of
              March, 1 st of May, 1 st of July, 1 st of September, 1 st of
              November and requires cancellation via the cancellation function
              in the user account or in text form via email or mail.
              <br />
              <br />
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Delivery, delivery dates, partial deliveries and retention of
                title
              </h2>
              Subscription boxes are sent out on the 10th of January, 10th of
              March, 10th of May, 10th of July, 10th of September, 10th of
              November. All other orders are shipped out twice per week unless
              otherwise specified in the offer (eg. special boxes such as
              Christmas or Inktober).
              <br />
              <br />
              The provider reserves the right to deliver only after full payment
              by the customer. There is no entitlement to prior delivery. The
              provider is entitled at any time to partial delivery and partial
              performance, if this is reasonable for the customer.
              <br />
              <br />
              In the event that we do not make use of our right of retention and
              arrange for the delivery before full payment, we reserve the
              ownership of the purchased item until full payment of the purchase
              price.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Prices, shipping costs, due date, payment, set-off and retention
              </h2>
              All prices include the applicable value added tax and packaging
              costs. Shipping costs are visible in the checkout process if
              applicable. The recipient is responsible for paying any import
              sales tax and customs duties. For subscriptions, the purchase
              price claim will be debited on the day of the order. Thereafter, a
              recurrent charge will be made with the next renewal of the
              subscription (every 2 months).
              <br />
              <br />
              Example of a subscription: order on April 25 th , debit on April
              25 th , product ships on June 10 th , debit on August 1 st ,
              October 1 st , etc.
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
              <br />
              <br />
              If, when collecting amounts due via a SEPA direct debit mandate,
              your account is not covered, we will charge EUR 9.00 incl. VAT for
              this failed payment. The same applies to contested SEPA direct
              debit payments that are unfounded. In this case, we only pass on
              the service fees of our service provider to you without any
              surcharge.
              <br />
              <br />
              Discount codes of any kind (such as percentage or fixed amount,
              among others) for subscriptions can only be used for the first
              payment. For recurring debits, the regular, non-discounted amount
              will be debited. This does not affect the cancellation of the
              subscription.
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
              performance has failed.
              <br />
              <br />
              The European Commission provides a platform for online dispute
              resolution (OS). The platform can be found at{" "}
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Applicable law
              </h2>
              German law applies to the exclusion of the UN purchase law.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Jurisdiction</h2>
              In accordance with the European Community Regulation No. 44/2001
              (EC), a consumer's action against the Upcrate Contractual Partner
              may be brought either before the courts of the Member State where
              the Contractual Partner has its registered office or before the
              court of the place where the consumer is domiciled (the so-called
              consumer's place of jurisdiction).
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Cancellation</h2>
              The legal right of withdrawal applies.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Alternative Dispute Resolution in accordance with Art. 14 (1)
                ODR-VO and § 36 VSBG:
              </h3>
              The European Commission provides an online dispute resolution (OS)
              platform available at{" "}
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .
              <br />
              We are not obligated and unwilling to participate in a dispute
              settlement procedure before a consumer arbitration board.
            </div>
          ) : (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Geltungsbereich
              </h2>
              Für die gesamte Geschäftsbeziehung zwischen Upcrate, vertreten
              durch COLORSPAZE LTD Akropoleos 27 5282 Paralimni, Ammochostos
              CYPRUS, Telefon: +49 177 543 39 13, Servicezeit: werktags von 12
              bis 13 Uhr, E-Mail: info@upcrate.art (nachfolgend auch "Upcrate",
              "Anbieter" oder "wir") und dem Kunden (nachfolgend "Kunde"
              genannt) gelten ausschließlich die folgenden Geschäftsbedingungen
              (nachfolgend auch "AGB") des Anbieters.
              <br />
              <br />
              Upcrate vertreibt Produkte ausschließlich an Verbraucher im Sinne
              des § 13 Bürgerliches Gesetzbuch (BGB).
              <br />
              <br />
              Alle Vereinbarungen, die zwischen dem Kunden und dem Lieferanten
              über die Lieferung von Waren getroffen werden, ergeben sich
              insbesondere aus diesen Allgemeinen Geschäftsbedingungen, unserer
              schriftlichen Auftragsbestätigung und unserer Annahmeerklärung.
              Entgegenstehende, abweichende oder ergänzende Allgemeine
              Geschäftsbedingungen des Kunden werden nicht anerkannt.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Vertragsabschluss und unverbindliche Informationen
              </h2>
              Durch Ausfüllen und Bestätigen des vom Lieferanten zur Verfügung
              gestellten Bestellformulars kann der Kunde ein verbindliches
              Angebot zum Abschluss eines Vertrages über die Weiterlieferung von
              Waren abgeben.
              <br />
              <br />
              Alle Kundeninformationen im Bestellprozess müssen aktuell und
              wahrheitsgemäß sein. Das Kundenpasswort darf nicht an Dritte
              weitergegeben werden und muss für Unbefugte unzugänglich
              aufbewahrt werden. Jeder Verlust oder jede Weitergabe ist dem
              Anbieter unverzüglich in Textform zu melden. Für missbräuchliche
              Verwendung, z.B. bei Bestellungen mit seinem Kundenpasswort durch
              Dritte, haftet der Kunde nach den gesetzlichen Bestimmungen.
              <br />
              <br />
              Der Anbieter bestätigt dem Kunden den Zugriff auf das
              Bestellformular umgehend elektronisch. Der Anbieter kann dieses
              Angebot entweder ausdrücklich durch Zusendung einer verbindlichen
              Annahmeerklärung oder durch Zusendung der bestellten Ware bzw.
              Abbuchung des Kaufpreises annehmen. Bis zu diesem Zeitpunkt kann
              der Anbieter die Annahme jederzeit ohne Angabe von Gründen
              verweigern. Erst mit der Annahme des Angebots durch den Anbieter
              kommt ein Vertrag zwischen dem Kunden und dem Anbieter wirksam
              zustande.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Vertragslaufzeit, Kündigung und Vertragsverlängerung
              </h2>
              <br />
              Das Abonnement verlängert sich jeweils um zwei Monate, bis es vom
              Nutzer in seinem upcrate-Konto oder schriftlich per E-Mail oder
              Post gekündigt wird. Der Abonnementvertrag kann bis zum letzten
              Tag vor dem nächsten Abbuchungstermin (1. Januar, 1. März, 1. Mai,
              1. Juli, 1. September, 1. November) gekündigt werden und muss über
              die Kündigungsfunktion im Benutzerkonto oder in Textform per
              E-Mail oder Post erfolgen.
              <br />
              <br />
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Lieferung, Liefertermine, Teillieferungen und Eigentumsvorbehalt
              </h2>
              Abo-Boxen werden am 10. Januar, 10. März, 10. Mai, 10. Juli, 10.
              September und 10. November verschickt. Alle anderen Bestellungen
              werden zweimal wöchentlich versandt, sofern im Angebot nichts
              anderes angegeben ist (z. B. Sonderboxen wie Weihnachten oder
              Inktober). Der Anbieter behält sich das Recht vor, erst nach
              vollständiger Bezahlung durch den Kunden zu liefern. Ein Anspruch
              auf vorzeitige Lieferung besteht nicht. Der Anbieter ist jederzeit
              zu Teillieferungen und Teilleistungen berechtigt, sofern dies für
              den Kunden zumutbar ist.
              <br />
              <br />
              Machen wir von unserem Zurückbehaltungsrecht keinen Gebrauch und
              veranlassen wir die Lieferung vor vollständiger Bezahlung,
              behalten wir uns das Eigentum an der Kaufsache bis zur
              vollständigen Bezahlung des Kaufpreises vor.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Preise, Versandkosten, Fälligkeitsdatum, Zahlung, Aufrechnung
                und Einbehalt
              </h2>
              Alle Preise verstehen sich inklusive der jeweils gültigen
              Mehrwertsteuer und Verpackungskosten. Versandkosten werden
              gegebenenfalls im Bestellvorgang angezeigt. Die Zahlung eventuell
              anfallender Einfuhrumsatzsteuer und Zölle obliegt dem Empfänger.
              Bei Abonnements wird der Kaufpreis am Tag der Bestellung
              abgebucht. Danach erfolgt eine wiederkehrende Abbuchung bei der
              nächsten Abonnementverlängerung (alle zwei Monate).
              <br />
              <br />
              Beispiel für ein Abonnement: Bestellung am 25. April, Abbuchung am
              25. April, Produktversand am 10. Juni, Abbuchung am 1. August, 1.
              Oktober usw.
              <br />
              <br />
              Für die Zahlung stehen dem Kunden nur die in der Bestellung
              vereinbarten und angegebenen Zahlungsbedingungen zur Verfügung.
              Ein Recht zur Aufrechnung steht dem Kunden nur zu, wenn seine
              Gegenansprüche rechtskräftig festgestellt oder vom Anbieter
              unbestritten sind. Zur Ausübung eines Zurückbehaltungsrechts ist
              der Kunde nur insoweit befugt, als sein Gegenanspruch auf dem
              gleichen Vertragsverhältnis beruht.
              <br />
              <br />
              Sollte beim Einzug von fälligen Beträgen über ein SEPA
              Lastschriftmandat Ihr Konto nicht gedeckt sein, berechnen wir für
              diese fehlgeschlagene Zahlung EUR 9,00 inkl. MwSt. Das gleiche
              gilt für angefochtene SEPA-Lastschrift-Zahlungen, die unbegründet
              sind. Hierbei geben wir lediglich die Servicegebühren unseres
              Dienstleisters ohne Aufschlag an Sie weiter.
              <br />
              <br />
              Rabattcodes jeglicher Art (wie u.a. prozentual oder fixer Betrag)
              für Abonnements können nur für die erste Zahlung verwendet werden.
              Bei wiederkehrenden Abbuchungen wird der reguläre, unrabattierte
              Betrag abgebucht. Die Kündigung des Abonnements bleibt davon
              unberührt.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Rechte im Falle von Mängeln und Schäden
              </h2>
              Soweit die gelieferte Ware nicht die zwischen dem Anbieter und dem
              Kunden vereinbarte Beschaffenheit hat, oder sich nicht für die
              nach dem Vertrag vorausgesetzte Verwendung oder den allgemeinen
              Gebrauch eignet, oder nicht die Eigenschaften aufweist, die der
              Kunde nach unseren öffentlichen Äußerungen erwarten konnte, so
              verpflichtet sich der Anbieter zur Nacherfüllung. Dies gilt nicht,
              wenn der Anbieter berechtigt ist, die Nacherfüllung aufgrund der
              gesetzlichen Bestimmungen zu verweigern. Der Kunde hat dem
              Anbieter eine angemessene Frist zur Nacherfüllung zu gewähren.
              <br />
              <br />
              Die Nacherfüllung erfolgt nach Wahl des Kunden durch Beseitigung
              des Mangels oder Lieferung einer neuen Ware. Der Kunde ist,
              während der Nacherfüllungsfrist nicht berechtigt, den Kaufpreis zu
              mindern oder vom Vertrag zurückzutreten. Hat der Anbieter die
              Nacherfüllung zweimal vergeblich versucht, so gilt diese als
              fehlgeschlagen. Ist die Nacherfüllung fehlgeschlagen, ist der
              Kunde nach seiner Wahl berechtigt, den Kaufpreis zu mindern oder
              vom Vertrag zurückzutreten.
              <br />
              <br />
              Schadensersatzansprüche wegen eines Mangels nach Maßgabe der
              folgenden Absätze kann der Kunde erst geltend machen, wenn die
              Nacherfüllung fehlgeschlagen ist.
              <br />
              <br />
              Die Europäische Kommission bietet eine Plattform für die
              Online-Streitbeilegung (OS). Die Plattform ist unter{" "}
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              zu finden.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Anwendbares Recht
              </h2>
              <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Gerichtsstand
              </h2>
              <p>
                Gemäß der Verordnung der Europäischen Gemeinschaft Nr. 44/2001
                (EG) kann die Klage eines Verbrauchers gegen den Vertragspartner
                Upcrate entweder vor den Gerichten des Mitgliedstaates erhoben
                werden, in dem der Vertragspartner seinen Sitz hat oder vor dem
                Gericht des Ortes, an dem der Verbraucher seinen Wohnsitz hat
                (sog. Gerichtsstand des Verbrauchers).
              </p>
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Stornierung</h2>
              Es gilt das gesetzliche Widerrufsrecht.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Alternative Streitbeilegung gemäss Art. 14 Abs. 1 ODR-VO und §
                36 VSBG:
              </h3>
              Die Europäische Kommission bietet eine Online-Plattform zur
              Streitbeilegung (OS) an, die unter 
              <a
                className="underline"
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              verfügbar ist.
              <br />
              Wir sind nicht verpflichtet und nicht gewillt, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </div>
          )}
        </div>
        <RadialGradient className="bg-green" variant="bottom-right" />
      </section>
    </>
  );
}
