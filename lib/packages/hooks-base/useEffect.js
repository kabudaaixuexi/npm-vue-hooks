"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let activeEffect = undefined;
class ReactiveEffect {
    constructor(fn) {
        this.active = true;
        this.deps = [];
        this.fn = fn;
    }
    run() {
        if (!this.active) {
            this.fn();
        }
        ;
        try {
            activeEffect = this;
            return this.fn();
        }
        finally {
            activeEffect = undefined;
        }
    }
}
exports.default = (fn) => {
    const _effect = new ReactiveEffect(fn);
    _effect.run();
};
