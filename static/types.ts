/**
 * Note: this file might be updated frequently according to the claim of JSON structure instability which appears when running typst-doc.
 */

type Body<T extends string, V> = {
    kind: T;
    content: V;
};

export type Nullable<T> = null | T;

type Part = 'Library' | 'Language' | null;

export interface Outline {
    id: string;
    name: string;
    children: Outline[];
}

export interface Category {
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

export interface Func {
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

export interface FuncParam {
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

export interface Type {
    name: string;
    title: string;
    keywords: string[];
    oneliner: string;
    details: string;
    constructor: Nullable<Func>;
    scope: Func[];
}

export interface Group {
    name: string;
    title: string;
    details: string;
    functions: Func[];
}

export interface Symbols {
    name: string;
    title: string;
    details: string;
    list: Symbol[];
}

export interface Shorthands {
    markup: Symbol[];
    math: Symbol[]
}

export interface Symbol {
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
    body: Body<PageType.HTML, string>
        | Body<PageType.Category, Category>
        | Body<PageType.Func, Func>
        | Body<PageType.Type, Type>
        | Body<PageType.Symbols, Symbols>
        | Body<PageType.Group, Group>;
    children: Route[];
}

export enum PageType {
    Category = 'category',
    Func = 'func',
    Type = 'type',
    Symbols = 'symbols',
    Group = 'group',
    HTML = 'html',
    Unknown = '-',
    NotFound = 'not-found'
}

export interface RouteSlim extends Omit<Route, 'body' | 'children' | 'outline'> {
    body: null,
    outline: null,
    children: RouteSlim[]
}

export interface ContentsItem {
    title: string;
    route: string;
    children: ContentsItemChild[]
}

export interface ContentsItemChild extends Omit<ContentsItem, 'children'> {
    part: string | null;
    children: ContentsItemChild[];
}