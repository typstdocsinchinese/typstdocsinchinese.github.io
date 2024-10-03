import {Route} from "./types";
import type {FlattenRoute} from "~/static/types";

declare module 'data.json' {
    const data: Route[];
    export default data;
}

declare module 'data.built.json' {
    const data: FlattenRoute[];
    export default data;
}