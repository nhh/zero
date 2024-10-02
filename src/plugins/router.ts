export class Router {

    routes: {[key: string]: JSX.Element} = {}

    constructor(routes: {[key: string]: JSX.Element}) {
        this.routes = routes
    }

    async navigate(path: string) {
        if(!(path in this.routes)) return

        
    }
    async back() {}

}