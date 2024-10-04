import type {Route} from "~/static/types";
import withoutEndingSlash from "~/utils/withoutEndingSlash";

export default function findRoute(routes: Route[], path: string): Route | null {
    const res = routes.filter(x => withoutEndingSlash(x.route) === path);

    if (res.length > 0) return res[0];

    const suspects = routes.filter(x => path.startsWith(withoutEndingSlash(x.route)))

    for (let s of suspects) {
        let res = findRoute(s.children, path);
        if (res) return res;
    }

    return null;
}