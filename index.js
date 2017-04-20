export default (array, limit = 4) => { 
  return array.map((item, index) => { 
           return index % limit === 0 ? array.slice(index, index + limit) : null;
         }).filter(item => item);
};