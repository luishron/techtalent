import React from "react";
import { GoClock } from "react-icons/go";

const formatDate = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);
  const differenceInSeconds = (currentDate - inputDate) / 1000;

  if (differenceInSeconds < 60) {
    return "Just now";
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hours ago`;
  } else if (differenceInSeconds < 604800) {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} days ago`;
  } else if (differenceInSeconds < 2419200) {
    const weeks = Math.floor(differenceInSeconds / 604800);
    return `${weeks} weeks ago`;
  } else {
    return inputDate.toDateString();
  }
};

const FormattedDate = (props) => {
  return (
    <>
      <GoClock />
      <p>{formatDate(props.date)}</p>
    </>
  );
};

export default FormattedDate;
