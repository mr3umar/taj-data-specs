export declare namespace LoadCollection {
    type Params = {
        collectionId: string;
        fromKey?: string;
        limit?: number;
        sort?: "ASC" | "DESC";
        tranIds?: string[];
    };
    type Result = {
        size: number;
        items: any[];
        nextKey: string | null;
    };
}
//# sourceMappingURL=load-collection.d.ts.map