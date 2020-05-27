// Implementa una función head (inmutable), tal que, dado un array como entrada extraigay devuelva su primer elemento.
const head = <T>(arr: T[]): T => {
    const [first,] = arr;
    return first
};
console.log(`The first element of the received array is: ${head([1,2,3,4,5])}`);

// Implementa una función tail (inmutable), tal que, dado un array como entradadevuelta todos menos el primer elemento. 
const tail = <T>(arr: T[]): T[] => {
    const [,...rest] = arr;
    return [...rest]
};
console.log(tail([1,2,3,4,5]))

// Implementa una función init (inmutable), tal que, dado un array como entradadevuelva todos los elementos menos el último.
const init = <T>(arr: T[]): T[] => {
    const copy = arr.slice();
    copy.pop()
    return copy
};
console.log(init([1,2,3,4,5]))

// Función last que devuelva el último elemento de un array
const last = <T>(arr: T[]): T => {
    return arr[arr.length-1]
}
console.log(last([1,2,3,4,5]))

// Función concat que dado 2 arrays como entrada, devuelva la concatenación de ambos
const concat = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr1.concat(arr2);
}
console.log(concat([1,2,3,4,5],[6,7,8,9,10]))

// Función concat que acepte múltiples arrays de entrada
const superConcat = <T>(arr: T[], ...restArr: any[]): T[] => {
    for (let index = 0; index < restArr.length; index++) {
        arr.concat(restArr[index]);
    }
    return arr
}
superConcat([1,2,3],[4,5,6],[7,8,9]);

// Función clone que dado un objeto de entrada devuelva una copia del mismo
const clone = (obj: Object): Object => {
    return {...obj, isCopy: true}
}
console.log(clone({name: "Daniel", surname: "Mory"}))