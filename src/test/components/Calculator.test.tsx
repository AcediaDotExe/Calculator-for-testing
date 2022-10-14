/** @jest-environment jsdom */

import '@testing-library/jest-dom'
import {fireEvent, screen} from "@testing-library/react";
import {renderWithProviders} from "../test-utils";
import Calculator from "../../components/Calculator";
import App from "../../App";

const numbers: Array<string> = ['1', '2','3','4','5','6','7','8','9','0'];
const operators: Array<string> = ['+', '-','*','/','=','<','c'];

describe('UI contains necessary buttons', () => {
    numbers.forEach((number) => {
        test('is button ' + number + " on display", () => {
            renderWithProviders(<Calculator/>);

            const button = screen.getByTestId(number)

            expect(button).toBeInTheDocument();
        })
    })

    operators.forEach((operator) => {
        test('is operator ' + operator + " on display", () => {
            renderWithProviders(<Calculator/>);

            const button = screen.getByText(operator)

            expect(button).toBeInTheDocument();
        })
    })
})

describe('display a numbers after click and clear all check', () => {
    numbers.forEach((number) => {
        test('check initial state, click ' + number + " button and check its number on display", () => {
            renderWithProviders(<App/>);

            const button = screen.getByTestId(number)
            const clearButton = screen.getByTestId("c")
            const main_display = screen.queryByTestId('main-display')

            fireEvent.click(button);

            // @ts-ignore
            expect(main_display.textContent).toBe(number);

            fireEvent.click(clearButton);

            // @ts-ignore
            expect(main_display.textContent).toBe("0");

        })
    })

})
