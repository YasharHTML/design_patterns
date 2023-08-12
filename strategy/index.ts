interface Strategy {
    run(a: number, b: number): number;
}

class AdditionStrategy implements Strategy {
    run(a: number, b: number): number {
        return a + b;
    }
}

class MultiplyStrategy implements Strategy {
    run(a: number, b: number): number {
        return a * b;
    }
}

class Runner {
    constructor(private _strategy: Strategy) {}
    set strategy(strategy: Strategy) {
        this._strategy = strategy;
    }

    run(a: number, b: number) {
        return this._strategy.run(a, b);
    }
}

const runner = new Runner(new AdditionStrategy());

console.log(runner.run(3, 4));

runner.strategy = new MultiplyStrategy();
console.log(runner.run(3, 4));
