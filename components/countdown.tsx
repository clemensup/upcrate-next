import moment from "moment";
import * as React from "react";

export function Countdown() {
  const nextMonth = moment().add(1, "months").startOf("month");
  const nextCrate = nextMonth.add(4, "days");

  const [nextCrateWeeks, setNextCrateWeeks] = React.useState(
    nextCrate.diff(moment(), "week")
  );
  const [nextCrateDays, setNextCrateDays] = React.useState(
    nextCrate.diff(moment(), "day")
  );
  const [nextCrateHours, setNextCrateHours] = React.useState(
    moment().diff(moment().endOf("day"), "hour")
  );

  console.log(nextCrateHours);

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setNextCrateWeeks(nextCrate.diff(moment(), "week"));
      setNextCrateDays(nextCrate.diff(moment(), "day"));
      setNextCrateHours(moment().diff(moment().endOf("day"), "hour"));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <div className="flex gap-5 md:gap-20 justify-center">
        <div className="font-display text-red text-7xl md:text-countdown">
          {nextCrateWeeks}
          <div className="text-xl md:text-5xl">Weeks</div>
        </div>
        <div className="font-display text-purple text-7xl md:text-countdown">
          {nextCrateDays}
          <div className="text-xl md:text-5xl">Days</div>
        </div>
        <div className="font-display text-orange text-7xl md:text-countdown">
          {nextCrateHours}
          <div className="text-xl md:text-5xl">Hours</div>
        </div>
      </div>
      <p className="text-lg md:text-3xl text-purple-dark mt-5 md:mt-20 border-2 inline-block py-2 px-4">
        Till the 5th of every month
      </p>
    </>
  );
}
