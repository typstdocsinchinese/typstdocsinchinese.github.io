import {Route} from "./types";
import type {ContentsItem} from "~/static/types";

declare module 'data.json' {
    const data: Route[];
    export default data;
}

declare module 'contents.json' {
    const data: ContentsItem[];
    export default data;
}