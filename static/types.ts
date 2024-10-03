/**
 * Note: this file might be updated frequently according to the claim of JSON structure instability which appears when running typst-doc.
 */

type Body<T extends string, V> = {
    kind: T;
    content: V;
};

type Nullable<T> = null | T;

type Part = 'Library' | 'Language' | null;

interface Outline {
    id: string;
    name: string;
    children: Outline[];
}

interface Category {
    name: string;
    title: string;
    details: string;
    items: {
        name: string;
        route: string;
        oneliner: string;
        code: boolean;
    }[];
    shorthands: Nullable<Shorthands>;
}

interface Func {
    path: string[];
    name: string;
    title: string;
    example: Nullable<string>;
    keywords: string[];
    oneliner: string;
    element: boolean;
    contextual: boolean;
    details: string;
    self: boolean;
    params: FuncParam[];
    returns: string[];
    scope: Func[];
}

interface FuncParam {
    name: string;
    details: string;
    example: Nullable<string>;
    types: string[];
    strings: { string: string; details: string }[];
    default: Nullable<string>;
    positional: boolean;
    named: boolean;
    required: boolean;
    variadic: boolean;
    settable: boolean;
}

interface Type {
    name: string;
    title: string;
    keywords: string[];
    oneliner: string;
    details: string;
    constructor: Nullable<Func>;
    scope: Func[];
}

interface Group {
    name: string;
    title: string;
    details: string;
    functions: Func[];
}

interface Symbols {
    name: string;
    title: string;
    details: string;
    list: Symbol[];
}

interface Shorthands {
    markup: Symbol[];
    math: Symbol[]
}

interface Symbol {
    name: string;
    codepoint: number;
    accent: boolean;
    alternates: string[];
    markupShorthand: Nullable<string>;
    mathShorthand: Nullable<string>;
}

export interface Route {
    route: string;
    title: string;
    description: string;
    part: Part;
    outline: Outline[];
    body: Body<'html', string> | Body<'category', Category> | Body<'func', Func> | Body<'type', Type> | Body<'symbols', Symbols>;
    children: Route[];
}

export interface RouteSlim extends Omit<Route, 'body' | 'children' | 'outline'> {
    body: null,
    outline: null,
    children: RouteSlim[]
}