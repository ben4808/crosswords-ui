export interface EntryCandidate {
    word: string;
    score: number;
    isViable: boolean;
    hasBeenChained: boolean;
    wasChainFailure: boolean;
    iffyEntry?: string;
    iffyWordKey?: string;
    // <squareKey, letters>
    calculatedSquares: Map<string, string[]>;
    // <wordKey, entries>
    calculatedEntries: Map<string, string[]>;
}
