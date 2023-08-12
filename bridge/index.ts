interface Controller {
    create(): any;
    read(): any;
    update(): any;
    delete(): any;
}

class RestController implements Controller {
    create() {
        return "REST create";
    }
    read() {
        return "REST read";
    }
    update() {
        return "REST update";
    }
    delete() {
        return "REST delete";
    }
}

class GraphQLController implements Controller {
    create() {
        return "GraphQL create";
    }
    read() {
        return "GraphQL read";
    }
    update() {
        return "GraphQL update";
    }
    delete() {
        return "GraphQL delete";
    }
}

class Application {
    constructor(private _controller: Controller) {}
    command(query: "create" | "read" | "update" | "delete") {
        return this._controller[query]();
    }

    set controller(controller: Controller) {
        this._controller = controller;
    }
}

const application = new Application(new RestController());
console.log(application.command("create"));

application.controller = new GraphQLController();
console.log(application.command("create"))