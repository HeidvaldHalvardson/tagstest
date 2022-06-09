const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};

const getRandomInt = (min = 1, max = 10) => {
  const lower = Math.ceil(min);
  const upper = Math.ceil(max);
  const result = Math.round(Math.random() * (upper - lower) + (lower));
  return result;
};

export {isEnterKey, getRandomInt};
