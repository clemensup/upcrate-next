import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";
import { CaptainCrateSvg } from "../elements/svg";

export function SubscribeNowSection() {
  const { t } = useTranslation("common");

  return (
    <section className="py-16 md:py-28 px-10 bg-subscribe-now text-center bg-cover">
      <h3 className="font-display text-white text-2xl md:text-5xl mb-10">
        {t("sections.subscribe_now.title")}
      </h3>

      <div className="md:flex gap-32 justify-center align-center">
        <div className="bg-purple-dark text-center text-white flex flex-col pt-4 pb-10 rounded">
          <CaptainCrateSvg variant="plus" className="self-center" />

          <Image
            src="/subscribe-now/1-month-box.png"
            width="532"
            height="280"
          />

          <div className="flex align-center justify-center">
            <svg
              id="Group_226"
              data-name="Group 226"
              xmlns="http://www.w3.org/2000/svg"
              width="180.866"
              height="91.293"
              viewBox="0 0 180.866 91.293"
            >
              <g id="Ebene_1" data-name="Ebene 1" transform="translate(0 0)">
                <g
                  id="Group_187"
                  data-name="Group 187"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_278"
                    data-name="Path 278"
                    d="M505.915,201.362,501.5,187.344l32.9-17.606,26.026,29.22-42.556,41.213,40.966,1.995v16.388L501.085,257.2l-1.528-17.177,41.259-40.277-8.788-10.859Z"
                    transform="translate(-498.428 -168.373)"
                    fill="#fff"
                  />
                  <path
                    id="Path_279"
                    data-name="Path 279"
                    d="M554.3,252.884l-59.835-1.4-1.66-18.66,40.919-39.945-7.624-9.421L499.636,196.1l-5.061-16.073,34.448-18.436,27.291,30.64-41.5,40.192,39.494,1.923Zm-57.84-3.531,55.663,1.3V236.419l-42.438-2.067L553.3,192.119l-24.762-27.8-31.345,16.776,3.767,11.962,25.757-12.3,9.951,12.3-41.6,40.609Z"
                    transform="translate(-492.81 -161.59)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="Group_188"
                  data-name="Group 188"
                  transform="translate(67.968 0.686)"
                >
                  <path
                    id="Path_280"
                    data-name="Path 280"
                    d="M911.921,203.687l-4.414-14.018,32.9-15.932,26.026,30.895-42.556,39.539,40.966-1.353V259.2l-57.749,2-1.528-17.177,41.259-38.6-8.788-12.533Z"
                    transform="translate(-904.432 -172.389)"
                    fill="#fff"
                  />
                  <path
                    id="Path_281"
                    data-name="Path 281"
                    d="M900.474,255.62l-1.666-18.732,40.956-38.32-7.744-11.045-26.4,10.919L900.563,182.4l34.5-16.71,27.239,32.334-41.183,38.263,39.181-1.294v18.564Zm.6-17.868,1.39,15.622,55.668-1.925V237.238l-42.75,1.412,43.928-40.814-24.813-29.455L903.2,183.535l3.775,11.989L932.8,184.845l9.831,14.021Z"
                    transform="translate(-898.808 -165.685)"
                    fill="#fff"
                  />
                </g>
                <g
                  id="Group_189"
                  data-name="Group 189"
                  transform="translate(138.37 40.507)"
                >
                  <path
                    id="Path_282"
                    data-name="Path 282"
                    d="M1368.723,424.424l15-.685-.161-7.553-14.2.673.051-3.3,22.165-1.235-.548-8.771-29.9,2.885-3.707,37.208,36.121,1.57-.187-8.761-25.365-.79Z"
                    transform="translate(-1351.054 -403.555)"
                    fill="#fff"
                  />
                  <path
                    id="Path_283"
                    data-name="Path 283"
                    d="M1337.331,483.029l-17.252.889-.73,6.747,17.334-.071"
                    transform="translate(-1319.349 -469.724)"
                    fill="#fff"
                  />
                  <path
                    id="Path_284"
                    data-name="Path 284"
                    d="M1364.274,537.985l-30.177.885-1.276,6.714,30.32-.071"
                    transform="translate(-1330.565 -515.48)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </div>
          <p>{t("sections.subscribe_now.subscriptions.0.payment_cycle")}</p>
          <Button
            className="bg-orange text-white mb-4 mt-2 md:mt-5"
            href="https://shop.upcrate.art/product/subscription-1-month/"
          >
            {t("sections.subscribe_now.subscriptions.0.cta")}
          </Button>
          <p>{t("sections.subscribe_now.subscriptions.0.dollar_estimation")}</p>
        </div>

        <div className="bg-purple-dark text-center text-white flex flex-col pt-4 pb-10 rounded mt-16 md:mt-0">
          <CaptainCrateSvg variant="plus" className="self-center" />

          <Image
            src="/subscribe-now/3-month-boxes.png"
            width="532"
            height="280"
          />

          <div className="flex align-center justify-center">
            <svg
              id="Ebene_4"
              data-name="Ebene 4"
              xmlns="http://www.w3.org/2000/svg"
              width="180.716"
              height="100.935"
              viewBox="0 0 180.716 100.935"
            >
              <g
                id="Group_190"
                data-name="Group 190"
                transform="translate(139.321 55.78)"
              >
                <path
                  id="Path_285"
                  data-name="Path 285"
                  d="M1340.636,1245.5l14.616-.667-.157-7.357-13.827.655.05-3.213,21.591-1.2-.534-8.544-29.129,2.81-3.61,36.244,35.185,1.529-.183-8.534-24.708-.77Z"
                  transform="translate(-1323.426 -1225.169)"
                  fill="#fff"
                />
                <path
                  id="Path_286"
                  data-name="Path 286"
                  d="M1309.071,1304.644l-16.805.866-.711,6.572,16.885-.07"
                  transform="translate(-1291.555 -1291.684)"
                  fill="#fff"
                />
                <path
                  id="Path_287"
                  data-name="Path 287"
                  d="M1335.666,1359.6l-29.4.862-1.243,6.54,29.534-.069"
                  transform="translate(-1302.83 -1337.678)"
                  fill="#fff"
                />
              </g>
              <path
                id="Path_288"
                data-name="Path 288"
                d="M486.087,893.152l-12.031-10.041-36.852,42.2,1.631,54.636,59.719,4.1,4.394-46.584L465.4,917.94Zm.269,53.345-1.968,19.239-29.882-.418V930.994h0Z"
                transform="translate(-437.204 -883.111)"
                fill="#fff"
              />
              <path
                id="Path_289"
                data-name="Path 289"
                d="M937.562,967.368l-15.718-1.42.815-16.78H904.706v15.485l-9.787-.808,10.42-46-16.914-3.462-12.774,65.224,29.055,1.748v28.589h15.67l1.468-27.457,14.428.987Z"
                transform="translate(-804.152 -909.284)"
                fill="#fff"
              />
            </svg>
          </div>
          <p>{t("sections.subscribe_now.subscriptions.1.payment_cycle")}</p>
          <Button
            className="bg-pink text-white mb-4 mt-2 md:mt-5"
            href="https://shop.upcrate.art/product/subscription-3-months/"
          >
            {t("sections.subscribe_now.subscriptions.1.cta")}
          </Button>
          <p>{t("sections.subscribe_now.subscriptions.1.dollar_estimation")}</p>
        </div>
      </div>
    </section>
  );
}
