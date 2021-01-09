const formater = (value) => {
  const stringFormat = value.toString();
  if (stringFormat.length < 2) {
    return value.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  } else {
    return value;
  }
};

export default formater;
