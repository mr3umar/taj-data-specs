import { Link } from "./types";
export declare namespace LoadLinks {
    type Params = {
        fromKey?: string;
        limit?: number;
        sort?: "ASC" | "DESC";
    };
    type Result = {
        listId: string;
        size: number;
        items: Link[];
        nextKey: string | null;
    };
}
//# sourceMappingURL=load-links.d.ts.map