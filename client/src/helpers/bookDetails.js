import { StarIcon } from "./iconsImport";

export const multiplyStars = (stars) => {
  let result = [];
  for (let i = 0; i < stars; i++) {
    result.push(<StarIcon key={i} />);
  }
  return result;
};

export const time = (date) => {
  return new Date(date).toLocaleDateString("pl", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export const readingTimeCounter = (data) => {
  const fullHours = data / 60;
  const remainingMinutes = data % 60;
  const readingTime =
    Math.floor(fullHours) + " godzin " + remainingMinutes + " minut";

  return readingTime;
};

export const first100letters = (text) => {
  return text.substring(0, 100) + "...";
};
