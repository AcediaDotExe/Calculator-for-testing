import Page from './page';


class CalculatorPage extends Page {

    public get buttonNum1 () {
        return $('#b1');
    }
    public get buttonNum2 () {
        return $('#b2');
    }
    public get buttonNum3 () {
        return $('#b3');
    }
    public get buttonNum4 () {
        return $('#b4');
    }
    public get buttonNum5 () {
        return $('#b5');
    }
    public get buttonNum6 () {
        return $('#b6');
    }
    public get buttonNum7 () {
        return $('#b7');
    }
    public get buttonNum8 () {
        return $('#b8');
    }
    public get buttonNum9 () {
        return $('#b9');
    }
    public get buttonNum0 () {
        return $('#b0');
    }

    public get buttonSum () {
        return $('#bplus');
    }
    public get buttonMinus () {
        return $('#bminus');
    }
    public get buttonMultiplication () {
        return $('#bmul');
    }
    public get buttonDivide () {
        return $('#bd');
    }
    public get buttonEq () {
        return $('#bequal');
    }

    public get mainDisplay () {
        return $('#main-display');
    }

    public get memoryDisplay() {
        return $('#memory-display');
    }

    public get buttonClear () {
        return $('#bclear');
    }
    public get buttonDel () {
        return $('#bdel');
    }

    public async doSum(){
        await this.buttonNum1.click();
        await this.buttonSum.click();
        await this.buttonNum2.click();
        await this.buttonEq.click();

        return await this.mainDisplay.getText()
    }

    public async doMinus(){
        await this.buttonNum1.click();
        await this.buttonMinus.click();
        await this.buttonNum2.click();
        await this.buttonEq.click();

        return await this.mainDisplay.getText()
    }

    public async doMultiplication(){
        await this.buttonNum2.click();
        await this.buttonMultiplication.click();
        await this.buttonNum2.click();
        await this.buttonEq.click();

        return await this.mainDisplay.getText()
    }

    public async doDivide(){
        await this.buttonNum1.click();
        await this.buttonDivide.click();
        await this.buttonNum2.click();
        await this.buttonEq.click();

        return await this.mainDisplay.getText()
    }

    public async clickAndDel(){
        await this.buttonNum8.click();
        await this.buttonDel.click();

        return await this.mainDisplay.getText()
    }

    public async typeAndClear(){
        await this.buttonNum8.click();
        await this.buttonNum9.click();
        await this.buttonNum1.click();
        await this.buttonNum5.click();
        await this.buttonClear.click();

        return await this.mainDisplay.getText()
    }

    public async doTripleDivide(){
        await this.buttonNum1.click();
        await this.buttonNum0.click();
        await this.buttonNum2.click();
        await this.buttonNum4.click();

        await this.buttonDivide.click();

        await this.buttonNum1.click();
        await this.buttonNum6.click();

        await this.buttonDivide.click();

        await this.buttonNum1.click();
        await this.buttonNum6.click();

        await this.buttonDivide.click();

        await this.buttonNum4.click();

        await this.buttonEq.click();

        return await this.mainDisplay.getText()
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open("");
    }
}

export default new CalculatorPage();