interface SQLDatabase {
    query(): any;
    execute(): any;
} // ORM is for postgres

interface NoSQLDatabase {
    read(): any;
    write(): any;
} // designed years later

// I want to access NoSQLDatabase the same way I did with SQLDatabase

class NoSQLAdapter implements SQLDatabase {
    constructor(private noSQLDatabase: NoSQLDatabase) {}
    query() {
        return this.noSQLDatabase.read();
    }
    execute() {
        return this.noSQLDatabase.write();
    }
} // I can use NoSQLAdapter without changing a lot of code now

// Example

class CustomSQL implements SQLDatabase {
    query() {
        return "query";
    }
    execute() {
        return "execute";
    }
}

class CustomNoSQL implements NoSQLDatabase {
    read() {
        return "read";
    }
    write() {
        return "write";
    }
}

let myDatasource = new CustomSQL();
console.log(myDatasource.query()); // query

const noSqlDatasource = new CustomNoSQL();

// myDatasource = noSqlDatasource NOT COMPATIBLE
myDatasource = new NoSQLAdapter(noSqlDatasource);

console.log(myDatasource.query()); // read
