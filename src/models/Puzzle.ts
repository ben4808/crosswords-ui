import { GridState } from "./GridState";

export interface Puzzle {
    title: string;
    author: string;
    copyright: string;
    notes: string;
    clues: Map<string, string>;
}
