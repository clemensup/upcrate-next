import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function Privacy() {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.privacy.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.privacy.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.privacy.og_description")}
        />
      </Head>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-display">
            <Trans
              i18nKey="common:pages.privacy.title"
              components={{
                1: <br className="block md:hidden" />,
              }}
            />
          </h1>
          {lang === "en" ? (
            <div>
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Ahoy and welcome to our website!
              </h2>
             Upcrate is committed to protecting your privacy. We hereby inform you which personal information we collect, how we use it and what rights you have when using our website. COLORSPAZE LTD, represented by Clemens Roosen ("Upcrate", "we" or "us") is responsible for the processing of personal data collected through the websites www.upcrate.art, www.upcrate.de, www.shop.upcrate.art.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Data protection
              </h2>
              The use of our website is usually possible without providing
              personal data. As far as on our sides personal data (for example
              name, address or E-Mail addresses) are raised, this takes place,
              as far as possible, always on voluntary basis. These data will not
              be disclosed to third parties without your explicit consent.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Server log files
              </h2>
              The provider of the pages automatically collects and stores
              information in so-called server log files, which your browser
              automatically transmits to us. These are: • Browser type and
              browser verse • used operating system • Referrer URL • Host name
              of the accessing computer • Time of the server request •
              Transmitting amount of data • IP address These data cannot be
              assigned to specific persons. There is no merge of this data with
              other data sources. We reserve the right to check this data
              retrospectively, if we become aware of specific indications for
              illegal use. The processing of this data is based on Art. 6 para.
              1 lit. following DSGVO to ensure trouble-free operation of our
              website.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Orders</h2>
              When ordering, we collect and process your personal data only to
              the extent necessary to fulfill and process your order. Because
              processing is necessary to conclude a contract with you or steps
              are required before concluding a contract with you (for example,
              when you shop with us, we use your personal information to process
              the payment and to fulfill your order). Processing is based on
              Art. 6 para. 1 lit. b DSGVO and is required to fulfill a contract
              with you. A disclosure of your data is done, for example, to
              shipping companies and payment service providers.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Contact form</h2>
              When using the contact form, personal data (such as name, e-mail
              address, message text) will only be collected in the amount
              provided by you. The data serve the purpose of contacting. By
              sending your message, you consent to the processing of the
              transmitted data. The processing is based on Art. 6 para 1 lit. a
              GDPR. You can revoke your consent at any time. We only use your
              e-mail address to process your request. Your data will be deleted
              afterwards.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Newsletter</h2>
              If you would like to receive our newsletter, we require a valid
              email address as well as information that allows us to verify that
              you are the owner of the specified email address and that you
              agree to receive this newsletter. No additional data is collected
              or is only collected on a voluntary basis. We only use this data
              to send the requested information and do not pass it on to third
              parties.
              <br />
              <br />
              We will, therefore, process any data you enter onto the contact
              form only with your consent per Art. 6 (1) (a) DSGVO. You can
              revoke consent to the storage of your data and email address as
              well as their use for sending the newsletter at any time, e.g.
              through the “unsubscribe” link in the newsletter. The data
              processed before we receive your request may still be legally
              processed.
              <br />
              <br />
              The data provided when registering for the newsletter will be used
              to distribute the newsletter until you cancel your subscription
              when said data will be deleted. Data we have stored for other
              purposes (e.g. email addresses for the members area) remain
              unaffected.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Mailchimp</h2>
              This website uses the services of MailChimp to send newsletters.
              This service is provided by Rocket Science Group LLC, 675 Ponce De
              Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.
              <br />
              <br />
              MailChimp is a service which organizes and analyzes the
              distribution of newsletters. If you provide data (e.g. your email
              address) to subscribe to our newsletter, it will be stored on
              MailChimp servers in the USA.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Mailjet</h2>
              This website uses Mailjet to send newsletters. The provider is Mailjet SAS, 13-13 bis, Rue de l'Aubrac - 75012 Paris, France. Mailjet is a service that organizes and analyzes the sending of newsletters. The data you enter for the purpose of receiving newsletters (e.g. e-mail address) is stored on Mailjet's servers in the EU.  Our newsletters sent with Mailjet allow us to analyze the behavior of newsletter recipients. Here, among other things, it can be analyzed how many recipients have opened the newsletter message and how often which link in the newsletter was clicked. With the help of so-called conversion tracking, it can also be analyzed whether a predefined action (e.g. purchase of a product on our website) has taken place after clicking on the link in the newsletter. For more information on data analysis by Mailjet Newsletter, please visit: https://www.mailjet.de/funktion/tracking-tools/.  The data processing is based on your consent (Art. 6 para. 1 lit. a DSGVO). You can revoke this consent at any time by unsubscribing from the newsletter. The legality of the data processing operations already carried out remains unaffected by the revocation.  
              <br />
              <br />
              If you do not want any analysis by Mailjet, you must unsubscribe from the newsletter. For this purpose, we provide a corresponding link in every newsletter message. Furthermore, you can also unsubscribe from the newsletter directly on the website.  The data you provide for the purpose of receiving the newsletter will be stored by us until you unsubscribe from the newsletter and will be deleted from our servers as well as from the servers of Mailjet after you unsubscribe from the newsletter. Data stored by us for other purposes (e.g. e-mail addresses for the member area) remain unaffected by this.  For more details, please refer to Mailjet's "Security and Privacy" information at https://www.mailjet.com/security-privacy/and Mailjet's privacy policy at https:// https://www.mailjet.com/privacy-policy/  
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Shipping service
              </h2>
              As part of the contract, we will share your email address with our
              suppliers, who will take over the transport of the goods to you,
              provided that you have expressly agreed to this during the
              ordering process. Processing is based on Art. 6 para. 1 lit. a
              DSGVO with your consent. You may revoke your consent at any time
              by notifying us or the carrier.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Payment service
              </h2>
              <h3 className="text-xl font-bold mt-10 md:mt-8">Use of PayPal</h3>
              All PayPal transactions are subject to the PayPal Privacy Policy.
              These can be found at
              https://www.paypal.com/en/webapps/mpp/ua/privacy-full
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Use of the Klarna checkout
              </h3>
              The checkout solution is provided by Klarna AB (Sveavägen 46, 111
              34 Stockholm, Sweden) and uses cookies to provide you with an
              ideal, tailored online experience when using the checkout.
              Processing is based on Art. 6 para. 1 lit. a DSGVO with your
              consent. You can revoke your consent at any time without affecting
              the legality of the processing carried out on the basis of the
              consent to revocation. You can prevent the storage of cookies by
              selecting appropriate technical settings of your browser software;
              however, we point out that in this case you may not be able to use
              all the functions of this website in full.
              <br />
              <br />A detailed list of cookies and an explanation of their
              purpose can be found here
              https://cdn.klarna.com/1.0/shared/content/policy/cookie/en_at/checkout.pdf.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Use of personal data when choosing Klarna as payment method
              </h3>
              If you have opted for Klarna’s payment services Klarna Rechnung
              and / or Klarna installment purchase as a payment option, you have
              consented to the following personal data such as name and surname,
              address, date of birth, necessary for the processing of the
              invoice purchase and an identity and credit check, Gender, e-mail
              address, IP address, telephone number as well as the data
              necessary for the settlement of the invoice purchase, which are
              related to the order, such as the number of articles, article
              number, invoice amount and taxes in percent, levied and to Klarna
              have transmitted. The data processing serves the purpose of the
              offer of the payment methods invoice purchase and installment
              purchase as well as the necessary credit check. Processing is
              based on Art. 6 para. 1 lit. a DSGVO with your consent. You may
              revoke your consent at any time by notifying us without affecting
              the legality of the processing based on the consent to revocation.
              <br />
              <br />
              The transmission of this data takes place so that Klarna can
              prepare an invoice for the processing of your purchase with the
              invoice processing you require and carry out an identity and
              credit check. Klarna needs the personal data of the buyer in order
              to obtain information from credit reference agencies for the
              purposes of identity and credit checks. In Germany, these may be
              the following credit bureaus:
              <br />
              <br />
              – Schufa Holding AG, Kormoranweg 5, 65203 Wiesbaden
              <br />
              <br />
              – Bürgel Business Information GmbH &amp; Co. KG, PO Box 5001 66,
              22701 Hamburg
              <br />
              <br />
              – Creditreform Bremen Seddig KG, Contrescarpe 17, 28203 Bremen
              <br />
              <br />– Infoscore Consumer Data GmbH, Rheinstrasse 99, 76532
              Baden-Baden.
              <br />
              <br />
              In the context of the decision on the establishment,
              implementation or termination of the contractual relationship
              Klarna collects and uses apart from an address check also
              information on the previous payment history of the buyer and
              probability values ​​for this behavior in the future. Klarna
              calculates these score values ​​based on a scientifically
              recognized mathematical-statistical procedure. Klarna will also
              use your address data. If this calculation shows that your
              creditworthiness is not met, Klarna will inform you immediately.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Revocation of the use of personal data against Klarna
              </h3>
              1. You can revoke your consent to the use of your personal data
              with Klarna at any time. However, Klarna may continue to be
              entitled to process, use and transmit the personal data insofar as
              this is necessary for contractual payment processing by Klarnas
              Services, is required by law, or is required by a court or an
              authority.
              <br />
              <br />
              2. You can obtain information about the personal data stored by
              Klarna at any time. This right is guaranteed by the Federal Data
              Protection Act. If you as a buyer wish this or if you want to
              inform Klarna about changes to the stored data, you can contact
              datenschutz@klarna.de.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Cookies</h2>
              The internet pages partly use so-called cookies. Cookies do not
              harm your computer and do not contain viruses. Cookies are used to
              make our offer more user-friendly, effective and secure. Cookies
              are small text files that are stored on your computer and stored
              by your browser.
              <br />
              <br />
              Most of the cookies we use are so-called “session cookies”. They
              are automatically deleted after your visit. Other cookies remain
              stored on your device until you delete them. These cookies allow
              us to recognize your browser on your next visit.
              <br />
              <br />
              You can set your browser so that you are informed about the
              setting of cookies and cookies only in individual cases allow, the
              acceptance of cookies for certain cases or generally exclude and
              activate the automatic deletion of cookies when closing the
              browser. Disabling cookies may limit the functionality of this
              website.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Privacy Policy for the use of Google Analytics
              </h2>
              This website uses functions of the web analytics service Google
              Analytics. Provider is Google Inc., 1600 Amphitheater Parkway
              Mountain View, CA 94043, USA.
              <br />
              <br />
              Google Analytics uses so-called “cookies”. These are text files
              that are stored on your computer and that allow an analysis of the
              use of the website by you. The information generated by the cookie
              about your use of this website is usually transmitted to a Google
              server in the USA and stored there.
              <br />
              <br />
              For more information on how to handle user data on Google
              Analytics, please refer to the Google Privacy Policy:
              https://support.google.com/analytics/answer/6004245?hl=en
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                1. Browser plugin
              </h2>
              You can prevent the storage of cookies by a corresponding setting
              of your browser software; however, we point out that in this case
              you may not be able to use all the functions of this website in
              full. In addition, you may prevent the collection by Google of the
              data generated by the cookie and related to your use of the
              website (including your IP address) and the processing of this
              data by Google by downloading the browser plug-in available under
              the following link and install:
              https://tools.google.com/dlpage/gaoptout?hl=en
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                2. Opposition to data collection
              </h2>
              You can prevent the collection of your data by Google Analytics by
              clicking on the following link. An opt-out cookie is set that
              prevents the collection of your data on future visits to this
              website: disable Google Analytics
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Duration of storage
              </h2>
              Your data is initially stored for the duration of the warranty
              period and taking into account legal retention periods. After the
              deadline, they will be deleted, unless you have agreed to the
              further processing and use.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Rights of the data subject
              </h2>
              You have the right to request a confirmation as to whether the
              data in question is being processed and for information about this
              data as well as for further information and a copy of the data in
              accordance with Art. 15 GDPR.
              <br />
              <br />
              You have accordingly. Art. 16 DSGVO the right to demand the
              completion of the data concerning you or the correction of the
              incorrect data concerning you.
              <br />
              <br />
              In accordance with Art. 17 GDPR, they have the right to demand
              that the relevant data be deleted without delay, or,
              alternatively, to require a restriction of the processing of data
              in accordance with Art. 18 GDPR.
              <br />
              <br />
              You have the right to demand that the data relating to you, which
              you have provided to us, be obtained in accordance with Art. 20
              GDPR and request their transmission to other responsible persons.
              <br />
              <br />
              You have gem. Art. 77 DSGVO the right to file a complaint with the
              competent supervisory authority.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Comments and posts
              </h2>
              If users leave comments or other posts, their IP addresses may be
              based on our legitimate interests as defined in Art. 6Abs. 1 lit.
              f. DSGVO be stored for 7 days. This is for our own safety, if
              someone leaves illegal content in comments and contributions
              (insults, prohibited political propaganda, etc.). In this case, we
              may be sued for the comment or post and are therefore interested
              in the identity of the author.
              <br />
              <br />
              Furthermore, we reserve the right, in accordance with our
              legitimate interests. Art. 6 para. 1 lit. f. DSGVO to process the
              information of users for the purpose of spam detection.
              <br />
              <br />
              The data provided in the comments and contributions are stored by
              us permanently until the users object.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Revocation</h2>
              You also have the right to object to the use of your data for
              specific purposes, including the receipt of advertising. After the
              objection, we will stop the processing of the relevant data for
              the purpose of direct mailing.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                SSL encryption
              </h2>
              This site uses SSL encryption for security reasons and to protect
              the transmission of sensitive content, such as the requests you
              send to us as the site operator. An encrypted connection is
              indicated by the browser’s address bar changing from “http: //” to
              “https: //” and the lock icon in your browser bar.
              <br />
              <br />
              If SSL encryption is enabled, the data you submit to us can not be
              read by third parties.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Google webfonts
              </h2>
              This page uses so-called webfonts to represent the font. These are
              provided by Google (http://www.google.com/webfonts/). To do this,
              when you visit our page, your browser loads the required webfont
              into your browser cache. This is necessary so that your browser
              can also display a visually improved presentation of our texts. If
              your browser does not support this feature, a default font will be
              used by your computer for viewing.
              <br />
              <br />
              For more information about Google Webfonts, visit
              https://developers.google.com/fonts/faq?hl=en-US&csw=1
              <br />
              <br />
              For general information about privacy at Google, visit
              http://www.google.com/intl/en-US/policies/privacy/
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Social media</h2>
              We maintain websites within social networks and platforms in order
              to communicate with customers and prospects and to inform about
              our products. These are linked on our website and accessible to
              all visitors. When calling up the respective networks and
              platforms, the terms and conditions and the privacy statements of
              the respective networks and platforms apply. The processing of
              personal data on our part is based on the legitimate interest.
              <br />
              <br />
              We point out that this data of visitors outside the European Union
              can be processed. This may give rise to risks that may make it
              harder to enforce the rights of the affected party. US networks
              and platforms that are certified under the Privacy Shield commit
              to comply with EU privacy policies.
              <br />
              <br />
              Below you will find an overview of the websites we operate and the
              corresponding contact points regarding the privacy policies of the
              respective networks and platforms.
              <br />
              <br />
              • Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbor, Dublin 2, Ireland), Facebook pages based on an
              agreement on joint processing of personal data – Privacy Policy:
              https://www.facebook.com/about/ privacy / opt-out:
              https://www.facebook.com/settings?tab=ads and
              http://www.youronlinechoices.com, Privacy Shield:
              https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active.
              <br />
              <br />
              • Google / YouTube (Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland) – Privacy Policy:
              https://policies.google.com/privacy, opt-out:
              https://adssettings.google.com/authenticated , Privacy Shield:
              https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.
              <br />
              <br />
              • Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, Calif.,
              94025, USA) – Privacy Policy / Opt-Out:
              http://instagram.com/about/legal/privacy/.
              <br />
              <br />
              • Twitter (Twitter Inc., 1355 Market Street, Suite 900, San
              Francisco, CA 94103, USA) – Privacy Policy:
              https://twitter.com/privacy, opt-out:
              https://twitter.com/personalization , Privacy Shield:
              https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active.
              <br />
              <br />
              Tumblr (Tumblr, Inc., 35 East 21st St., 10th Floor, New York, NY
              10010, USA)
              <br />
              <br />
              Privacy Policy: http://www.tumblr.com/policy/en/privacy
              <br />
              <br />• Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA,
              94301, USA) – Privacy Policy / Opt-Out:
              https://about.pinterest.com/en/privacy-policy.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Use of Facebook social plugins
              </h2>
              On the basis of our legitimate interests (ie interest in the
              analysis, optimization and economic operation of our online offer
              within the meaning of Art. 6 Para. 1 lit. f. GDPR), we use social
              plugins (“plugins”) from the social network facebook.com, which
              operated by Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbor, Dublin 2, Ireland („Facebook“). The plugins can
              display interaction elements or content (e.g. videos, graphics or
              text contributions) and can be recognized by one of the Facebook
              logos (white “f” on a blue tile, the terms “like”, “like” or a
              “thumbs up” sign ) or are marked with the addition „Facebook
              Social Plugin“. The list and the appearance of the Facebook social
              plugins can be viewed here:
              https://developers.facebook.com/docs/plugins/.
              <br />
              <br />
              Facebook is certified under the Privacy Shield Agreement and thus
              offers a guarantee to comply with European data protection law
              (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).
              <br />
              <br />
              When a user calls up a function of this online offer that contains
              such a plugin, his device establishes a direct connection with the
              Facebook servers. The content of the plug-in is transmitted
              directly from Facebook to the user’s device, which integrates it
              into the online offer. In doing so, user profiles can be created
              from the processed data. We therefore have no influence on the
              amount of data that Facebook collects with the help of this plugin
              and therefore informs users according to our level of knowledge.
              <br />
              <br />
              By integrating the plugins, Facebook receives the information that
              a user has called up the corresponding page of the online offer.
              If the user is logged into Facebook, Facebook can assign the visit
              to his Facebook account. When users interact with the plugins, for
              example by pressing the Like button or making a comment, the
              relevant information is transmitted directly from your device to
              Facebook and stored there. If a user is not a member of Facebook,
              there is still the possibility that Facebook will find out his IP
              address and save it. According to Facebook, only an anonymized IP
              address is saved in Germany.
              <br />
              <br />
              The purpose and scope of the data collection and the further
              processing and use of the data by Facebook as well as the related
              rights and setting options to protect the privacy of users can be
              found in Facebook’s data protection information:
              https://www.facebook.com/about/privacy/.
              <br />
              <br />
              If a user is a Facebook member and does not want Facebook to
              collect data about him through this online offer and link it to
              his member data stored on Facebook, he must log out of Facebook
              before using our online offer and delete his cookies. Further
              settings and contradictions to the use of data for advertising
              purposes are possible within the Facebook profile settings:
              https://www.facebook.com/settings?tab=ads or via the US website
              http://www.aboutads.info / choices / or the EU page
              http://www.youronlinechoices.com/. The settings are
              platform-independent, i.e. they are adopted for all devices such
              as desktop computers or mobile devices.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Twitter</h2>
              Functions and contents of the Twitter service, offered by Twitter
              Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA,
              can be integrated into our online offer. This can include, for
              example, content such as images, videos or texts and buttons with
              which users can express their favor with regard to the content,
              subscribe to the authors of the content or our contributions. If
              the users are members of the Twitter platform, Twitter can assign
              the above-mentioned content and functions to the profiles of the
              users there. Twitter is certified under the Privacy Shield
              Agreement and thus offers a guarantee to comply with European data
              protection law
              (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active).
              Data protection declaration: https://twitter.com/de/privacy,
              Opt-Out: https://twitter.com/personalization.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Instagram</h2>
              Functions and contents of the Instagram service, offered by
              Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, can
              be integrated into our online offer. This can include, for
              example, content such as images, videos or texts and buttons with
              which users can express their liking for the content, subscribe to
              the authors of the content or our contributions. If the users are
              members of the Instagram platform, Instagram can assign the
              above-mentioned content and functions to the profiles of the users
              there. Instagram privacy policy:
              http://instagram.com/about/legal/privacy/.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Pinterest</h2>
              The controller has integrated components from Pinterest Inc. on
              this website. Pinterest is a so-called social network. A social
              network is an Internet-based social meeting place, an online
              community that usually allows users to communicate with each other
              and interact in virtual space. A social network can serve as a
              platform for sharing views and experiences, or allows the Internet
              community to provide personal or business information. Among other
              things, Pinterest enables users of the social network to publish
              picture collections and individual pictures as well as
              descriptions on virtual pinboards (so-called pinnings), which in
              turn can be shared by other users (so-called repinnen) or
              commented on.
              <br />
              <br />
              Pinterest’s operating company is Pinterest Inc., 808 Brannan St.,
              San Francisco, CA 94103, USA.
              <br />
              <br />
              Each time one of the individual pages of this website is called up
              by the controller and a Pinterest component (Pinterest plug-in)
              has been integrated, the Internet browser on the information
              technology system of the person concerned is automatically
              pinterested Component causes a representation of the corresponding
              Pinterest component of Pinterest to be downloaded. More
              information about Pinterest is available at
              https://pinterest.com/. As part of this technical process,
              Pinterest is aware of which specific bottom of our website is
              visited by the person concerned.
              <br />
              <br />
              If the data subject is logged in to Pinterest at the same time,
              Pinterest recognizes with each visit of our website by the data
              subject and during the entire duration of the respective stay on
              our website, which specific underside of our website visited the
              data subject. This information is collected by the Pinterest
              component and assigned by Pinterest to the affected Pinterest
              account of the data subject. If the person concerned activates a
              Pinterest button integrated on our website, Pinterest assigns this
              information to the personal Pinterest user account of the person
              concerned and saves this personal data.
              <br />
              <br />
              Pinterest always receives information from the Pinterest component
              that the data subject has visited our website if the data subject
              is simultaneously logged in to Pinterest at the time of access to
              our website; this happens regardless of whether or not the
              affected person clicks on the Pinterest component. If such a
              transfer of this information to Pinterest by the person concerned
              is not intended, it can prevent the transfer by logging out of
              your Pinterest account before calling our website.
              <br />
              <br />
              Pinterest’s Privacy Policy, available at
              https://about.pinterest.com/privacy-policy, provides insight into
              the collection, processing and use of personal information by
              Pinterest.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">YouTube</h2>
              The controller has integrated YouTube components on this website.
              YouTube is an internet video portal that allows video publishers
              to freely watch video clips and other users for free viewing,
              rating and commenting. YouTube allows the publication of all types
              of videos, so that both complete film and television broadcasts,
              but also music videos, trailers or user-made videos via the
              Internet portal are available.
              <br />
              <br />
              YouTube’s operating company is YouTube, LLC, 901 Cherry Ave., San
              Bruno, CA 94066, USA. YouTube, LLC is a subsidiary of Google Inc.,
              1600 Amphitheater Pkwy, Mountain View, CA 94043-1351, USA.
              <br />
              <br />
              Each visit to one of the pages of this website operated by the
              controller and incorporating a YouTube component (YouTube video)
              automatically causes the Internet browser on the subject’s
              information technology system to be represented by the respective
              YouTube component to download an illustration of the corresponding
              YouTube component from YouTube. More information about YouTube can
              be found at https://www.youtube.com/yt/about/en/. As part of this
              technical process, YouTube and Google will be aware of which
              specific bottom of our site the person is visiting.
              <br />
              <br />
              If the person is logged in to YouTube at the same time, YouTube
              recognizes by calling a sub-page that contains a YouTube video,
              which specific bottom of our website the affected person visits.
              This information will be collected by YouTube and Google and
              associated with the affected person’s YouTube account.
              <br />
              <br />
              YouTube and Google will always receive information through the
              YouTube component that the data subject has visited our website if
              the data subject is simultaneously logged into YouTube at the time
              of access to our website; this happens regardless of whether the
              person clicks on a YouTube video or not. If such information is
              not intended to be passed on to YouTube and Google by the person
              concerned, the latter may prevent the transmission from logging
              out of their YouTube account before calling our website.
              <br />
              <br />
              YouTube’s privacy policy, available at
              https://www.google.com/intl/en/policies/privacy/, identifies the
              collection, processing, and use of personally identifiable
              information by YouTube and Google.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Tumblr</h2>
              Our pages use buttons of the service Tumblr. Provider is Tumblr,
              Inc., 35 East 21st St, 10th Floor, New York, NY 10010, USA. These
              buttons allow you to share a post or page with Tumblr or to follow
              the provider on Tumblr. When you visit one of our websites using
              the Tumblr button, the browser establishes a direct connection to
              the Tumblr servers. We have no control over the amount of data
              that Tumblr collects and transmits using this plug-in. According
              to the current state, the IP address of the user as well as the
              URL of the respective website are transmitted.
              <br />
              <br />
              Further information can be found in the Tumblr privacy policy at
              http://www.tumblr.com/policy/en/privacy.
              <br />
              <br />
              If you have questions about our privacy policy, please contact us
              via the contact form or via
              <br />
              <br />
              Clemens Roosen
              <br />
              Suhrsweg 3
              <br />
              D-22305
              <br />
              Hamburg
              <br />
              <br />
              E-Mail: info@upcrate.art
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Ahoi und willkommen auf unserer Website!
              </h2>
              Upcrate verpflichtet sich, Ihre Privatsphäre zu schützen. Hiermit
              informieren wir Sie, welche personenbezogenen Daten wir erheben,
              wie wir diese verwenden und welche Rechte Sie bei der Nutzung
              unserer Website haben. Clemens Roosen („Upcrate“, „wir“ oder
              „uns“) ist verantwortlich für die Verarbeitung personenbezogener
              Daten, die über die Websites www.upcrate.art und www.upcrate.de
              erhoben werden.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Datenschutz</h2>
              Die Nutzung unserer Website ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Server-Log-Dateien
              </h2>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log Files, die Ihr Browser
              automatisch an uns übermittelt. Dies sind: • Browsertyp und
              Browserversion • verwendetes Betriebssystem • Referrer URL •
              Hostname des zugreifenden Rechners • Uhrzeit der Serveranfrage •
              übertragene Datenmenge • IP-Adresse Diese Daten sind nicht
              bestimmten Personen zuzuordnen. Eine Zusammenführung dieser Daten
              mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns
              vor, diese Daten nachträglich zu prüfen, wenn uns konkrete
              Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden. Die
              Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              1 lit. nach DSGVO, um einen störungsfreien Betrieb unserer Website
              zu gewährleisten.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Bestellungen</h2>
              Bei Bestellungen erheben und verarbeiten wir Ihre
              personenbezogenen Daten nur, soweit dies zur Erfüllung und
              Abwicklung Ihrer Bestellung erforderlich ist. Weil die
              Verarbeitung zum Abschluss eines Vertrages mit Ihnen erforderlich
              ist oder Schritte vor dem Abschluss eines Vertrages mit Ihnen
              erforderlich sind (z.B. wenn Sie bei uns einkaufen, verwenden wir
              Ihre personenbezogenen Daten zur Abwicklung der Zahlung und zur
              Erfüllung Ihrer Bestellung). Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 1 lit. b DSGVO und zur Erfüllung eines
              Vertrages mit Ihnen erforderlich ist. Eine Weitergabe Ihrer Daten
              erfolgt beispielsweise an Versandunternehmen und
              Zahlungsdienstleister.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Kontakt Formular
              </h2>
              Bei der Nutzung des Kontaktformulars werden personenbezogene Daten
              (wie Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen
              angegebenen Umfang erhoben. Die Daten dienen der Kontaktaufnahme.
              Mit dem Absenden Ihrer Nachricht stimmen Sie der Verarbeitung der
              übermittelten Daten zu. Die Verarbeitung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit
              widerrufen. Wir verwenden Ihre E-Mail-Adresse ausschließlich zur
              Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend
              gelöscht.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Newsletter</h2>
              Wenn Sie unseren Newsletter beziehen möchten, benötigen wir von
              Ihnen eine valide E-Mail-Adresse sowie Informationen, welche uns
              die Überprüfung gestatten, dass Sie der Inhaber der angegebenen
              E-Mail-Adresse sind und mit dem Empfang des Newsletters
              einverstanden sind. Es werden keine weiteren Daten oder nur auf
              freiwilliger Basis erhoben. Diese Daten verwenden wir nur für den
              Versand der angeforderten Informationen und geben sie nicht an
              Dritte weiter.
              <br />
              <br />
              Daher verarbeiten wir die von Ihnen in das Kontaktformular
              eingegebenen Daten nur mit Ihrer Einwilligung gem. 6 (1) (a)
              DSGVO. Die Einwilligung zur Speicherung der Daten, der
              E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters
              können Sie jederzeit widerrufen, z.B. über den „Abmelden“-Link im
              Newsletter. Die bis zum Eingang Ihrer Anfrage verarbeiteten Daten
              können noch rechtmäßig verarbeitet werden.
              <br />
              <br />
              Die bei der Anmeldung zum Newsletter angegebenen Daten werden für
              den Versand des Newsletters verwendet, bis Sie sich vom Abonnement
              abmelden und anschließend gelöscht werden. Daten, die zu anderen
              Zwecken bei uns gespeichert wurden (z.B. E-Mail-Adressen für den
              Mitgliederbereich) bleiben hiervon unberührt.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Mailchimp</h2>
              Diese Website nutzt die Dienste von MailChimp zum Versand von
              Newslettern. Dieser Dienst wird angeboten von Rocket Science Group
              LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.
              MailChimp ist ein Dienst, der den Versand von Newslettern
              organisiert und analysiert. Wenn Sie Daten (z.B. Ihre
              E-Mail-Adresse) angeben, um unseren Newsletter zu abonnieren,
              werden diese auf den Servern von MailChimp in den USA gespeichert.
              <br />
              <br />
              MailChimp is a service which organizes and analyzes the
              distribution of newsletters. If you provide data (e.g. your email
              address) to subscribe to our newsletter, it will be stored on
              MailChimp servers in the USA.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Versand Service
              </h2>
              Im Rahmen der Vertragsabwicklung geben wir Ihre E-Mail-Adresse an
              unsere Lieferanten weiter, die den Transport der Ware zu Ihnen
              übernehmen, sofern Sie dem im Bestellprozess ausdrücklich
              zugestimmt haben. Die Verarbeitung erfolgt auf Grundlage von Art.
              6 Abs. 1 1 lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre
              Einwilligung jederzeit durch Mitteilung an uns oder den Spediteur
              widerrufen.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Zahlungen</h2>
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Nutzung von PayPal
              </h3>
              Alle PayPal-Transaktionen unterliegen der
              PayPal-Datenschutzerklärung. Diese finden Sie unter
              https://www.paypal.com/en/webapps/mpp/ua/privacy-full
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Nutzung des Klarna checkout
              </h3>
              Die Checkout-Lösung wird von Klarna AB (Sveavägen 46, 111 34
              Stockholm, Schweden) bereitgestellt und verwendet Cookies, um
              Ihnen bei der Nutzung des Checkouts ein optimales,
              maßgeschneidertes Online-Erlebnis zu bieten. Die Verarbeitung
              erfolgt auf Grundlage von Art. 6 Abs. 1 1 lit. a DSGVO mit Ihrer
              Einwilligung. Sie können Ihre Einwilligung jederzeit widerrufen,
              ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung zum
              Widerruf erfolgten Verarbeitung berührt wird. Sie können die
              Speicherung der Cookies durch eine entsprechende technische
              Einstellung Ihrer Browser-Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website vollumfänglich werden nutzen
              können.
              <br />
              <br />
              Eine detaillierte Liste der Cookies und eine Erläuterung ihres
              Zwecks finden Sie hier
              https://cdn.klarna.com/1.0/shared/content/policy/cookie/en_at/checkout.pdf.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Verwendung personenbezogener Daten bei der Auswahl von Klarna
                als Zahlungsmethode
              </h3>
              Wenn Sie sich für Klarnas Zahlungsdienste Klarna Rechnung und/oder
              Klarna Ratenkauf als Zahlungsmöglichkeit entschieden haben, haben
              Sie in die folgenden personenbezogenen Daten wie Vor- und
              Nachname, Anschrift, Geburtsdatum, die für die Abwicklung des
              Rechnungskaufs erforderlich sind und eine Identitäts- und
              Bonitätsprüfung, Geschlecht, E-Mail-Adresse, IP-Adresse,
              Telefonnummer sowie die zur Abwicklung des Rechnungskaufs
              notwendigen Daten, die im Zusammenhang mit der Bestellung stehen,
              wie Artikelanzahl, Artikelnummer, Rechnung Betrag und Steuern in
              Prozent, erhoben und an Klarna übermittelt haben. Die
              Datenverarbeitung dient dem Zweck des Angebots der Zahlungsarten
              Rechnungskauf und Ratenkauf sowie der erforderlichen
              Bonitätsprüfung. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 1 lit. a DSGVO mit Ihrer Einwilligung. Sie können Ihre
              Einwilligung jederzeit durch Mitteilung an uns widerrufen, ohne
              dass die Rechtmäßigkeit der aufgrund der Einwilligung zum Widerruf
              erfolgten Verarbeitung berührt wird.
              <br />
              <br />
              Die Übermittlung dieser Daten erfolgt, damit Klarna für die
              Abwicklung Ihres Einkaufs mit der von Ihnen gewünschten
              Rechnungsbearbeitung eine Rechnung erstellen und eine Identitäts-
              und Bonitätsprüfung durchführen kann. Klarna benötigt die
              personenbezogenen Daten des Käufers, um zum Zwecke der Identitäts-
              und Bonitätsprüfung Auskünfte bei Wirtschaftsauskunfteien
              einzuholen. In Deutschland können dies folgende Auskunfteien sein:
              <br />
              <br />
              – Schufa Holding AG, Kormoranweg 5, 65203 Wiesbaden
              <br />
              <br />
              – Bürgel Business Information GmbH &amp; Co. KG, PO Box 5001 66,
              22701 Hamburg
              <br />
              <br />
              – Creditreform Bremen Seddig KG, Contrescarpe 17, 28203 Bremen
              <br />
              <br />– Infoscore Consumer Data GmbH, Rheinstrasse 99, 76532
              Baden-Baden.
              <br />
              <br />
              Im Rahmen der Entscheidung über die Begründung, Durchführung oder
              Beendigung des Vertragsverhältnisses erhebt und verwendet Klarna
              neben einer Adressprüfung auch Informationen zum bisherigen
              Zahlungsverhalten des Käufers und Wahrscheinlichkeitswerte für
              dieses zukünftige Verhalten. Diese Score-Werte berechnet Klarna
              auf Basis eines wissenschaftlich anerkannten
              mathematisch-statistischen Verfahrens. Außerdem verwendet Klarna
              Ihre Adressdaten. Sollte diese Berechnung ergeben, dass Ihre
              Kreditwürdigkeit nicht gegeben ist, wird Klarna Sie umgehend
              informieren.
              <h3 className="text-xl font-bold mt-10 md:mt-8">
                Widerruf der Verwendung personenbezogener Daten gegenüber Klarna
              </h3>
              1. Sie können Ihre Einwilligung zur Verwendung Ihrer
              personenbezogenen Daten jederzeit gegenüber Klarna widerrufen.
              Klarna kann jedoch weiterhin berechtigt sein, die
              personenbezogenen Daten zu verarbeiten, zu nutzen und zu
              übermitteln, soweit dies zur vertragsgemäßen Zahlungsabwicklung
              durch Klarnas Services erforderlich, gesetzlich vorgeschrieben
              oder von einem Gericht oder einer Behörde vorgeschrieben ist.
              <br />
              <br />
              2. Sie können jederzeit Auskunft über die von Klarna gespeicherten
              personenbezogenen Daten erhalten. Dieses Recht wird durch das
              Bundesdatenschutzgesetz gewährleistet. Wenn Sie als Käufer dies
              wünschen oder Klarna über Änderungen der gespeicherten Daten
              informieren möchten, können Sie sich an datenschutz@klarna.de
              wenden.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Cookies</h2>
              Die Internetseiten verwenden teilweise sogenannte Cookies. Cookies
              richten auf Ihrem Computer keinen Schaden an und enthalten keine
              Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
              effektiver und sicherer zu machen. Cookies sind kleine
              Textdateien, die auf Ihrem Computer abgelegt und von Ihrem Browser
              gespeichert werden.
              <br />
              <br />
              Die meisten der von uns verwendeten Cookies sind sogenannte
              „Session-Cookies“. Sie werden nach Ihrem Besuch automatisch
              gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert,
              bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
              Browser beim nächsten Besuch wiederzuerkennen.
              <br />
              <br />
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browser aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Datenschutzerklärung für die Nutzung von Google Analytics
              </h2>
              This website uses functions of the web analytics service Google
              Analytics. Provider is Google Inc., 1600 Amphitheater Parkway
              Mountain View, CA 94043, USA.
              <br />
              <br />
              Google Analytics uses so-called â€œcookiesâ€. These are text files
              that are stored on your computer and that allow an analysis of the
              use of the website by you. The information generated by the cookie
              about your use of this website is usually transmitted to a Google
              server in the USA and stored there.
              <br />
              <br />
              For more information on how to handle user data on Google
              Analytics, please refer to the Google Privacy Policy:
              https://support.google.com/analytics/answer/6004245?hl=en
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                1. Browser plugin
              </h2>
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway
              Mountain View, CA 94043, USA. Google Analytics verwendet
              sogenannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer
              gespeichert werden und die eine Analyse der Benutzung der Website
              durch Sie ermöglichen. Die durch den Cookie erzeugten
              Informationen über Ihre Benutzung dieser Website werden in der
              Regel an einen Server von Google in den USA übertragen und dort
              gespeichert. Mehr Informationen zum Umgang mit Nutzerdaten bei
              Google Analytics finden Sie in der Datenschutzerklärung von
              Google: https://support.google.com/analytics/answer/6004245?hl=de
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                2. Widerspruch gegen die Datenerhebung
              </h2>
              Sie können die Erfassung Ihrer Daten durch Google Analytics
              verhindern, indem Sie auf folgenden Link klicken. Es wird ein
              Opt-Out-Cookie gesetzt, das die Erfassung Ihrer Daten bei
              zukünftigen Besuchen dieser Website verhindert: Google Analytics
              deaktivieren
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Dauer der Datensicherung
              </h2>
              Ihre Daten werden zunächst für die Dauer der Gewährleistungsfrist
              und unter Berücksichtigung gesetzlicher Aufbewahrungsfristen
              gespeichert. Nach Ablauf der Frist werden sie gelöscht, sofern Sie
              der weiteren Verarbeitung und Nutzung nicht zugestimmt haben.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Rechte der Betroffenen
              </h2>
              Sie haben entsprechend. Art. 16 DSGVO das Recht, die
              Vervollständigung der Sie betreffenden Daten oder die Berichtigung
              Sie betreffender unrichtiger Daten zu verlangen.
              <br />
              <br />
              Gemäß Art. 17 DSGVO haben sie das Recht zu verlangen, dass
              betreffende Daten unverzüglich gelöscht werden, bzw. alternativ
              nach Maßgabe von Art. 18 DSGVO.
              <br />
              <br />
              Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten,
              die Sie uns bereitgestellt haben, gem. 20 DSGVO und verlangen
              deren Übermittlung an andere Verantwortliche.
              <br />
              <br />
              You have the right to demand that the data relating to you, which
              you have provided to us, be obtained in accordance with Art. 20
              GDPR and request their transmission to other responsible persons.
              <br />
              <br />
              Sie haben gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der
              zuständigen Aufsichtsbehörde einzureichen.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Kommentare und Beiträge
              </h2>
              Wenn Nutzer Kommentare oder sonstige Beiträge hinterlassen, können
              ihre IP-Adressen auf Grundlage unserer berechtigten Interessen im
              Sinne des Art. 6 Abs. 1 lit. F. DSGVO für 7 Tage gespeichert
              werden. Dies geschieht zu unserer eigenen Sicherheit, falls jemand
              in Kommentaren und Beiträgen widerrechtliche Inhalte hinterlässt
              (Beleidigungen, verbotene politische Propaganda, etc.). In diesem
              Fall können wir für den Kommentar oder Beitrag verklagt werden und
              sind daher an der Identität des Autors interessiert.
              <br />
              <br />
              Darüber hinaus behalten wir uns im Rahmen unserer berechtigten
              Interessen das Recht vor. Art. 6 Abs. 1 1 lit. F. DSGVO, die
              Angaben der Nutzer zum Zwecke der Spam-Erkennung zu verarbeiten.
              Die in den Kommentaren und Beiträgen angegebenen Daten werden von
              uns bis zum Widerspruch der Nutzer dauerhaft gespeichert.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Widerruf</h2>
              Sie haben auch das Recht, der Verwendung Ihrer Daten für bestimmte
              Zwecke, einschließlich des Erhalts von Werbung, zu widersprechen.
              Nach dem Widerspruch werden wir die Verarbeitung der
              entsprechenden Daten zum Zwecke der Direktwerbung einstellen.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                SSL-Verschlüsselung
              </h2>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen,
              die Sie an uns als Seitenbetreiber senden, eine
              SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
              <br />
              <br />
              Bei aktivierter SSL-Verschlüsselung können die von Ihnen an uns
              übermittelten Daten nicht von Dritten mitgelesen werden.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Google webfonts
              </h2>
              Diese Seite verwendet zur Darstellung der Schriftart sogenannte
              Webfonts. Diese werden von Google
              (http://www.google.com/webfonts/) bereitgestellt. Dazu lädt Ihr
              Browser beim Aufruf unserer Seite den benötigten Webfont in Ihren
              Browsercache. Dies ist notwendig, damit Ihr Browser auch eine
              optisch verbesserte Darstellung unserer Texte anzeigen kann. Wenn
              Ihr Browser diese Funktion nicht unterstützt, wird von Ihrem
              Computer zum Anzeigen eine Standardschrift verwendet.
              <br />
              <br />
              Weitere Informationen zu Google Webfonts finden Sie unter
              https://developers.google.com/fonts/faq?hl=en-US&csw=1
              <br />
              <br />
              Allgemeine Informationen zum Datenschutz bei Google finden Sie
              unter http://www.google.com/intl/en-US/policies/privacy/
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Soziale Medien
              </h2>
              Wir nutzen Websites innerhalb sozialer Netzwerke und Plattformen,
              um mit Kunden und Interessenten zu kommunizieren und über unsere
              Produkte zu informieren. Diese sind auf unserer Website verlinkt
              und für alle Besucher zugänglich. Beim Aufruf der jeweiligen
              Netzwerke und Plattformen gelten die Geschäftsbedingungen und die
              Datenschutzerklärungen der jeweiligen Netzwerke und Plattformen.
              Die Verarbeitung personenbezogener Daten unsererseits erfolgt auf
              Grundlage des berechtigten Interesses.
              <br />
              <br />
              Wir weisen darauf hin, dass hierbei Daten von Besuchern außerhalb
              der Europäischen Union verarbeitet werden können. Daraus können
              sich Risiken ergeben, die die Durchsetzung der Rechte des
              Betroffenen erschweren können. US-amerikanische Netzwerke und
              Plattformen, die unter dem Privacy Shield zertifiziert sind,
              verpflichten sich, die EU-Datenschutzrichtlinien einzuhalten.
              Nachfolgend finden Sie eine Übersicht über die von uns betriebenen
              Webseiten und die entsprechenden Kontaktstellen zu den
              Datenschutzhinweisen der jeweiligen Netzwerke und Plattformen.
              <br />
              <br />
              Below you will find an overview of the websites we operate and the
              corresponding contact points regarding the privacy policies of the
              respective networks and platforms.
              <br />
              <br />
              • Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Irland), Facebook-Seiten auf Grundlage
              einer Vereinbarung zur gemeinsamen Verarbeitung personenbezogener
              Daten – Datenschutzerklärung: https://www.facebook.com/about /
              Datenschutz / Opt-Out: https://www.facebook.com/settings? tab=ads
              und http://www.youronlinechoices.com, Privacy Shield:
              https://www.privacyshield.gov/participant?id= a2zt0000000GnywAAC &
              status = Active.
              <br />
              <br />
              • Google / YouTube (Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Ireland) – Privacy Policy:
              https://policies.google.com/privacy, opt-out:
              https://adssettings.google.com/authenticated , Privacy Shield:
              https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.
              <br />
              <br />
              • Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, Calif.,
              94025, USA) – Privacy Policy / Opt-Out:
              http://instagram.com/about/legal/privacy/.
              <br />
              <br />
              • Twitter (Twitter Inc., 1355 Market Street, Suite 900, San
              Francisco, CA 94103, USA) – Privacy Policy:
              https://twitter.com/privacy, opt-out:
              https://twitter.com/personalization , Privacy Shield:
              https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active.
              <br />
              <br />
              Tumblr (Tumblr, Inc., 35 East 21st St., 10th Floor, New York, NY
              10010, USA)
              <br />
              <br />
              Privacy Policy: http://www.tumblr.com/policy/en/privacy
              <br />
              <br />• Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA,
              94301, USA) – Privacy Policy / Opt-Out:
              https://about.pinterest.com/en/privacy-policy.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">
                Verwendung von Facebook-Social-Plugins
              </h2>
              Wir setzen auf Grundlage unserer berechtigten Interessen (d.h.
              Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb
              unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO)
              Social Plugins („Plugins“) der soziales Netzwerk facebook.com,
              welches von der Facebook Ireland Ltd., 4 Grand Canal Square, Grand
              Canal Harbour, Dublin 2, Irland betrieben wird („Facebook“). Die
              Plugins können Interaktionselemente oder Inhalte (zB Videos,
              Grafiken oder Textbeiträge) darstellen und sind an einem der
              Facebook Logos erkennbar (weißes „f“ auf blauer Kachel, den
              Begriffen „Gefällt mir“, „Gefällt mir“ oder einem „Daumen“.
              up“-Zeichen ) oder sind mit dem Zusatz „Facebook Social Plugin“
              gekennzeichnet. Die Liste und das Aussehen der
              Facebook-Social-Plugins können Sie hier einsehen:
              https://developers.facebook.com/docs/plugins/.
              <br />
              <br />
              Facebook ist unter dem Privacy-Shield-Abkommen zertifiziert und
              bietet hierdurch eine Garantie, das europäische Datenschutzrecht
              einzuhalten
              (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active).
              <br />
              <br />
              Wenn ein Nutzer eine Funktion dieses Onlineangebotes aufruft, die
              ein solches Plugin enthält, baut sein Gerät eine direkte
              Verbindung mit den Servern von Facebook auf. Der Inhalt des
              Plugins wird von Facebook direkt an das Gerät des Nutzers
              übermittelt und von diesem in das Onlineangebot eingebunden. Dabei
              können aus den verarbeiteten Daten Nutzungsprofile erstellt
              werden. Wir haben daher keinen Einfluss auf den Umfang der Daten,
              die Facebook mit Hilfe dieses Plugins erhebt und informiert die
              Nutzer daher entsprechend unserem Kenntnisstand.
              <br />
              <br />
              Durch die Einbindung der Plugins erhält Facebook die Information,
              dass ein Nutzer die entsprechende Seite des Onlineangebotes
              aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann
              Facebook den Besuch seinem Facebook-Konto zuordnen. Wenn Nutzer
              mit den Plugins interagieren, zum Beispiel den Like Button
              betätigen oder einen Kommentar abgeben, wird die entsprechende
              Information von Ihrem Gerät direkt an Facebook übermittelt und
              dort gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist,
              besteht trotzdem die Möglichkeit, dass Facebook seine IP-Adresse
              in Erfahrung bringt und speichert. Laut Facebook wird in
              Deutschland nur eine anonymisierte IP-Adresse gespeichert.
              <br />
              <br />
              Zweck und Umfang der Datenerhebung und die weitere Verarbeitung
              und Nutzung der Daten durch Facebook sowie die diesbezüglichen
              Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre
              der Nutzer können diese den Datenschutzhinweisen von Facebook
              entnehmen: https://www.facebook .com/about/privacy/ .
              <br />
              <br />
              Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass
              Facebook über dieses Onlineangebot Daten über ihn sammelt und mit
              seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss
              er sich vor der Nutzung unseres Onlineangebotes bei Facebook
              ausloggen und seine Cookies löschen. Weitere Einstellungen und
              Widersprüche zur Nutzung von Daten für Werbezwecke sind innerhalb
              der Facebook-Profileinstellungen möglich:
              https://www.facebook.com/settings?tab=ads oder über die
              US-amerikanische Seite http://www.aboutads.info/ choice / oder die
              EU-Seite http://www.youronlinechoices.com/. Die Einstellungen sind
              plattformunabhängig, d.h. sie werden für alle Geräte wie
              Desktop-Computer oder mobile Geräte übernommen.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Twitter</h2>
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes Twitter, angeboten durch die Twitter Inc., 1355
              Market Street, Suite 900, San Francisco, CA 94103, USA,
              eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos
              oder Texte und Schaltflächen gehören, mit denen Nutzer ihr
              Gefallen bezüglich der Inhalte kundtun, die Verfasser der Inhalte
              oder unsere Beiträge abonnieren können. Sofern die Nutzer
              Mitglieder der Plattform Twitter sind, kann Twitter die o.g.
              Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen.
              Twitter ist unter dem Privacy-Shield-Abkommen zertifiziert und
              bietet hierdurch eine Garantie, das europäische Datenschutzrecht
              einzuhalten (https://www.privacyshield.gov/participant?
              id=a2zt0000000TORzAAO&status=Active). Datenschutzerklärung:
              https://twitter.com/de/privacy, Opt-Out:
              https://twitter.com/personalization.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Instagram</h2>
              Innerhalb unseres Onlineangebotes können Funktionen und Inhalte
              des Dienstes Instagram, angeboten durch die Instagram Inc., 1601
              Willow Road, Menlo Park, CA, 94025, USA, eingebunden werden.
              Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
              Schaltflächen gehören, mit denen Nutzer ihr Gefallen für die
              Inhalte kundtun, die Verfasser der Inhalte oder unsere Beiträge
              abonnieren können. Sofern die Nutzer Mitglieder der Plattform
              Instagram sind, kann Instagram die o.g. Inhalte und Funktionen den
              dortigen Profilen der Nutzer zuordnen. Datenschutzerklärung von
              Instagram: http://instagram.com/about/legal/privacy/.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Pinterest</h2>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten der Pinterest Inc. integriert. Pinterest
              ist ein sogenanntes soziales Netzwerk. Ein soziales Netzwerk ist
              ein internetbasierter sozialer Treffpunkt, eine Online-Community,
              die es den Benutzern normalerweise ermöglicht, miteinander zu
              kommunizieren und im virtuellen Raum zu interagieren. Ein soziales
              Netzwerk kann als Plattform für den Austausch von Ansichten und
              Erfahrungen dienen oder ermöglicht es der Internetgemeinschaft,
              persönliche oder geschäftliche Informationen bereitzustellen.
              Pinterest ermöglicht es Nutzern des sozialen Netzwerks unter
              anderem, Bildersammlungen und Einzelbilder sowie Beschreibungen
              auf virtuellen Pinnwänden (sog. Pinnings) zu veröffentlichen, die
              wiederum von anderen Nutzern (sog. repinnen) geteilt oder
              kommentiert werden können.
              <br />
              <br />
              Betreibergesellschaft von Pinterest ist die Pinterest Inc., 808
              Brannan St., San Francisco, CA 94103, USA.
              <br />
              <br />
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite
              durch den für die Verarbeitung Verantwortlichen und auf welcher
              eine Pinterest-Komponente (Pinterest-Plug-in) integriert wurde,
              wird der Internetbrowser auf dem informationstechnologischen
              System der betroffenen Person automatisch durch die
              Pinterest-Komponente veranlasst, eine Darstellung von die
              entsprechende Pinterest-Komponente von Pinterest herunterzuladen.
              Weitere Informationen zu Pinterest finden Sie unter
              https://pinterest.com/. Im Rahmen dieses technischen Verfahrens
              erhält Pinterest Kenntnis darüber, welche konkrete Unterseite
              unserer Internetseite durch die betroffene Person besucht wird.
              <br />
              <br />
              Sofern die betroffene Person gleichzeitig bei Pinterest eingeloggt
              ist, erkennt Pinterest mit jedem Aufruf unserer Internetseite
              durch die betroffene Person und während der gesamten Dauer des
              jeweiligen Aufenthaltes auf unserer Internetseite, welche konkrete
              Unterseite unserer Internetseite die betroffene Person besucht.
              Diese Informationen werden durch die Pinterest-Komponente
              gesammelt und durch Pinterest dem betroffenen Pinterest-Account
              der betroffenen Person zugeordnet. Betätigt die betroffene Person
              einen auf unserer Internetseite integrierten Pinterest-Button,
              ordnet Pinterest diese Information dem persönlichen
              Pinterest-Benutzerkonto der betroffenen Person zu und speichert
              diese personenbezogenen Daten.
              <br />
              <br />
              Pinterest erhält durch die Pinterest-Komponente immer dann eine
              Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              Pinterest eingeloggt ist; dies findet unabhängig davon statt, ob
              die betroffene Person die Pinterest-Komponente anklickt oder
              nicht. Ist eine derartige Übermittlung dieser Informationen an
              Pinterest von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem Pinterest-Account ausloggt.
              <br />
              <br />
              Die Datenschutzerklärung von Pinterest, abrufbar unter
              https://about.pinterest.com/privacy-policy, gibt Aufschluss über
              die Erhebung, Verarbeitung und Nutzung personenbezogener Daten
              durch Pinterest.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">YouTube</h2>
              Der für die Verarbeitung Verantwortliche hat auf dieser
              Internetseite Komponenten von YouTube integriert. YouTube ist ein
              Internet-Videoportal, dass Video-Veröffentlichern das kostenlose
              Anschauen von Videoclips und anderen Nutzern die kostenlose
              Betrachtung, Bewertung und Kommentierung ermöglicht. YouTube
              erlaubt die Veröffentlichung aller Arten von Videos, so dass
              sowohl komplette Film- und Fernsehsendungen als auch Musikvideos,
              Trailer oder selbst erstellte Videos über das Internetportal zur
              Verfügung stehen.
              <br />
              <br />
              Betreibergesellschaft von YouTube ist die YouTube, LLC, 901 Cherry
              Ave., San Bruno, CA 94066, USA. YouTube, LLC ist eine
              Tochtergesellschaft der Google Inc., 1600 Amphitheatre Pkwy,
              Mountain View, CA 94043-1351, USA.
              <br />
              <br />
              Durch jeden Aufruf einer der Einzelseiten dieser Internetseite,
              die durch den für die Verarbeitung Verantwortlichen betrieben wird
              und auf welcher eine YouTube-Komponente (YouTube-Video) integriert
              wurde, wird der Internetbrowser auf dem
              informationstechnologischen System der betroffenen Person
              automatisch durch die jeweilige YouTube-Komponente veranlasst,
              eine Darstellung der entsprechenden YouTube-Komponente
              herunterzuladen Komponente von YouTube. Weitere Informationen zu
              YouTube finden Sie unter https://www.youtube.com/yt/about/de/. Im
              Rahmen dieses technischen Verfahrens erhalten YouTube und Google
              Kenntnis darüber, welche konkrete Unterseite unserer Website die
              betroffene Person besucht.
              <br />
              <br />
              Sofern die betroffene Person gleichzeitig bei YouTube eingeloggt
              ist, erkennt YouTube mit dem Aufruf einer Unterseite, die ein
              YouTube-Video enthält, welche konkrete Unterseite unserer
              Internetseite die betroffene Person besucht. Diese Informationen
              werden durch YouTube und Google gesammelt und dem YouTube-Account
              der betroffenen Person zugeordnet.
              <br />
              <br />
              YouTube und Google erhalten über die YouTube-Komponente immer dann
              eine Information darüber, dass die betroffene Person unsere
              Internetseite besucht hat, wenn die betroffene Person zum
              Zeitpunkt des Aufrufs unserer Internetseite gleichzeitig bei
              YouTube eingeloggt ist; dies findet unabhängig davon statt, ob die
              betroffene Person ein YouTube-Video anklickt oder nicht. Ist eine
              derartige Übermittlung dieser Informationen an YouTube und Google
              von der betroffenen Person nicht gewollt, kann diese die
              Übermittlung dadurch verhindern, dass sie sich vor einem Aufruf
              unserer Internetseite aus ihrem YouTube-Account ausloggt.
              <br />
              <br />
              Die Datenschutzerklärung von YouTube, abrufbar unter
              https://www.google.com/intl/en/policies/privacy/, legt die
              Erhebung, Verarbeitung und Nutzung personenbezogener Daten durch
              YouTube und Google fest.
              <h2 className="text-2xl font-bold mt-10 md:mt-8">Tumblr</h2>
              Unsere Seiten verwenden Schaltflächen des Dienstes Tumblr.
              Anbieter ist Tumblr, Inc., 35 East 21st St, 10th Floor, New York,
              NY 10010, USA. Mit diesen Schaltflächen können Sie einen Beitrag
              oder eine Seite mit Tumblr teilen oder dem Anbieter auf Tumblr
              folgen. Wenn Sie eine unserer Websites mit dem Tumblr-Button
              besuchen, baut der Browser eine direkte Verbindung mit den Servern
              von Tumblr auf. Wir haben keinen Einfluss auf den Umfang der
              Daten, die Tumblr mit Hilfe dieses Plugins erhebt und übermittelt.
              Nach aktuellem Stand werden die IP-Adresse des Nutzers sowie die
              URL der jeweiligen Webseite übermittelt.
              <br />
              <br />
              Weitere Informationen finden Sie in der Datenschutzerklärung von
              Tumblr unter http://www.tumblr.com/policy/en/privacy.
              <br />
              <br />
              Bei Fragen zu unserer Datenschutzerklärung kontaktieren Sie uns
              bitte über das Kontaktformular oder über
              <br />
              <br />
              Clemens Roosen
              <br />
              Suhrsweg 3
              <br />
              D-22305
              <br />
              Hamburg
              <br />
              <br />
              E-Mail: info@upcrate.art
            </div>
          )}
        </div>
        <RadialGradient className="bg-green" variant="bottom-right" />
      </section>
    </>
  );
}
