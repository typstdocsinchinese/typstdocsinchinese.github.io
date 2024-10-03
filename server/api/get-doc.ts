import data from '@/static/data.json';
import {Route, RouteSlim} from "@/static/types";
import withoutEndingSlash from "~/utils/withoutEndingSlash";

const d = data as Route[];

function findRoute(routes: Route[], path: string): Route | null {
    const res = routes.filter(x => withoutEndingSlash(x.route) === path);

    if (res.length > 0) return res[0];

    const suspects = routes.filter(x => path.startsWith(withoutEndingSlash(x.route)))

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

    const res = findRoute(d, path);

    if (res === null) return null;

    return res;
})