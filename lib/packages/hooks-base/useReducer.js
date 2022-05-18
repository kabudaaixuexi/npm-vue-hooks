"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useState_1 = __importDefault(require("./useState"));
const useReducer = (reducer, initialState) => {
    const [state, setState] = useState_1.default(initialState);
    const dispatch = (action) => {
        if (Object.prototype.toString.call(action) !== '[object Object]') {
            throw new TypeError(`The parameter 'action' must be the type 'Object'`);
        }
        if (!action.hasOwnProperty('type')) {
            throw new ReferenceError(`The parameter 'action' need a property 'type'`);
        }
        reducer(state, action);
    };
    return [
        state, dispatch
    ];
};
exports.default = useReducer;
