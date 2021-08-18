import useTranslation from "next-translate/useTranslation";
import { Layout } from "../components";
import { RadialGradient } from "../components/elements/radial-gradient";

export default function Privacy() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <section className="p-10 md:p-20 text-purple-dark pb-20 md:pb-48 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-display">
            {t("pages.privacy.page_title")}
          </h1>
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            Ahoy and welcome to our website!
          </h2>
          Upcrate is committed to protecting your privacy. We hereby inform you
          which personal information we collect, how we use it and what rights
          you have when using our website. Clemens Roosen (“Upcrate”, “we” or
          “us”) is responsible for the processing of personal data collected
          through the websites www.upcrate.art and www.upcrate.de.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Data protection</h2>
          The use of our website is usually possible without providing personal
          data. As far as on our sides personal data (for example name, address
          or E-Mail addresses) are raised, this takes place, as far as possible,
          always on voluntary basis. These data will not be disclosed to third
          parties without your explicit consent.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Server log files</h2>
          The provider of the pages automatically collects and stores
          information in so-called server log files, which your browser
          automatically transmits to us. These are: • Browser type and browser
          verse • used operating system • Referrer URL • Host name of the
          accessing computer • Time of the server request • Transmitting amount
          of data • IP address These data cannot be assigned to specific
          persons. There is no merge of this data with other data sources. We
          reserve the right to check this data retrospectively, if we become
          aware of specific indications for illegal use. The processing of this
          data is based on Art. 6 para. 1 lit. following DSGVO to ensure
          trouble-free operation of our website.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Orders</h2>
          When ordering, we collect and process your personal data only to the
          extent necessary to fulfill and process your order. Because processing
          is necessary to conclude a contract with you or steps are required
          before concluding a contract with you (for example, when you shop with
          us, we use your personal information to process the payment and to
          fulfill your order). Processing is based on Art. 6 para. 1 lit. b
          DSGVO and is required to fulfill a contract with you. A disclosure of
          your data is done, for example, to shipping companies and payment
          service providers.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Contact form</h2>
          When using the contact form, personal data (such as name, e-mail
          address, message text) will only be collected in the amount provided
          by you. The data serve the purpose of contacting. By sending your
          message, you consent to the processing of the transmitted data. The
          processing is based on Art. 6 para 1 lit. a GDPR. You can revoke your
          consent at any time. We only use your e-mail address to process your
          request. Your data will be deleted afterwards.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Newsletter</h2>
          If you would like to receive our newsletter, we require a valid email
          address as well as information that allows us to verify that you are
          the owner of the specified email address and that you agree to receive
          this newsletter. No additional data is collected or is only collected
          on a voluntary basis. We only use this data to send the requested
          information and do not pass it on to third parties.
          <br />
          <br />
          We will, therefore, process any data you enter onto the contact form
          only with your consent per Art. 6 (1) (a) DSGVO. You can revoke
          consent to the storage of your data and email address as well as their
          use for sending the newsletter at any time, e.g. through the
          “unsubscribe” link in the newsletter. The data processed before we
          receive your request may still be legally processed.
          <br />
          <br />
          The data provided when registering for the newsletter will be used to
          distribute the newsletter until you cancel your subscription when said
          data will be deleted. Data we have stored for other purposes (e.g.
          email addresses for the members area) remain unaffected.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Mailchimp</h2>
          This website uses the services of MailChimp to send newsletters. This
          service is provided by Rocket Science Group LLC, 675 Ponce De Leon Ave
          NE, Suite 5000, Atlanta, GA 30308, USA.
          <br />
          <br />
          MailChimp is a service which organizes and analyzes the distribution
          of newsletters. If you provide data (e.g. your email address) to
          subscribe to our newsletter, it will be stored on MailChimp servers in
          the USA.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Shipping service</h2>
          As part of the contract, we will share your email address with our
          suppliers, who will take over the transport of the goods to you,
          provided that you have expressly agreed to this during the ordering
          process. Processing is based on Art. 6 para. 1 lit. a DSGVO with your
          consent. You may revoke your consent at any time by notifying us or
          the carrier.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Payment service</h2>
          <h3 className="text-xl font-bold mt-10 md:mt-8">Use of PayPal</h3>
          All PayPal transactions are subject to the PayPal Privacy Policy.
          These can be found at
          https://www.paypal.com/en/webapps/mpp/ua/privacy-full
          <h3 className="text-xl font-bold mt-10 md:mt-8">
            Use of the Klarna checkout
          </h3>
          The checkout solution is provided by Klarna AB (Sveavägen 46, 111 34
          Stockholm, Sweden) and uses cookies to provide you with an ideal,
          tailored online experience when using the checkout. Processing is
          based on Art. 6 para. 1 lit. a DSGVO with your consent. You can revoke
          your consent at any time without affecting the legality of the
          processing carried out on the basis of the consent to revocation. You
          can prevent the storage of cookies by selecting appropriate technical
          settings of your browser software; however, we point out that in this
          case you may not be able to use all the functions of this website in
          full.
          <br />
          <br />A detailed list of cookies and an explanation of their purpose
          can be found here
          https://cdn.klarna.com/1.0/shared/content/policy/cookie/en_at/checkout.pdf.
          <h3 className="text-xl font-bold mt-10 md:mt-8">
            Use of personal data when choosing Klarna as payment method
          </h3>
          If you have opted for Klarna’s payment services Klarna Rechnung and /
          or Klarna installment purchase as a payment option, you have consented
          to the following personal data such as name and surname, address, date
          of birth, necessary for the processing of the invoice purchase and an
          identity and credit check, Gender, e-mail address, IP address,
          telephone number as well as the data necessary for the settlement of
          the invoice purchase, which are related to the order, such as the
          number of articles, article number, invoice amount and taxes in
          percent, levied and to Klarna have transmitted. The data processing
          serves the purpose of the offer of the payment methods invoice
          purchase and installment purchase as well as the necessary credit
          check. Processing is based on Art. 6 para. 1 lit. a DSGVO with your
          consent. You may revoke your consent at any time by notifying us
          without affecting the legality of the processing based on the consent
          to revocation.
          <br />
          <br />
          The transmission of this data takes place so that Klarna can prepare
          an invoice for the processing of your purchase with the invoice
          processing you require and carry out an identity and credit check.
          Klarna needs the personal data of the buyer in order to obtain
          information from credit reference agencies for the purposes of
          identity and credit checks. In Germany, these may be the following
          credit bureaus:
          <br />
          <br />
          – Schufa Holding AG, Kormoranweg 5, 65203 Wiesbaden
          <br />
          <br />
          – Bürgel Business Information GmbH &amp; Co. KG, PO Box 5001 66, 22701
          Hamburg
          <br />
          <br />
          – Creditreform Bremen Seddig KG, Contrescarpe 17, 28203 Bremen
          <br />
          <br />– Infoscore Consumer Data GmbH, Rheinstrasse 99, 76532
          Baden-Baden.
          <br />
          <br />
          In the context of the decision on the establishment, implementation or
          termination of the contractual relationship Klarna collects and uses
          apart from an address check also information on the previous payment
          history of the buyer and probability values ​​for this behavior in the
          future. Klarna calculates these score values ​​based on a
          scientifically recognized mathematical-statistical procedure. Klarna
          will also use your address data. If this calculation shows that your
          creditworthiness is not met, Klarna will inform you immediately.
          <h3 className="text-xl font-bold mt-10 md:mt-8">
            Revocation of the use of personal data against Klarna
          </h3>
          1. You can revoke your consent to the use of your personal data with
          Klarna at any time. However, Klarna may continue to be entitled to
          process, use and transmit the personal data insofar as this is
          necessary for contractual payment processing by Klarnas Services, is
          required by law, or is required by a court or an authority.
          <br />
          <br />
          2. You can obtain information about the personal data stored by Klarna
          at any time. This right is guaranteed by the Federal Data Protection
          Act. If you as a buyer wish this or if you want to inform Klarna about
          changes to the stored data, you can contact datenschutz@klarna.de.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Cookies</h2>
          The internet pages partly use so-called cookies. Cookies do not harm
          your computer and do not contain viruses. Cookies are used to make our
          offer more user-friendly, effective and secure. Cookies are small text
          files that are stored on your computer and stored by your browser.
          <br />
          <br />
          Most of the cookies we use are so-called “session cookies”. They are
          automatically deleted after your visit. Other cookies remain stored on
          your device until you delete them. These cookies allow us to recognize
          your browser on your next visit.
          <br />
          <br />
          You can set your browser so that you are informed about the setting of
          cookies and cookies only in individual cases allow, the acceptance of
          cookies for certain cases or generally exclude and activate the
          automatic deletion of cookies when closing the browser. Disabling
          cookies may limit the functionality of this website.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            Privacy Policy for the use of Google Analytics
          </h2>
          This website uses functions of the web analytics service Google
          Analytics. Provider is Google Inc., 1600 Amphitheater Parkway Mountain
          View, CA 94043, USA.
          <br />
          <br />
          Google Analytics uses so-called “cookies”. These are text files that
          are stored on your computer and that allow an analysis of the use of
          the website by you. The information generated by the cookie about your
          use of this website is usually transmitted to a Google server in the
          USA and stored there.
          <br />
          <br />
          For more information on how to handle user data on Google Analytics,
          please refer to the Google Privacy Policy:
          https://support.google.com/analytics/answer/6004245?hl=en
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            1. Browser plugin
          </h2>
          You can prevent the storage of cookies by a corresponding setting of
          your browser software; however, we point out that in this case you may
          not be able to use all the functions of this website in full. In
          addition, you may prevent the collection by Google of the data
          generated by the cookie and related to your use of the website
          (including your IP address) and the processing of this data by Google
          by downloading the browser plug-in available under the following link
          and install: https://tools.google.com/dlpage/gaoptout?hl=en
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            2. Opposition to data collection
          </h2>
          You can prevent the collection of your data by Google Analytics by
          clicking on the following link. An opt-out cookie is set that prevents
          the collection of your data on future visits to this website: disable
          Google Analytics
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            Duration of storage
          </h2>
          Your data is initially stored for the duration of the warranty period
          and taking into account legal retention periods. After the deadline,
          they will be deleted, unless you have agreed to the further processing
          and use.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            Rights of the data subject
          </h2>
          You have the right to request a confirmation as to whether the data in
          question is being processed and for information about this data as
          well as for further information and a copy of the data in accordance
          with Art. 15 GDPR.
          <br />
          <br />
          You have accordingly. Art. 16 DSGVO the right to demand the completion
          of the data concerning you or the correction of the incorrect data
          concerning you.
          <br />
          <br />
          In accordance with Art. 17 GDPR, they have the right to demand that
          the relevant data be deleted without delay, or, alternatively, to
          require a restriction of the processing of data in accordance with
          Art. 18 GDPR.
          <br />
          <br />
          You have the right to demand that the data relating to you, which you
          have provided to us, be obtained in accordance with Art. 20 GDPR and
          request their transmission to other responsible persons.
          <br />
          <br />
          You have gem. Art. 77 DSGVO the right to file a complaint with the
          competent supervisory authority.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">
            Comments and posts
          </h2>
          If users leave comments or other posts, their IP addresses may be
          based on our legitimate interests as defined in Art. 6Abs. 1 lit. f.
          DSGVO be stored for 7 days. This is for our own safety, if someone
          leaves illegal content in comments and contributions (insults,
          prohibited political propaganda, etc.). In this case, we may be sued
          for the comment or post and are therefore interested in the identity
          of the author.
          <br />
          <br />
          Furthermore, we reserve the right, in accordance with our legitimate
          interests. Art. 6 para. 1 lit. f. DSGVO to process the information of
          users for the purpose of spam detection.
          <br />
          <br />
          The data provided in the comments and contributions are stored by us
          permanently until the users object.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Revocation</h2>
          You also have the right to object to the use of your data for specific
          purposes, including the receipt of advertising. After the objection,
          we will stop the processing of the relevant data for the purpose of
          direct mailing.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">SSL encryption</h2>
          This site uses SSL encryption for security reasons and to protect the
          transmission of sensitive content, such as the requests you send to us
          as the site operator. An encrypted connection is indicated by the
          browser’s address bar changing from “http: //” to “https: //” and the
          lock icon in your browser bar.
          <br />
          <br />
          If SSL encryption is enabled, the data you submit to us can not be
          read by third parties.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Google webfonts</h2>
          This page uses so-called webfonts to represent the font. These are
          provided by Google (http://www.google.com/webfonts/). To do this, when
          you visit our page, your browser loads the required webfont into your
          browser cache. This is necessary so that your browser can also display
          a visually improved presentation of our texts. If your browser does
          not support this feature, a default font will be used by your computer
          for viewing.
          <br />
          <br />
          For more information about Google Webfonts, visit
          https://developers.google.com/fonts/faq?hl=en-US&csw=1
          <br />
          <br />
          For general information about privacy at Google, visit
          http://www.google.com/intl/en-US/policies/privacy/
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Social media</h2>
          We maintain websites within social networks and platforms in order to
          communicate with customers and prospects and to inform about our
          products. These are linked on our website and accessible to all
          visitors. When calling up the respective networks and platforms, the
          terms and conditions and the privacy statements of the respective
          networks and platforms apply. The processing of personal data on our
          part is based on the legitimate interest.
          <br />
          <br />
          We point out that this data of visitors outside the European Union can
          be processed. This may give rise to risks that may make it harder to
          enforce the rights of the affected party. US networks and platforms
          that are certified under the Privacy Shield commit to comply with EU
          privacy policies.
          <br />
          <br />
          Below you will find an overview of the websites we operate and the
          corresponding contact points regarding the privacy policies of the
          respective networks and platforms.
          <br />
          <br />
          • Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
          Harbor, Dublin 2, Ireland), Facebook pages based on an agreement on
          joint processing of personal data – Privacy Policy:
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
          • Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco,
          CA 94103, USA) – Privacy Policy: https://twitter.com/privacy, opt-out:
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
          On the basis of our legitimate interests (ie interest in the analysis,
          optimization and economic operation of our online offer within the
          meaning of Art. 6 Para. 1 lit. f. GDPR), we use social plugins
          (“plugins”) from the social network facebook.com, which operated by
          Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbor,
          Dublin 2, Ireland („Facebook“). The plugins can display interaction
          elements or content (e.g. videos, graphics or text contributions) and
          can be recognized by one of the Facebook logos (white “f” on a blue
          tile, the terms “like”, “like” or a “thumbs up” sign ) or are marked
          with the addition „Facebook Social Plugin“. The list and the
          appearance of the Facebook social plugins can be viewed here:
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
          Facebook servers. The content of the plug-in is transmitted directly
          from Facebook to the user’s device, which integrates it into the
          online offer. In doing so, user profiles can be created from the
          processed data. We therefore have no influence on the amount of data
          that Facebook collects with the help of this plugin and therefore
          informs users according to our level of knowledge.
          <br />
          <br />
          By integrating the plugins, Facebook receives the information that a
          user has called up the corresponding page of the online offer. If the
          user is logged into Facebook, Facebook can assign the visit to his
          Facebook account. When users interact with the plugins, for example by
          pressing the Like button or making a comment, the relevant information
          is transmitted directly from your device to Facebook and stored there.
          If a user is not a member of Facebook, there is still the possibility
          that Facebook will find out his IP address and save it. According to
          Facebook, only an anonymized IP address is saved in Germany.
          <br />
          <br />
          The purpose and scope of the data collection and the further
          processing and use of the data by Facebook as well as the related
          rights and setting options to protect the privacy of users can be
          found in Facebook’s data protection information:
          https://www.facebook.com/about/privacy/.
          <br />
          <br />
          If a user is a Facebook member and does not want Facebook to collect
          data about him through this online offer and link it to his member
          data stored on Facebook, he must log out of Facebook before using our
          online offer and delete his cookies. Further settings and
          contradictions to the use of data for advertising purposes are
          possible within the Facebook profile settings:
          https://www.facebook.com/settings?tab=ads or via the US website
          http://www.aboutads.info / choices / or the EU page
          http://www.youronlinechoices.com/. The settings are
          platform-independent, i.e. they are adopted for all devices such as
          desktop computers or mobile devices.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Twitter</h2>
          Functions and contents of the Twitter service, offered by Twitter
          Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, can
          be integrated into our online offer. This can include, for example,
          content such as images, videos or texts and buttons with which users
          can express their favor with regard to the content, subscribe to the
          authors of the content or our contributions. If the users are members
          of the Twitter platform, Twitter can assign the above-mentioned
          content and functions to the profiles of the users there. Twitter is
          certified under the Privacy Shield Agreement and thus offers a
          guarantee to comply with European data protection law
          (https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active).
          Data protection declaration: https://twitter.com/de/privacy, Opt-Out:
          https://twitter.com/personalization.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Instagram</h2>
          Functions and contents of the Instagram service, offered by Instagram
          Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA, can be integrated
          into our online offer. This can include, for example, content such as
          images, videos or texts and buttons with which users can express their
          liking for the content, subscribe to the authors of the content or our
          contributions. If the users are members of the Instagram platform,
          Instagram can assign the above-mentioned content and functions to the
          profiles of the users there. Instagram privacy policy:
          http://instagram.com/about/legal/privacy/.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Pinterest</h2>
          The controller has integrated components from Pinterest Inc. on this
          website. Pinterest is a so-called social network. A social network is
          an Internet-based social meeting place, an online community that
          usually allows users to communicate with each other and interact in
          virtual space. A social network can serve as a platform for sharing
          views and experiences, or allows the Internet community to provide
          personal or business information. Among other things, Pinterest
          enables users of the social network to publish picture collections and
          individual pictures as well as descriptions on virtual pinboards
          (so-called pinnings), which in turn can be shared by other users
          (so-called repinnen) or commented on.
          <br />
          <br />
          Pinterest’s operating company is Pinterest Inc., 808 Brannan St., San
          Francisco, CA 94103, USA.
          <br />
          <br />
          Each time one of the individual pages of this website is called up by
          the controller and a Pinterest component (Pinterest plug-in) has been
          integrated, the Internet browser on the information technology system
          of the person concerned is automatically pinterested Component causes
          a representation of the corresponding Pinterest component of Pinterest
          to be downloaded. More information about Pinterest is available at
          https://pinterest.com/. As part of this technical process, Pinterest
          is aware of which specific bottom of our website is visited by the
          person concerned.
          <br />
          <br />
          If the data subject is logged in to Pinterest at the same time,
          Pinterest recognizes with each visit of our website by the data
          subject and during the entire duration of the respective stay on our
          website, which specific underside of our website visited the data
          subject. This information is collected by the Pinterest component and
          assigned by Pinterest to the affected Pinterest account of the data
          subject. If the person concerned activates a Pinterest button
          integrated on our website, Pinterest assigns this information to the
          personal Pinterest user account of the person concerned and saves this
          personal data.
          <br />
          <br />
          Pinterest always receives information from the Pinterest component
          that the data subject has visited our website if the data subject is
          simultaneously logged in to Pinterest at the time of access to our
          website; this happens regardless of whether or not the affected person
          clicks on the Pinterest component. If such a transfer of this
          information to Pinterest by the person concerned is not intended, it
          can prevent the transfer by logging out of your Pinterest account
          before calling our website.
          <br />
          <br />
          Pinterest’s Privacy Policy, available at
          https://about.pinterest.com/privacy-policy, provides insight into the
          collection, processing and use of personal information by Pinterest.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">YouTube</h2>
          The controller has integrated YouTube components on this website.
          YouTube is an internet video portal that allows video publishers to
          freely watch video clips and other users for free viewing, rating and
          commenting. YouTube allows the publication of all types of videos, so
          that both complete film and television broadcasts, but also music
          videos, trailers or user-made videos via the Internet portal are
          available.
          <br />
          <br />
          YouTube’s operating company is YouTube, LLC, 901 Cherry Ave., San
          Bruno, CA 94066, USA. YouTube, LLC is a subsidiary of Google Inc.,
          1600 Amphitheater Pkwy, Mountain View, CA 94043-1351, USA.
          <br />
          <br />
          Each visit to one of the pages of this website operated by the
          controller and incorporating a YouTube component (YouTube video)
          automatically causes the Internet browser on the subject’s information
          technology system to be represented by the respective YouTube
          component to download an illustration of the corresponding YouTube
          component from YouTube. More information about YouTube can be found at
          https://www.youtube.com/yt/about/en/. As part of this technical
          process, YouTube and Google will be aware of which specific bottom of
          our site the person is visiting.
          <br />
          <br />
          If the person is logged in to YouTube at the same time, YouTube
          recognizes by calling a sub-page that contains a YouTube video, which
          specific bottom of our website the affected person visits. This
          information will be collected by YouTube and Google and associated
          with the affected person’s YouTube account.
          <br />
          <br />
          YouTube and Google will always receive information through the YouTube
          component that the data subject has visited our website if the data
          subject is simultaneously logged into YouTube at the time of access to
          our website; this happens regardless of whether the person clicks on a
          YouTube video or not. If such information is not intended to be passed
          on to YouTube and Google by the person concerned, the latter may
          prevent the transmission from logging out of their YouTube account
          before calling our website.
          <br />
          <br />
          YouTube’s privacy policy, available at
          https://www.google.com/intl/en/policies/privacy/, identifies the
          collection, processing, and use of personally identifiable information
          by YouTube and Google.
          <h2 className="text-2xl font-bold mt-10 md:mt-8">Tumblr</h2>
          Our pages use buttons of the service Tumblr. Provider is Tumblr, Inc.,
          35 East 21st St, 10th Floor, New York, NY 10010, USA. These buttons
          allow you to share a post or page with Tumblr or to follow the
          provider on Tumblr. When you visit one of our websites using the
          Tumblr button, the browser establishes a direct connection to the
          Tumblr servers. We have no control over the amount of data that Tumblr
          collects and transmits using this plug-in. According to the current
          state, the IP address of the user as well as the URL of the respective
          website are transmitted.
          <br />
          <br />
          Further information can be found in the Tumblr privacy policy at
          http://www.tumblr.com/policy/en/privacy.
          <br />
          <br />
          If you have questions about our privacy policy, please contact us via
          the contact form or via
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
        <RadialGradient className="bg-green" variant="bottom-right" />
      </section>
    </Layout>
  );
}
