import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import { CaptainCrateSvg } from "../elements/svg";

export function SubscribeNowSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section className="py-16 md:py-28 px-10 bg-subscribe-now text-center bg-cover">
      <h3 className="font-display text-white text-2xl md:text-5xl mb-10">
        {t("sections.subscribe_now.title")}
      </h3>

      <div className="md:flex md:space-x-32 justify-center align-center">
        <div className="bg-purple-dark text-center text-white flex flex-col pt-4 pb-10 rounded">
          <CaptainCrateSvg variant="plus" className="self-center" />
          <Parallax offset={-30}>
            <Image
              src="/subscribe-now/1-month-box.png"
              width="532"
              height="280"
            />
          </Parallax>

          <div className="flex align-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180.866"
              height="95.561"
              viewBox="0 0 180.866 95.561"
            >
              <g
                id="Gruppe_226"
                data-name="Gruppe 226"
                transform="translate(0 1.271)"
              >
                <g id="Ebene_1" data-name="Ebene 1" transform="translate(0 0)">
                  <g
                    id="Gruppe_187"
                    data-name="Gruppe 187"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Pfad_278"
                      data-name="Pfad 278"
                      d="M505.915,201.362,501.5,187.344l32.9-17.606,26.026,29.22-42.556,41.213,40.966,1.995v16.388L501.085,257.2l-1.528-17.177,41.259-40.277-8.788-10.859Z"
                      transform="translate(-498.428 -168.373)"
                      fill="#fff"
                    />
                    <path
                      id="Pfad_279"
                      data-name="Pfad 279"
                      d="M554.3,252.884l-59.835-1.4-1.66-18.66,40.919-39.945-7.624-9.421L499.636,196.1l-5.061-16.073,34.448-18.436,27.291,30.64-41.5,40.192,39.494,1.923Zm-57.84-3.531,55.663,1.3V236.419l-42.438-2.067L553.3,192.119l-24.762-27.8-31.345,16.776,3.767,11.962,25.757-12.3,9.951,12.3-41.6,40.609Z"
                      transform="translate(-492.81 -161.59)"
                      fill="#fff"
                    />
                  </g>
                  <g
                    id="Gruppe_189"
                    data-name="Gruppe 189"
                    transform="translate(138.37 40.507)"
                  >
                    <path
                      id="Pfad_282"
                      data-name="Pfad 282"
                      d="M1368.723,424.424l15-.685-.161-7.553-14.2.673.051-3.3,22.165-1.235-.548-8.771-29.9,2.885-3.707,37.208,36.121,1.57-.187-8.761-25.365-.79Z"
                      transform="translate(-1351.054 -403.555)"
                      fill="#fff"
                    />
                    <path
                      id="Pfad_283"
                      data-name="Pfad 283"
                      d="M1337.331,483.029l-17.252.889-.73,6.747,17.334-.071"
                      transform="translate(-1319.349 -469.724)"
                      fill="#fff"
                    />
                    <path
                      id="Pfad_284"
                      data-name="Pfad 284"
                      d="M1364.274,537.985l-30.177.885-1.276,6.714,30.32-.071"
                      transform="translate(-1330.565 -515.48)"
                      fill="#fff"
                    />
                  </g>
                  <path
                    id="Pfad_5161"
                    data-name="Pfad 5161"
                    d="M937.562,967.368l-15.718-1.42.815-16.78H904.706v15.485l-9.787-.808,10.42-46-16.914-3.462-12.774,65.224,29.055,1.748v28.589h15.67l1.468-27.457,14.428.987Z"
                    transform="translate(-806.863 -915.655)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p className="mt-3">
            {t("sections.subscribe_now.subscriptions.0.payment_cycle")}
          </p>
          <Button
            className="bg-orange text-white mb-4 mt-2 md:mt-5"
            href={`https://shop.upcrate.art${
              lang === "en" ? "" : "/de"
            }/product/subscription-1-month/`}
          >
            {t("sections.subscribe_now.subscriptions.0.cta")}
          </Button>
          <p>{t("sections.subscribe_now.subscriptions.0.dollar_estimation")}</p>
        </div>
        </div>


      <div className="py-2 px-4 bg-white inline-block text-purple-dark mt-16 text-xl">
        {t("sections.subscribe_now.cancellation_text")}
      </div>
    </section>
  );
}
