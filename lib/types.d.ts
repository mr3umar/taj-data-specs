export declare type Change = {
    changeId?: string;
    tranId?: string;
    type: string;
    clientId: string;
    data?: any & ChangeMergeData & ChangeCreateData;
    sync: boolean;
};
export declare type ChangeMergeData = {
    id: string;
    collectionKey: string;
    value: any;
};
export declare type ChangeCreateData = {
    id: string;
    collectionKey: string;
    value: any;
};
export declare type ChangeLinkData = {
    linkKey: string;
    aCollectionKey: string;
    aId: string;
    bCollectionKey: string;
    bId: string;
};
export declare type ChangeUnlinkData = {
    linkKey: string;
    aCollectionKey: string;
    aId: string;
    bCollectionKey: string;
    bId: string;
};
//# sourceMappingURL=types.d.ts.map