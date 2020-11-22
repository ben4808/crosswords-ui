import { PriorityQueue } from "../lib/priorityQueue";
import { FillNode } from "./FillNode";
import { IndexedWordList } from "./IndexedWordList";
import { Puzzle } from "./Puzzle";
import { QualityClass } from "./QualityClass";

export interface GlobalsObj {
    puzzle?: Puzzle;
    selectedWordKey?: string;
    //selectedSquare?: [number, number];
    //selectedWord?: GridWord;

    fillQueue?: PriorityQueue<FillNode>;
    isVisualFillRunning: boolean;
    //currentDepth?: number;
    //fillStatus?: FillStatus;
    //completedGrids?: [number, GridState][];

    wordList?: IndexedWordList;
    qualityClasses?: Map<string, QualityClass>;
    starterLengthBuckets?: Map<number, string[]>;
    isFirstFillCall: boolean;

    // fillWordHandler?: () => void;
    // fillGridHandler?: () => void;
    // pauseFill?: () => void;
    // changeView?: () => void;
    // makeNewGrid?: () => void;
    // loadPuz?: () => void;
    // exportPuz?: () => void;
}