interface InlineTextSvgProps {
  variant:
    | "ship"
    | "pen"
    | "shipGlobe"
    | "surprise"
    | "marker"
    | "heads"
    | "head"
    | "headPen";
}
export function InlineTextSvg({ variant }: InlineTextSvgProps) {
  switch (variant) {
    case "ship":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40.915"
          height="23.446"
          viewBox="0 0 40.915 23.446"
        >
          <g
            id="Group_217"
            data-name="Group 217"
            transform="translate(-1024.123 -462.128)"
          >
            <g
              id="Group_96"
              data-name="Group 96"
              transform="translate(1024.123 454.695)"
            >
              <g
                id="Group_92"
                data-name="Group 92"
                transform="translate(24.948 0)"
              >
                <g
                  id="Group_91"
                  data-name="Group 91"
                  transform="translate(0 7.944)"
                >
                  <path
                    id="Path_188"
                    data-name="Path 188"
                    d="M-2542.751,2885.784l.353,2.734-3.485.775-.574-3.525-5.634-.025,1.623,9.14,9.945-1.673-.672-7.419Zm-5.051,3.626-1.838.108-.352-2.723,1.95-.251Z"
                    transform="translate(2552.615 -2881.372)"
                    fill="#372152"
                  />
                  <path
                    id="Path_189"
                    data-name="Path 189"
                    d="M-2554.129,2869.182l10.988.161-.325-3.584-11.019,1.422Z"
                    transform="translate(2554.484 -2865.76)"
                    fill="#372152"
                  />
                </g>
              </g>
              <path
                id="Path_192"
                data-name="Path 192"
                d="M-2663.322,2912.175l2.26,7.277,33.229-1.536,5.425-9.864Z"
                transform="translate(2663.322 -2888.573)"
                fill="#80d7b6"
              />
              <g
                id="Group_93"
                data-name="Group 93"
                transform="translate(1.253 16.5)"
              >
                <path
                  id="Path_193"
                  data-name="Path 193"
                  d="M-2599.116,2895.345l4.426-.894,3.482,1.545-2.863,2.493-4.343.5"
                  transform="translate(2611.907 -2894.449)"
                  fill="#f1a8ba"
                />
                <path
                  id="Path_194"
                  data-name="Path 194"
                  d="M-2567.918,2899.316l.188,1.26.9-.779Z"
                  transform="translate(2587.533 -2898.25)"
                  fill="#5db19c"
                />
                <path
                  id="Path_195"
                  data-name="Path 195"
                  d="M-2578.883,2894.451l.359.159-.294.279.366.2-.3.259.366.207-.292.285.361.179-.287.273.353.169-.287.266.355.193-.277.286.35.206-.3.266.365.2-.3.261.291.154-.224.194-.6-.335"
                  transform="translate(2596.1 -2894.449)"
                  fill="#5db19c"
                />
                <rect
                  id="Rectangle_67"
                  data-name="Rectangle 67"
                  width="4.085"
                  height="17.424"
                  transform="translate(17.232 0) rotate(81.501)"
                  fill="#5db19c"
                />
              </g>
              <g
                id="Group_94"
                data-name="Group 94"
                transform="translate(2.627 11.758)"
              >
                <path
                  id="Path_196"
                  data-name="Path 196"
                  d="M-2592.833,2873.665l4.426-.895,3.482,1.546-2.863,2.493-4.343.5"
                  transform="translate(2605.624 -2872.768)"
                  fill="#f1a8ba"
                />
                <path
                  id="Path_197"
                  data-name="Path 197"
                  d="M-2561.635,2877.635l.188,1.261.9-.78Z"
                  transform="translate(2581.25 -2876.569)"
                  fill="#55a08b"
                />
                <path
                  id="Path_198"
                  data-name="Path 198"
                  d="M-2572.6,2872.77l.359.16-.293.279.365.2-.3.259.366.207-.293.285.362.179-.287.274.353.169-.287.266.355.194-.277.285.35.206-.3.266.365.2-.3.261.291.153-.223.195-.6-.336"
                  transform="translate(2589.816 -2872.768)"
                  fill="#55a08b"
                />
                <rect
                  id="Rectangle_68"
                  data-name="Rectangle 68"
                  width="4.085"
                  height="17.424"
                  transform="translate(17.232 0) rotate(81.501)"
                  fill="#80d7b6"
                />
              </g>
              <g
                id="Group_95"
                data-name="Group 95"
                transform="translate(0.173 7.433)"
              >
                <path
                  id="Path_199"
                  data-name="Path 199"
                  d="M-2604.052,2853.89l4.426-.894,3.482,1.545-2.862,2.493-4.343.5"
                  transform="translate(2616.843 -2852.994)"
                  fill="#f1a8ba"
                />
                <path
                  id="Path_200"
                  data-name="Path 200"
                  d="M-2572.854,2857.861l.189,1.261.895-.78Z"
                  transform="translate(2592.469 -2856.795)"
                  fill="#5db19c"
                />
                <path
                  id="Path_201"
                  data-name="Path 201"
                  d="M-2583.819,2853l.359.159-.293.278.365.2-.3.26.366.207-.293.285.362.179-.287.274.353.17-.287.266.355.194-.277.286.35.205-.295.266.365.2-.3.262.291.153-.223.195-.6-.336"
                  transform="translate(2601.036 -2852.994)"
                  fill="#5db19c"
                />
                <rect
                  id="Rectangle_69"
                  data-name="Rectangle 69"
                  width="4.085"
                  height="17.424"
                  transform="translate(17.232 0) rotate(81.501)"
                  fill="#5db19c"
                />
              </g>
            </g>
          </g>
        </svg>
      );

    case "pen":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30.891"
          height="35.666"
          viewBox="0 0 30.891 35.666"
        >
          <g
            id="Group_322"
            data-name="Group 322"
            transform="matrix(0.766, -0.643, 0.643, 0.766, 15428.445, 283.285)"
          >
            <path
              id="Path_326"
              data-name="Path 326"
              d="M-11587.5-10113.729l1.458-7.595-4.1-7.764-5.828,6.988-.5,7.389"
              transform="translate(-44.621 -0.001)"
              fill="#d592a2"
            />
            <path
              id="Path_327"
              data-name="Path 327"
              d="M-11511.577-10126.684l-3.1-.233,1.821-2.17Z"
              transform="translate(-121.909 -0.001)"
              fill="#f1a8ba"
            />
            <path
              id="Path_328"
              data-name="Path 328"
              d="M-11577.456-9980.944l-.437-.683-.641.6-.544-.691-.592.605-.553-.691-.656.6-.483-.687-.628.589-.461-.671-.61.588-.521-.673-.658.57-.549-.661-.608.605-.533-.691-.6.607-.411-.554-.445.457.9,1.139"
              transform="translate(-53.208 -140.38)"
              fill="#f1a8ba"
            />
            <path
              id="Path_329"
              data-name="Path 329"
              d="M-11643.7-9942.781l9.933.746,3.1-27.89-9.932-.746Z"
              transform="translate(0.001 -151.43)"
              fill="#f1a8ba"
            />
            <path
              id="Path_330"
              data-name="Path 330"
              d="M-11563.957-9823.393l2.062.154,2.078-19.371-2.061-.154Z"
              transform="translate(-75.344 -273.695)"
              fill="#d592a2"
            />
          </g>
        </svg>
      );
    case "shipGlobe":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.954"
          height="32.539"
          viewBox="0 0 26.954 32.539"
        >
          <g
            id="Group_75"
            data-name="Group 75"
            transform="translate(-902.632 -963.549)"
          >
            <g
              id="Group_20"
              data-name="Group 20"
              transform="translate(917.828 963.549)"
            >
              <path
                id="Path_15"
                data-name="Path 15"
                d="M831.245,775.181l0,.873-1.125.106-.042-1.13-1.769-.23.15,2.936,3.19-.134.081-2.358Zm-1.729.94-.582-.038,0-.87.623,0Z"
                transform="translate(-828.263 -773.84)"
                fill="#6642bb"
              />
              <path
                id="Path_16"
                data-name="Path 16"
                d="M828.254,773.656l3.446.483.039-1.139-3.518.013Z"
                transform="translate(-828.221 -773)"
                fill="#6642bb"
              />
            </g>
            <path
              id="Path_17"
              data-name="Path 17"
              d="M810.993,780.467l.826,2.658,12.136-.561,1.981-3.6Z"
              transform="translate(97.645 187.768)"
              fill="#ff481d"
            />
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="13.477"
              cy="13.477"
              r="13.477"
              transform="translate(902.632 969.134)"
              fill="#6642bb"
            />
          </g>
        </svg>
      );
    case "surprise":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32.722"
          height="29.31"
          viewBox="0 0 32.722 29.31"
        >
          <g
            id="Group_698"
            data-name="Group 698"
            transform="translate(14546.552 -2392.297)"
          >
            <rect
              id="Rectangle_313"
              data-name="Rectangle 313"
              width="22"
              height="13"
              transform="translate(-14541 2408.607)"
              fill="#e52663"
            />
            <rect
              id="Rectangle_314"
              data-name="Rectangle 314"
              width="2.594"
              height="10.4"
              transform="translate(-14546.552 2403.963) rotate(-45)"
              fill="#e52663"
            />
            <rect
              id="Rectangle_315"
              data-name="Rectangle 315"
              width="2.878"
              height="10.4"
              transform="translate(-14515.864 2401.928) rotate(45)"
              fill="#e52663"
            />
            <rect
              id="Rectangle_316"
              data-name="Rectangle 316"
              width="2.167"
              height="3.033"
              transform="translate(-14540.118 2400.767) rotate(-19)"
              fill="#ff481d"
            />
            <rect
              id="Rectangle_317"
              data-name="Rectangle 317"
              width="1.733"
              height="2.455"
              transform="translate(-14519.595 2398.334) rotate(42)"
              fill="#80d7b6"
            />
            <rect
              id="Rectangle_318"
              data-name="Rectangle 318"
              width="2.167"
              height="3.033"
              transform="translate(-14536.395 2393.829) rotate(-45)"
              fill="#f1a8ba"
            />
            <circle
              id="Ellipse_4"
              data-name="Ellipse 4"
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="translate(-14532 2398.607)"
              fill="#80d7b6"
            />
            <circle
              id="Ellipse_5"
              data-name="Ellipse 5"
              cx="1"
              cy="1"
              r="1"
              transform="translate(-14525 2393.607)"
              fill="#6048b4"
            />
            <circle
              id="Ellipse_6"
              data-name="Ellipse 6"
              cx="1"
              cy="1"
              r="1"
              transform="translate(-14528 2402.607)"
              fill="#f1a8ba"
            />
            <circle
              id="Ellipse_7"
              data-name="Ellipse 7"
              cx="1"
              cy="1"
              r="1"
              transform="translate(-14536 2405.607)"
              fill="#e52663"
            />
            <path
              id="Path_474"
              data-name="Path 474"
              d="M-14465.725,2424.578l-1.267,1.268,1.267,1.268-1.267,1.267,1.267,1.268"
              transform="translate(-68.069 -26.763)"
              fill="none"
              stroke="#80d7b6"
              strokeWidth="1"
            />
            <path
              id="Path_475"
              data-name="Path 475"
              d="M-14465.725,2424.578l-1.267,1.268,1.267,1.268-1.267,1.267,1.267,1.268"
              transform="translate(-57.494 -23.452)"
              fill="none"
              stroke="#6048b4"
              strokeWidth="1"
            />
            <path
              id="Path_476"
              data-name="Path 476"
              d="M-14465.725,2424.578l-1.267,1.268,1.267,1.268-1.267,1.267"
              transform="translate(-61.538 -30.905)"
              fill="none"
              stroke="#ec5733"
              strokeWidth="1"
            />
            <path
              id="Path_477"
              data-name="Path 477"
              d="M-14465.725,2424.578l-1.267,1.268,1.267,1.268-1.267,1.267"
              transform="translate(-64.138 -20.648)"
              fill="none"
              stroke="#e7abba"
              strokeWidth="1"
            />
          </g>
        </svg>
      );
    case "marker":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29.069"
          height="30.188"
          viewBox="0 0 29.069 30.188"
        >
          <g
            id="Group_350"
            data-name="Group 350"
            transform="translate(57.02 680.224) rotate(137)"
          >
            <rect
              id="Rectangle_186"
              data-name="Rectangle 186"
              width="5.891"
              height="4.088"
              transform="translate(-425.361 529.346)"
              fill="#80d7b6"
            />
            <path
              id="Path_337"
              data-name="Path 337"
              d="M-340.593,1090.04h-9.426l1.768,5.595h5.891Z"
              transform="translate(-77.11 -566.289)"
              fill="#6642bb"
            />
            <path
              id="Path_338"
              data-name="Path 338"
              d="M-396.1,557.151h-12.961l1.768,20.082h9.426Z"
              transform="translate(-19.834 -53.483)"
              fill="#80d7b6"
            />
            <rect
              id="Rectangle_187"
              data-name="Rectangle 187"
              width="14.245"
              height="2.094"
              transform="translate(-429.508 501.574)"
              fill="#65b295"
            />
          </g>
        </svg>
      );
    case "heads":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37.148"
          height="22.076"
          viewBox="0 0 37.148 22.076"
        >
          <g
            id="Group_701"
            data-name="Group 701"
            transform="translate(-1721 -3665.634)"
          >
            <g
              id="Group_699"
              data-name="Group 699"
              transform="translate(1721 3665.634)"
            >
              <path
                id="Path_179"
                data-name="Path 179"
                d="M-3292.063,2810.727v4.205l-5.424.491-.181-5.446-8.518-1.137.67,14.146,15.373-.59.432-11.356Zm-8.349,4.5-2.8-.2v-4.188h3Z"
                transform="translate(3306.402 -2804.277)"
                fill="#f1a8ba"
              />
              <path
                id="Path_180"
                data-name="Path 180"
                d="M-3306.837,2795.1l16.593,2.391.209-5.486h-16.948Z"
                transform="translate(3306.983 -2792)"
                fill="#f1a8ba"
              />
            </g>
            <g
              id="Group_700"
              data-name="Group 700"
              transform="translate(1741.2 3669)"
            >
              <path
                id="Path_179-2"
                data-name="Path 179"
                d="M-3292.063,2810.727v4.205l-5.424.491-.181-5.446-8.518-1.137.67,14.146,15.373-.59.432-11.356Zm-8.349,4.5-2.8-.2v-4.188h3Z"
                transform="translate(3306.402 -2804.277)"
                fill="#f1a8ba"
              />
              <path
                id="Path_180-2"
                data-name="Path 180"
                d="M-3306.837,2795.1l16.593,2.391.209-5.486h-16.948Z"
                transform="translate(3306.983 -2792)"
                fill="#f1a8ba"
              />
            </g>
          </g>
        </svg>
      );
    case "head":
      return (
        <svg
          id="Group_87"
          data-name="Group 87"
          xmlns="http://www.w3.org/2000/svg"
          width="20.137"
          height="22.229"
          viewBox="0 0 20.137 22.229"
        >
          <path
            id="Path_179"
            data-name="Path 179"
            d="M-3289.406,2811.081v5l-6.445.584-.215-6.47-10.12-1.352.8,16.807,18.265-.7.513-13.492Zm-9.92,5.347-3.329-.232v-4.976h3.563Z"
            transform="translate(3306.442 -2803.418)"
            fill="#e52663"
          />
          <path
            id="Path_180"
            data-name="Path 180"
            d="M-3306.809,2795.678l19.715,2.84.248-6.518h-20.137Z"
            transform="translate(3306.983 -2792)"
            fill="#e52663"
          />
        </svg>
      );
    case "headPen":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.957"
          height="33.164"
          viewBox="0 0 23.957 33.164"
        >
          <g
            id="Group_702"
            data-name="Group 702"
            transform="matrix(0.966, 0.259, -0.259, 0.966, 7.72, 0)"
          >
            <path
              id="Path_187"
              data-name="Path 187"
              d="M-2551.5,2859.269l-2.983-16.808,6.152-13.021,9.167,11.044,1.49,16.458"
              transform="translate(2554.484 -2829.439)"
              fill="#f4d642"
            />
            <g
              id="Group_91"
              data-name="Group 91"
              transform="translate(0 11.045)"
            >
              <path
                id="Path_188"
                data-name="Path 188"
                d="M-2539.106,2885.8l.491,3.8-4.846,1.077-.8-4.9-7.832-.034,2.256,12.708,13.826-2.326-.935-10.315Zm-7.022,5.042-2.556.15-.488-3.785,2.71-.35Z"
                transform="translate(2552.82 -2879.667)"
                fill="#ff481d"
              />
              <path
                id="Path_189"
                data-name="Path 189"
                d="M-2553.99,2870.518l15.277.224-.451-4.982-15.319,1.978Z"
                transform="translate(2554.484 -2865.76)"
                fill="#ff481d"
              />
            </g>
            <path
              id="Path_190"
              data-name="Path 190"
              d="M-2540.548,2833.491l4.78-.6-2.866-3.453Z"
              transform="translate(2544.785 -2829.439)"
              fill="#ff481d"
            />
            <path
              id="Path_191"
              data-name="Path 191"
              d="M-2554.484,2865.632l.634-1.342,1.027,1.135.8-1.364.953,1.144.814-1.365,1.05,1.132.708-1.352,1.009,1.11.672-1.32.981,1.107.763-1.326,1.055,1.072.808-1.306.978,1.141.784-1.362.962,1.143.6-1.086.716.861-1.324,2.244"
              transform="translate(2554.484 -2852.61)"
              fill="#ff481d"
            />
          </g>
        </svg>
      );

    default:
      break;
  }
}
