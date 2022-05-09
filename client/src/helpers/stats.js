export const percents = (num1, num2) => {
  const percent = parseInt(((num1 / num2) * 100).toFixed());

  return percent;
};

export const readedBooks = (data) => {
  let readedBooks = [];
  data.map((element) => {
    if (element.readed) {
      return readedBooks.push(element);
    } else {
      return null;
    }
  });
  const readedBooksCount = parseInt(readedBooks.length);

  return readedBooksCount;
};

export const availableBooks = (data) => {
  let availableBooks = [];
  data.map((element) => {
    if (element.available) {
      return availableBooks.push(element);
    } else {
      return null;
    }
  });

  const availableBooksCount = parseInt(availableBooks.length);

  return availableBooksCount;
};
