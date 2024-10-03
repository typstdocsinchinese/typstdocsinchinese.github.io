import data from '@/static/data.json';
import {Route, RouteSlim} from "@/static/types";

const d = data as Route[];

function withoutEndSlash(str: string) {
    return str.substring(0, str.length - 1);
}

function findRoute(routes: Route[], path: string): Route | null {
    const res = routes.filter(x => withoutEndSlash(x.route) === path);

    if (res.length > 0) return res[0];

    const suspects = routes.filter(x => path.startsWith(withoutEndSlash(x.route)))

    for (let s of suspects) {
        let res = findRoute(s.children, path);
        if (res) return res;
    }

    return null;
}

export default defineEventHandler(async e => {
    const query = getQuery(e);

    if (!query.path) return null;

    const path = atob(query.path as string);

    const res = findRoute(d, path) as RouteSlim | null;

    if (res === null) return null;

    for (let i of res.children) {
        i.body = null;
        i.outline = null;
    }

    return res;
})