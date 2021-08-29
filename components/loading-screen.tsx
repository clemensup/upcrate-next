import { motion } from "framer-motion";
import { getRandomInt } from "../utils/get-random-int";
import { RadialGradient } from "./elements/radial-gradient";

const colors = ["pink", "red", "purple", "green", "orange"];

export function LoadingScreen() {
  const randomBg = () => colors[getRandomInt(0, colors.length - 1)];

  return (
    <div
      className={`w-full h-full bg-${randomBg()} flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 relative`}
      style={{ height: "100vh", position: "fixed" }}
    >
      <div className="max-w-4xl flex flex-col justify-center items-center p-5 relative">
        <div className="z-10 flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="656"
            height="290"
            viewBox="0 0 656 290"
          >
            <g id="Group_925" transform="translate(-632 -420)">
              <g id="Group_693" transform="translate(746 462.415)">
                <path
                  id="Path_416"
                  d="M-5660.485,1896.268l-1.863,30.781-18.059,2.357-.294-32.543-14.37-.72,2.539,44.53,29.491-1.855-.317,5.376-1.065,18.072-24.713,3.083-1.218,11.354,39.65-2.676,1.08-30.279h.016l.219-6.59.155-4.365h-.01l1.253-35.864Z"
                  transform="translate(6059.479 -1767.15)"
                  fill="#372152"
                />
                <path
                  id="Path_417"
                  d="M-6364.908,1895.86l-30.486-1.195,2.059,46.4,13.489-.343-.747-32.715,14.533-.589Z"
                  transform="translate(6458.345 -1766.308)"
                  fill="#372152"
                />
                <path
                  id="Path_418"
                  d="M-5757.779,1862.508l-15.191.256-1.459-25.922-11.3.868.007,25.19-9.191.1.849,11.044,8.34.143.307,35.356,15.1-.612-2.007-34.515,14.05.24Z"
                  transform="translate(6116.341 -1733.375)"
                  fill="#372152"
                />
                <path
                  id="Path_419"
                  d="M-6209.6,1940.283l31.152-2.742.073,3.893,12.227-.062-1.381-46.815-11.717.06.1,5.394-30.852-4.485Zm28.915-29.719.567,16.146-17.354,1.64-.583-18.192Z"
                  transform="translate(6352.749 -1766.246)"
                  fill="#372152"
                />
                <path
                  id="Path_420"
                  d="M-6277.639,1665.043l-32.348,3.4-.861-30.12-12.5-.134,1.37,73.942,11.983.129-.016-5.518,31.78,2.542Zm-13.5,31.474-17.135-.6-.292-14.822,18.439-1.8Z"
                  transform="translate(6417.313 -1620.23)"
                  fill="#372152"
                />
                <path
                  id="Path_421"
                  d="M-6203.151,1699.23l-.2,47.793,40.687-2.244.422-43.67Zm29.26,35.661-17.588,1.386.168-23.959,17.419-.235Z"
                  transform="translate(6348.967 -1654.999)"
                  fill="#372152"
                />
                <path
                  id="Path_422"
                  d="M-6464.872,1894.886l-39.637,3.318.175,40.323,43.485,2.416-.776-13.835-28.925-1.783-.068-15.747,26.284-.83Z"
                  transform="translate(6520.49 -1766.434)"
                  fill="#372152"
                />
                <path
                  id="Path_423"
                  d="M-5586.447,1704.57l-30.344-1.189,2.048,46.18,12.772-.508-.742-32.562,15.118-.419Z"
                  transform="translate(6014.895 -1657.363)"
                  fill="#372152"
                />
                <path
                  id="Path_424"
                  d="M-5984.677,1944.29l-1.323-46.273-13.081.723.6,45.635Z"
                  transform="translate(6232.626 -1768.217)"
                  fill="#372152"
                />
                <path
                  id="Path_425"
                  d="M-6061.9,1864.663l-15.191.256L-6078.55,1839l-11.3.868.007,25.19-9.19.1.849,11.044,8.339.142.308,35.355,15.1-.612-2.007-34.515,14.05.24Z"
                  transform="translate(6289.551 -1734.602)"
                  fill="#372152"
                />
                <path
                  id="Path_426"
                  d="M-5916.908,1940.821l8.264-43.54-12.534-.771-6.045,32.73-13.24,1.123-.812-33.977-11.875.82,1.189,46.339Z"
                  transform="translate(6206.466 -1767.288)"
                  fill="#372152"
                />
                <path
                  id="Path_427"
                  d="M-6050.5,1739.854l-15.2-14.893,14.291-14.015-7.694-10.782-15.627,15.948-15.5-15.184-8.6,8.337,15.408,15.712-14.612,14.912,8.337,8.6,14.952-14.663,13.458,13.723Z"
                  transform="translate(6289.433 -1655.531)"
                  fill="#372152"
                />
                <path
                  id="Path_428"
                  d="M-5794.974,1703.452l-41.174,1.891.764,45.27,40.612.942Zm-29.111,37.209-.339-24.272,17.532.236.17,24.114Z"
                  transform="translate(6139.828 -1657.403)"
                  fill="#372152"
                />
                <path
                  id="Path_429"
                  d="M-5912.825,1739.9l-.007-35.476-12.367-.218-.32,30.367-18.275,1.231-1.42-32.141-14.224-.213,4.055,43.907,29.591-1.133v22.261l-26.793-.248.525,12.228,39.227.226.016-29.952h.016l-.012-6.518,0-4.318Z"
                  transform="translate(6210.048 -1657.403)"
                  fill="#372152"
                />
                <path
                  id="Path_430"
                  d="M-5825.605,1941.939l.165-46.429-13.1-.616-.86,45.631Z"
                  transform="translate(6141.679 -1766.438)"
                  fill="#372152"
                />
                <path
                  id="Path_431"
                  d="M-6067.551,1630.4l-.357-10.749-16.813-2.246,1.322,27.923,30.345-1.164.853-22.415-4.643-.62v8.3Zm-5.774-.388-5.53-.386v-8.267h5.918Z"
                  transform="translate(6281.402 -1608.395)"
                  fill="#372152"
                />
                <path
                  id="Path_432"
                  d="M-5987.52,1864.948l-.585-14.465-12.787,2.121,1.264,13.876Z"
                  transform="translate(6233.657 -1741.144)"
                  fill="#372152"
                />
                <path
                  id="Path_433"
                  d="M-5685.547,1704.326l-12.368-.757-.285,32.205-15.883,1.108-.795-33.431-11.719.809,1.165,46.643,40.335-3.736Z"
                  transform="translate(6077.434 -1657.403)"
                  fill="#372152"
                />
                <path
                  id="Path_434"
                  d="M-5824.841,1863.031l-.13-14.477-12.847-.137.827,13.909Z"
                  transform="translate(6140.78 -1739.968)"
                  fill="#372152"
                />
                <path
                  id="Path_435"
                  d="M-6052.259,1596.476h-33.455l.289,6.11,32.753,4.719Z"
                  transform="translate(6281.967 -1596.476)"
                  fill="#372152"
                />
                <path
                  id="Path_436"
                  d="M-6282.045,1903.591l-.5-12.8-36.72,3.708-5.117,41.9,44.255,2.894-.056-12.783-31.083-1.577.535-4.076,18.82-.743-.048-11.02-17.828.739.539-4.806Z"
                  transform="translate(6417.897 -1764.099)"
                  fill="#372152"
                />
                <path
                  id="Path_437"
                  d="M-6404.444,1747.762l12.289-.752.446-42.566-40.074-3.712-1.157,46.342,11.643.8.79-33.215,15.779,1.1Z"
                  transform="translate(6479.727 -1655.855)"
                  fill="#372152"
                />
                <path
                  id="Path_438"
                  d="M-6500.379,1700.405l-11.667.141-.79,33.215-15.779-.5-.28-32.133-12.293.289-.446,43.164,40.074,3.113Z"
                  transform="translate(6541.633 -1655.668)"
                  fill="#372152"
                />
              </g>
              <g
                transform="translate(632 420)"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              >
                <motion.path
                  d="M1,1L655,1 655,289 1,289z"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [1, 0] }}
                  transition={{ ease: "easeInOut", duration: 2.5 }}
                />
              </g>
            </g>
          </svg>
        </div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
        >
          <RadialGradient variant="center-xl" className={`bg-${randomBg()}`} />
        </motion.div>
      </div>
    </div>
  );
}
