import {minus} from "../../model/сomputations";

describe('minus', () => {
    test('1 - 2 to equal -1', () => {
        expect(minus(1, 2)).toBe(-1);
    });
    test('-1 - -2 to equal 1', () => {
        expect(minus(-1, -2)).toBe(1);
    });
    test('-1 - 2 to equal -3', () => {
        expect(minus(-1, 2)).toBe(-3);
    });
    test('0.1 - 0.2 to equal -0.1', () => {
        expect(minus(0.1, 0.2)).toBe(-0.1);
    });
    test('0.1 - -0.2 to equal -1', () => {
        expect(minus(0.1, -0.2)).toBe(0.3);
    });
    test('1.0 - 1 to equal 0', () => {
        expect(minus(1.0, 1)).toBe(0);
    });
    test('2.6 - 0.6 to equal 2', () => {
        expect(minus(2.6, 0.6)).toBe(2);
    });
    test('0.000000000001 - 0.000000000002 to equal -0.000000000001', () => {
        expect(minus(0.000000000001, 0.000000000002)).toBe(-0.000000000001);
    });
    test('-10^10 - 10^10 to equal -2*10^10', () => {
        expect(minus(-(10**10), 10**10)).toBe(-(2*10**10));
    });
})