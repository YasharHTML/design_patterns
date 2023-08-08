class Singleton {
    private static _instance: Singleton;
    private constructor() {}

    public data?: number;

    public static getInstance() {
        if (Singleton._instance === undefined) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const sing1 = Singleton.getInstance();
const sing2 = Singleton.getInstance();

console.log(sing1.data); // undefined
console.log(sing2.data); // undefined

sing1.data = 3;

console.log(sing1.data); // 3
console.log(sing2.data); // 3
