import { buildGraphConcurrencyFlow } from '../src/eventGraphFlow.js';

describe('GraphConcurrencyFlow (PocketFlow)', () => {
    test('Cuenta concurrencia correctamente', async () => {
        const flow = buildGraphConcurrencyFlow();
        const shared = {
            graphString: "A:BCD;B:;C:D;D:BC"
        };

        await flow.run(shared);

       expect(shared.result).toEqual({
    A: 3,
    B: 2,
    C: 3,
    D: 4
});
    });
});
