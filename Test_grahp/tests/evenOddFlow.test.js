import {builEvenOddFlow} from "../src/evenOddFlow.js";

describe("EvenOddFlow (PocketFlow)", () => {
    test("Numero par", async () => {
        const flow = builEvenOddFlow();
        const shared = {number:4};
        await flow.run(shared);
        expect(shared.result).toBe('even');
    });
});