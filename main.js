"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Implementa una función head (inmutable), tal que, dado un array como entrada extraigay devuelva su primer elemento.
var head = function (arr) {
    var first = arr[0];
    return first;
};
console.log("The first element of the received array is: " + head([1, 2, 3, 4, 5]));
// Implementa una función tail (inmutable), tal que, dado un array como entradadevuelta todos menos el primer elemento. 
var tail = function (arr) {
    var rest = arr.slice(1);
    return __spreadArrays(rest);
};
console.log(tail([1, 2, 3, 4, 5]));
// Implementa una función init (inmutable), tal que, dado un array como entradadevuelva todos los elementos menos el último.
var init = function (arr) {
    var copy = arr.slice();
    copy.pop();
    return copy;
};
console.log(init([1, 2, 3, 4, 5]));
// Función last que devuelva el último elemento de un array
var last = function (arr) {
    return arr[arr.length - 1];
};
console.log(last([1, 2, 3, 4, 5]));
// Función concat que dado 2 arrays como entrada, devuelva la concatenación de ambos
var concat = function (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(concat([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
// Función concat que acepte múltiples arrays de entrada
var superConcat = function (arr) {
    var restArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArr[_i - 1] = arguments[_i];
    }
    for (var index = 0; index < restArr.length; index++) {
        arr.concat(restArr[index]);
    }
    return arr;
};
superConcat([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// Función clone
var clone = function (obj) {
    return __assign(__assign({}, obj), { isCopy: true });
};
console.log(clone({ name: "Daniel", surname: "Mory" }));
