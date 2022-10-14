import {multiplication} from "../../model/сomputations";

describe('multiplication', () => {
    test('2 * 2 to equal 4', () => {
        expect(multiplication(2, 2)).toBe(4);
    })
    test('1 * 2 to equal 2', () => {
        expect(multiplication(1, 2)).toBe(2);
    })
    test('2 * 1 to equal 2', () => {
        expect(multiplication(2, 1)).toBe(2);
    })
    test('0.00001 * 2 to equal 0.00002', () => {
        expect(multiplication(0.00001, 2)).toBe(0.00002);
    })
    test('-2 * 2 to equal -4', () => {
        expect(multiplication(-2, 2)).toBe(-4);
    })
    test('2 * -2 to equal -4', () => {
        expect(multiplication(2, -2)).toBe(-4);
    })
    test('2 * 0 to equal 0', () => {
        expect(multiplication(2, 0)).toBe(0);
    })
    test('123456789 * 0 to equal 0', () => {
        expect(multiplication(123456789, 0)).toBe(0);
    })
    test('0.000000001 * 0 to equal 0', () => {
        expect(multiplication(0.000000001, 0)).toBe(0);
    })
    test('1 * 0.00000001 to equal 0.00000001', () => {
        expect(multiplication(1, 0.000000001)).toBe(0.000000001);
    })
    test('10^10 * 10^10 to equal 10^20', () => {
        expect(multiplication(10**10, 10**10)).toBe(10**20);
    })
    test('1e9 * 1e-9 to equal 1', () => {
        expect(multiplication(1e9, 1e-9)).toBe(1);
    })
});
