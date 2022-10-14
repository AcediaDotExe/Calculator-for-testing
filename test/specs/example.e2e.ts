import CalculatorPage from "../pageobjects/calculator.page";

describe('My Calculator application', () => {
    it('do 1 + 2 and get 3', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.doSum()).toBe("3");
    });
    it('do 1 - 2 and get -1', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.doMinus()).toBe("-1");
    });
    it('do 2 * 2 and get 4', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.doMultiplication()).toBe("4");
    });
    it('do 1 / 2 and get 0.5', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.doDivide()).toBe("0.5");
    });
    it('type 1 sym and delete it', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.clickAndDel()).toBe("0");
    });
    it('type some sym and delete all', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.typeAndClear()).toBe("0");
    });
    it('do divide 3 times with no equal button. do 1024 / 16 / 16 / 4 get 1', async () => {
        CalculatorPage.open();

        await expect(await CalculatorPage.doTripleDivide()).toBe("1");
    });
});


