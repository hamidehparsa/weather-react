import React from "react";

export default function FormattedDate(props) {
  let hour = null;
  let day = null;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let minute = null;
  if (props.date) {
    hour = props.date.getHours();
    day = days[props.date.getDay()];
    minute = props.date.getMinutes();
  }
  return (
    <div>
      {day}, {hour}:{minute}
    </div>
  );
}
