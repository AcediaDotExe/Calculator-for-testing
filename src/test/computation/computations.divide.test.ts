import {divide} from "../../model/сomputations";

describe('divide', () => {
    test('4 / 2 to equal 2', () => {
        expect(divide(4, 2)).toBe(2);
    })
    test('2 / 4 to equal 0.5', () => {
        expect(divide(2, 4)).toBe(0.5);
    })
    test('1 / 3 to equal 0.3333333333333333', () => {
        expect(divide(1, 3)).toBe(0.3333333333333333);
    })
    test('0.1 / 2 to equal 0.05', () => {
        expect(divide(0.1, 2)).toBe(0.05);
    })
    test('0.00000001 / 2 to equal 0.000000005', () => {
        expect(divide(0.00000001, 2)).toBe(0.000000005);
    })
    test('2 / 1 to equal 2', () => {
        expect(divide(2, 1)).toBe(2);
    })
    test('7 / 7 to equal 1', () => {
        expect(divide(7, 7)).toBe(1);
    })
    test('1 / 0 to equal Infinity', () => {
        expect(divide(1, 0)).toBe(Infinity);
    })
    test('0 / 0 to equal NaN', () => {
        expect(divide(0, 0)).toBe(NaN);
    })
    test('0 / 0.0001 to equal 0', () => {
        expect(divide(0, 0.0001)).toBe(0);
    })
});