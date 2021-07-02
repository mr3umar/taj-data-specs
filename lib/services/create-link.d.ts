export declare namespace CreateLink {
    type Params = {
        key: string;
        a: string[];
        b: string[];
        aTitle: string;
        bTitle: string;
    };
    type Result = {
        output?: {
            linkId: string;
        };
        error?: {
            output?: {};
            error?: string;
        };
    };
}
//# sourceMappingURL=create-link.d.ts.map