interface CaptainCrateSvgProps {
  variant?: "head-only" | "default" | "plus";
  className?: string;
  width?: number;
}
export function CaptainCrateSvg({
  variant = "default",
  className = "text-purple-dark",
  width = 42,
}: CaptainCrateSvgProps): JSX.Element {
  return (
    <div className={className}>
      {variant === "default" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height="47.355"
          viewBox="0 0 42 47.355"
          className={`fill-current ${className}`}
        >
          <g
            id="Group_693"
            data-name="Group 693"
            transform="translate(-1398.934 -54.539)"
          >
            <g
              id="Group_4"
              data-name="Group 4"
              transform="translate(1398.934 54.539)"
            >
              <g id="Group_3" data-name="Group 3" transform="translate(9.891)">
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M5654.527-2441.416v6.155l-7.939.719-.265-7.969-12.465-1.666.98,20.7,22.5-.864.632-16.619Zm-12.22,6.586-4.1-.286v-6.13h4.389Z"
                  transform="translate(-5633.542 2450.855)"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M5633.81-2445.192l24.285,3.5.305-8.029h-24.8Z"
                  transform="translate(-5633.595 2449.722)"
                />
              </g>
              <path
                id="Path_11"
                data-name="Path 11"
                d="M5625.686-2410.579l2.278-9.41,8.555-5.91,23.833.657,6.723,8.536.611,8.753Z"
                transform="translate(-5625.686 2455.309)"
              />
            </g>
          </g>
        </svg>
      )}

      {variant === "head-only" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height="86.665"
          viewBox="0 0 78.253 86.665"
          className={`fill-current ${className}`}
        >
          <g
            id="Group_328"
            data-name="Group 328"
            transform="translate(-204.833 -98.729)"
          >
            <path
              id="Path_350"
              data-name="Path 350"
              d="M271.151,128.555l.073,19.416-25.036,2.364-.929-25.139-39.349-5.1,3.34,65.3,70.968-2.991,1.8-52.439Zm-38.474,20.923-12.939-.854-.073-19.336,13.846-.053Z"
            />
            <path
              id="Path_351"
              data-name="Path 351"
              d="M205.564,113.312l76.654,10.75.868-25.333-78.253.295Z"
            />
          </g>
        </svg>
      )}

      {variant === "plus" && (
        <svg
          id="Group_224"
          data-name="Group 224"
          xmlns="http://www.w3.org/2000/svg"
          width="47.613"
          height="38.212"
          viewBox="0 0 47.613 38.212"
        >
          <g
            id="Group_122"
            data-name="Group 122"
            transform="translate(36 11.155)"
          >
            <g id="Group_121" data-name="Group 121">
              <path
                id="Path_241"
                data-name="Path 241"
                d="M261.588,2740.738h-4.057v4.891l-3.383-.139v-4.752h-3.94l-.232-2.827h4.172v-4.566l3.383.047v4.52h3.824Z"
                transform="translate(-249.976 -2733.345)"
                fill="#fff"
              />
            </g>
          </g>
          <g id="Group_124" data-name="Group 124" transform="translate(0)">
            <g
              id="Group_123"
              data-name="Group 123"
              transform="translate(7.805)"
            >
              <path
                id="Path_242"
                data-name="Path 242"
                d="M238.6,2729.848v5.043l-6.5.589-.217-6.529-10.214-1.365.8,16.962,18.433-.706.518-13.617Zm-10.012,5.4-3.359-.234v-5.022h3.6Z"
                transform="translate(-221.408 -2722.114)"
                fill="#fff"
              />
              <path
                id="Path_243"
                data-name="Path 243"
                d="M221.58,2725.753l19.9,2.867.25-6.578H221.4Z"
                transform="translate(-221.405 -2722.042)"
                fill="#fff"
              />
            </g>
            <path
              id="Path_244"
              data-name="Path 244"
              d="M213.5,2758.415l1.838-7.709,6.9-4.841,19.231.538,5.424,6.993.493,7.171Z"
              transform="translate(-213.496 -2722.355)"
              fill="#fff"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
