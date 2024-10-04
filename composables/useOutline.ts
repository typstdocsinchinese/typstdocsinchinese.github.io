import {useState} from "#app";
import type {Outline} from "~/static/types";

export default function () {
    return useState<Outline[] | null>('outline', () => null);
}