import { getCADUSDExcRt } from "./exchangeRate.service";

//reference: https://dev.to/saharabanu/unit-tesing-with-jest-in-react-typescript-3anb

it('should get CAD/USD exchange rate'); {
    let exchangeRate;
    exchangeRate = getCADUSDExcRt();

    expect(typeof exchangeRate).toBe('number')
}

