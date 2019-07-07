import {Adder} from './adder';
describe('Adder', () => {
    it('should be able to add two whole numbers', () => {
        expect(Adder.add(2, 2)).toEqual(4);
      });
    
      it('should be able to add a whole number and a negative number', () => {
        expect(Adder.add(2, -1)).toEqual(1);
      });
    
      it('should be able to add a whole number and a zero', () => {
        expect(Adder.add(2, 0)).toEqual(2);
      });
});