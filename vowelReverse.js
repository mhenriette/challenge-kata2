const vowelPattern = /[aiuoae]/gi;
const reverseVowels = (str) => {
  const vowels = str.split(" ").join("").match(vowelPattern);
  return str.replace(vowelPattern, () => vowels.pop());
};
