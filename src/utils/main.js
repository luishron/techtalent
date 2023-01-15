export const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export const getRandomHSL = () => {
  var h = Math.floor(Math.random() * 361);
  var s = Math.floor(Math.random() * 101);
  var l = Math.floor(Math.random() * 40);
  return "hsl(" + h + "," + s + "%," + l + "%)";
};
