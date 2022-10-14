import {plus} from "../../model/сomputations";

describe('plus', () => {
    test('1 + 2 to equal 3', () => {
        expect(plus(1, 2)).toBe(3);
    });
    test('-1 + -2. to equal -3', () => {
        expect(plus(-1, -2)).toBe(-3);
    });
    test('-1 + 2. to equal -1', () => {
        expect(plus(-1, 2)).toBe(1);
    });
    test('0.1 + 0.2 to equal 0.3', () => {
        expect(plus(0.1, 0.2)).toBe(0.3);
    });
    test('0.1 + 0.1 to equal 0.3', () => {
        expect(plus(0.1, 0.1)).toBe(0.2);
    });
    test('-0.1 + -0.2 to equal -0.3', () => {
        expect(plus(-0.1, -0.2)).toBe(-0.3);
    });
    test('10^10 + 10^10. to equal 2*10^10', () => {
        expect(plus(10**10, 10**10)).toBe(2*10**10);
    });
    test('0.000000002 + 0.000000003. to equal 5e-9', () => {
        expect(plus(0.000000002, 0.000000003)).toBe(5e-9);
    });
    test('1 + 0 to equal 1', () => {
        expect(plus(1, 0)).toBe(1);
    });
    test('0 + 1 to equal 1', () => {
        expect(plus(0, 1)).toBe(1);
    });
    test('0.5 + 1 to equal 1.5', () => {
        expect(plus(0.5, 1)).toBe(1.5);
    });
})