"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const states = [], stateSetters = [];
let stateIndex = 0;
const createState = (initialState, stateIndex) => {
    const state = vue_1.ref(initialState);
    return states[stateIndex] !== undefined ? states[stateIndex] : state;
};
const createStateSetter = (stateIndex) => {
    return function (newState) {
        if (typeof newState === 'function') {
            states[stateIndex].value = newState(states[stateIndex]);
        }
        else {
            states[stateIndex].value = newState;
        }
    };
};
const useState = (initialState) => {
    states[stateIndex] = createState(initialState, stateIndex);
    stateSetters[stateIndex] = createStateSetter(stateIndex);
    const _state = states[stateIndex], _setState = stateSetters[stateIndex];
    stateIndex++;
    return [
        _state,
        _setState
    ];
};
exports.default = useState;
