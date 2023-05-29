const phonePattern = /(\d{3})(\d{3})(\d{4})/g;
const createPhoneNumber = (numbers) =>
  numbers.join("").replace(phonePattern, "($1) $2-$3");
