import {Node, Flow} from 'pocketflow';

// nodo unico
// -- 1 leer SharedArrayBuffer.number 
// -- 2. Calcular si es par o impar
// -- 3 guardar SharedArrayBuffer.result

class EvenOddNode extends Node {
    prep(shared){
        return shared.number;
    }

    exec(number){
        if(typeof number !== 'number'){
            throw new Error('Input is not a number');
        }
        return number % 2 === 0 ? 'even' : 'odd';
    }
    post(shared, prepRes, execRes){
        shared.result = execRes;
        return null;
    }
}
export function builEvenOddFlow(){
    return new Flow(new EvenOddNode());
}