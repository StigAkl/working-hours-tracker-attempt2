export const dateToTime = (date: Date) => {
  const timeString =
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  return timeString;
};

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const convertMsToTime = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
};

export const subtractHours = (numOfHours: number, date = new Date()) => {
  date.setHours(date.getHours() - numOfHours);

  return date;
};
