import findRoute from "~/utils/findRoute";
import data from '@/static/data.json';
import type {Route} from "~/static/types";

export default function getDoc(path: string) {
    const res = findRoute(data as Route[], path);

    if (res === null) return null;

    return res;
}