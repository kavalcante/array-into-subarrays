# Array into Subarrays

Insert a array list and receive a new list (non destructive) with groups of elements (subarrays).


### Installing


```
$ npm install array-into-subarrays --save
```

### Usage


```js

import arrayIntoSubarrays from 'array-into-subarrays';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9] // could be any data, and how much indexes do you want.

arrayIntoSubarrays(array, 4) // => [[1, 2, 3, 4], [5, 6, 7, 8], [9]];

// you can invoke the function in any part of your code, because is a non destructive function

```

## Attributes


| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __array__     | no default value | array | Array that will be divided. |
| __limit__   | 4 | number | Length of subarrays. |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [copy from Stack Overflow answear](http://stackoverflow.com/questions/11318680/split-array-into-chunks-of-n-length)
