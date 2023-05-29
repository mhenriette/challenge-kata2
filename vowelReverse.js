const vowelPattern = /[aiuoaeAIUOAE]/g;
const reverseVowels = (str) => {
  const vowels = str.split(" ").join("").match(vowelPattern);
  return str.replace(vowelPattern, () => vowels.pop());
};
