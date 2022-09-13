let activeEffect = undefined;
class ReactiveEffect {
    active = true;
    deps = [];
    constructor(fn: Target) {
        (this as Target).fn = fn
    }
    run() {
        if(!this.active) {(this as Target).fn()};
        try {
            activeEffect = this;
            return (this as Target).fn()
        } finally {
            activeEffect = undefined;
        }
    }
}

export default (fn: Target) => {
    const _effect = new ReactiveEffect(fn);
    _effect.run()
}
