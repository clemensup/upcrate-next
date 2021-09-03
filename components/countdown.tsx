import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

export function Countdown() {
  const { t } = useTranslation("common");

  const nextMonth = moment().add(1, "months").startOf("month");
  const nextCrate = nextMonth.add(4, "days");

  const [nextCrateWeeks, setNextCrateWeeks] = React.useState(
    nextCrate.diff(moment(), "week")
  );

  const [nextCrateDays, setNextCrateDays] = React.useState(
    nextCrate.diff(moment(), "day")
  );

  const [nextCrateHours, setNextCrateHours] = React.useState(
    moment().endOf("day").diff(moment(), "hours")
  );

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      const nextWeeks = nextCrate.diff(moment(), "days") / 7;
      const nextDays = nextCrate.diff(moment(), "days") % 7;

      setNextCrateWeeks(Math.floor(nextWeeks));
      setNextCrateDays(Math.floor(nextDays));
      setNextCrateHours(moment().endOf("day").diff(moment(), "hours"));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <h3 className="font-display text-purple-dark text-xl sm:text-2xl md:text-5xl md:mt-20 md:max-w-2xl mx-auto">
        {t("sections.countdown.title")}
      </h3>

      <div className="flex gap-5 md:gap-20 justify-between md:justify-center">
        <div className="font-display text-red text-7xl md:text-countdown">
          {nextCrateWeeks}
          <div className="text-xl md:text-5xl">
            {t("sections.countdown.weeks")}
          </div>
        </div>
        <div className="font-display text-purple text-7xl md:text-countdown">
          {nextCrateDays}
          <div className="text-xl md:text-5xl">
            {t("sections.countdown.days")}
          </div>
        </div>
        <div className="font-display text-orange text-7xl md:text-countdown">
          {nextCrateHours}
          <div className="text-xl md:text-5xl">
            {t("sections.countdown.hours")}
          </div>
        </div>
      </div>
      <p className="text-lg md:text-3xl text-purple-dark mt-5 md:mt-20 border-2 inline-block py-2 px-4">
        {t("sections.countdown.text")}
      </p>
    </div>
  );
}
