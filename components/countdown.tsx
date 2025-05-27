import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";

export function Countdown() {
  const { t, lang } = useTranslation("common");

  const currentDate = moment();
  const currentMonth = currentDate.month(); // 0 = January, 11 = December

  // Determine the next target date based on the 10th of specified months
  const targetMonths = [0, 2, 4, 6, 8, 10]; // January, March, May, July, September, November
  const nextTargetMonth =
    targetMonths.find((month) => month > currentMonth) ?? targetMonths[0];
  const nextTargetYear =
    nextTargetMonth > currentMonth
      ? currentDate.year()
      : currentDate.year() + 1;

  const nextCrate = moment({
    year: nextTargetYear,
    month: nextTargetMonth,
    date: 10,
  });

  const [nextCrateWeeks, setNextCrateWeeks] = React.useState(
    nextCrate.diff(moment(), "weeks")
  );

  const [nextCrateDays, setNextCrateDays] = React.useState(
    nextCrate.diff(moment(), "days") % 7
  );

  const [nextCrateHours, setNextCrateHours] = React.useState(
    moment().endOf("day").diff(moment(), "hours")
  );

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      const now = moment();
      const nextWeeks = nextCrate.diff(now, "days") / 7;
      const nextDays = nextCrate.diff(now, "days") % 7;

      setNextCrateWeeks(Math.floor(nextWeeks));
      setNextCrateDays(Math.floor(nextDays));
      setNextCrateHours(moment().endOf("day").diff(now, "hours"));
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [nextCrate]);

  return (
    <div>
      <h3 className="font-display text-purple-dark text-xl sm:text-2xl md:text-5xl md:mt-20 md:max-w-2xl mx-auto">
        {t("countdown.title")}
      </h3>

      <div className="flex space-x-5 md:space-x-20 justify-between md:justify-center">
        <div className="font-display text-red text-7xl md:text-countdown">
          {nextCrateWeeks}
          <div className="text-xl md:text-5xl">{t("countdown.weeks")}</div>
        </div>
        <div className="font-display text-purple text-7xl md:text-countdown">
          {nextCrateDays}
          <div className="text-xl md:text-5xl">{t("countdown.days")}</div>
        </div>
        <div className="font-display text-orange text-7xl md:text-countdown">
          {nextCrateHours}
          <div className="text-xl md:text-5xl">{t("countdown.hours")}</div>
        </div>
      </div>
      <p className="text-lg md:text-3xl text-purple-dark mt-5 md:mt-20 border-2 inline-block py-2 px-4">
        {t("countdown.text")}
      </p>
    </div>
  );
}
