"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffect = exports.useReducer = exports.useState = void 0;
// base
const useState_1 = __importDefault(require("./packages/hooks-base/useState"));
exports.useState = useState_1.default;
const useReducer_1 = __importDefault(require("./packages/hooks-base/useReducer"));
exports.useReducer = useReducer_1.default;
const useEffect_1 = __importDefault(require("./packages/hooks-base/useEffect"));
exports.useEffect = useEffect_1.default;
