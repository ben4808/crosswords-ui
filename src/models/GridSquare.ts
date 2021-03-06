import { ContentType } from "./ContentType";
import { SquareType } from "./SquareType";

export interface GridSquare {
    row: number;
    col: number;
    number?: number;
    type: SquareType;
    isCircled: boolean;

    content?: string;
    contentType: ContentType;

    viableLetters?: string[];
}
