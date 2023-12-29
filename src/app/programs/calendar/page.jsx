"use client";

import React, { Fragment, useMemo } from "react";
import dayjs from "dayjs";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import { eventList } from "../../../lib";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Note that the dayjsLocalizer extends Day.js with the following plugins:
// - IsBetween
// - IsSameOrAfter
// - IsSameOrBefore
// - LocaleData
// - LocalizedFormat
// - MinMax
// - UTC

// add optional time zone support
import timezone from "dayjs/plugin/timezone";
import { HeaderOverlay } from "../../../components";
dayjs.extend(timezone);

const djLocalizer = dayjsLocalizer(dayjs);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "whitesmoke",
    },
  });

export default function Dayjs({ ...props }) {
  const { components, defaultDate, max, views } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );

  return (
    <Fragment>
      <HeaderOverlay>Calendar</HeaderOverlay>
      <div className="container mx-auto px-[20px] md:px-[100px] py-[32px] md:py-[100px] font-josefin_sans">
        <div className="h-[600px]" {...props}>
          <Calendar
            components={components}
            defaultDate={defaultDate}
            events={eventList}
            localizer={djLocalizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={views}
          />
        </div>
      </div>
    </Fragment>
  );
}
