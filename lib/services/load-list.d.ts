import { LinkListItem } from "./types";
export declare namespace LoadList {
    type Params = {
        link: string;
        aCollectionId: string;
        aId: string;
        fromKey?: string;
        limit?: number;
        sort?: "ASC" | "DESC";
        tranIds?: string[];
    };
    type Result = {
        listId: string;
        size: number;
        items: LinkListItem[];
        nextKey: string | null;
    };
}
//# sourceMappingURL=load-list.d.ts.map