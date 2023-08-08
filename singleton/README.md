# What is a singleton?

Singleton is a creational pattern which is used to have a class only having a single instance and provide a global access to it.

```ts
class Singleton {
    private static _instance: Singleton;
    private constructor() {}

    public static getInstance() {
        if (Singleton._instance === undefined) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}
```

Explaination:

1. Singleton class is created

2. A static `_instance` member with type of Singleton (which can either be an instance of singleton or undefined)

3. Private constructor so this class can't be initialized by means of constructor

4. Static method `getInstance()` which initializes `_instance` only if `_instance` equals `undefined` (Only once when the method is called for the first time).