import {transform} from "../src/romanizer";

describe('calculator', () => {
    it('should return X when number equal 10', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });

    
});