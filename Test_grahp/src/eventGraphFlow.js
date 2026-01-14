import { Node, Flow } from 'pocketflow';

class GraphConcurrencyNode extends Node {

    // 1. Leer el input
    prep(shared) {
        return shared.graphString;
    }

    // 2. Lógica principal (equivalente a tus funciones Python)
    exec(graphString) {
        if (typeof graphString !== 'string') {
            throw new Error('Input is not a string');
        }

        // ---- identify_node ----
        const graph = {};
        const parts = graphString.split(';');

        for (const part of parts) {
            const [node, edges] = part.split(':');
            graph[node] = edges ? edges.split('') : [];
        }

        // ---- count_concurrency ----
        const concurrency = {};
        for (const node in graph) {
            concurrency[node] = 0;
        }

        for (const node in graph) {
            const edges = graph[node];

            // Aristas salientes
            concurrency[node] += edges.length;

            // Aristas entrantes
            for (const target of edges) {
                concurrency[target] += 1;
            }
        }

        return concurrency;
    }

    // 3. Guardar resultado
    post(shared, prepRes, execRes) {
        shared.result = execRes;
        return null;
    }
}

export function buildGraphConcurrencyFlow() {
    return new Flow(new GraphConcurrencyNode());
}
