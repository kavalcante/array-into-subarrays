const arrayIntoSubarrays = (array, limit = 4) => {
  let result = [];
  for (let i = 0; i < array.length; i = i + limit) {
    result.push(array.slice(i, i + limit));
  }
  return result;
};

export default arrayIntoSubarrays;