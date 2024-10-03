import data from './data.json';
import type {Route} from "./types";
import * as fs from "fs/promises";

const d = data as Route[];
const result = [];

function flattenRoute(d: Route): Route[] {
    const res: Route[] = [];

    if (d.children.length > 0) {
        d.children.forEach(c => {
            res.push(...flattenRoute(c));
        })
    }

    res.push(...d.children);

    res.push(d);

    return res;
}

const res: Route[] = [];

d.forEach((dd) => res.push(...flattenRoute(dd as Route)));

// @ts-ignore
await fs.writeFile('./data.built.json', JSON.stringify(res));