import data from '@/static/data.json';
import {Route} from "@/static/types";
import withoutEndingSlash from "~/utils/withoutEndingSlash";
import findRoute from "~/utils/findRoute";

const d = data as Route[];

export default defineEventHandler(async e => {
    const query = getQuery(e);

    if (!query.path) return null;

    const path = atob(query.path as string);

    const res = findRoute(d, path);

    if (res === null) return null;

    return res;
})