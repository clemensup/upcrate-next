interface CaptainCrateSvgProps {
  variant?: "head-only" | "default";
  classes?: string;
}
export function CaptainCrateSvg({
  variant = "default",
  classes = "text-purple-dark",
}: CaptainCrateSvgProps): JSX.Element {
  return (
    <div className={classes}>
      {variant === "default" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="47.355"
          viewBox="0 0 42 47.355"
          className={`fill-current ${classes}`}
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
          width="78.253"
          height="86.665"
          viewBox="0 0 78.253 86.665"
          className={`fill-current ${classes}`}
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
    </div>
  );
}
