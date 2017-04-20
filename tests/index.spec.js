import { expect } from 'chai';
import arrayIntoSubarrays from '../dist/index';

describe('Array into Subarrays', () => {

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrString = ['Johnny', 'Maria', 'Carlos', 'Henrique', 'Mariana', 'Juliana'];
  const arrAny = [1, null, 'string', {}, [], undefined];

  context('Smoke test', () => {
    
    it('should exist the arrayIntoSubarrays lib', () => {
      expect(arrayIntoSubarrays).to.exist;
    });

    it('should arrayIntoSubarrays be a function', () => {
      console.log(expect(arrayIntoSubarrays).to.be.a('function'));
    });

  });

  context('Numbers array', () => {

    it('should return [[1, 2, 3, 4], [5, 6, 7, 8], [9]] when inputs `arr`', () => {
      expect(arrayIntoSubarrays(arr)).to.deep.equal([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
    });

  });

  context('String array and groups of 2 items', () => {


    it('should return [["Johnny", "Maria"], ["Carlos", "Henrique"], ["Mariana", "Juliana"]] when inputs `arrString` and 2', () => {
      expect(arrayIntoSubarrays(arrString, 2)).to.deep.equal([['Johnny', 'Maria'], ['Carlos', 'Henrique'], ['Mariana', 'Juliana']]);
    });

  });

  context('Any array and groups of 3 items', () => {

    it('should return [[1, null, "string"], [{}, [], undefined]] when inputs `arrAny` and 3', () => {
      expect(arrayIntoSubarrays(arrAny, 3)).to.deep.equal([[1, null, 'string'], [{}, [], undefined]]);
    });

  });

});