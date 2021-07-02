export declare enum Services {
    CREATE_COLLECTION = "create-collection"
}
export declare const CLOUD_ID = "cloud:0";
export declare enum CLASSES {
    Cloud = "Cloud",
    AppInstance = "AppInstance",
    Collection = "Collection",
    Link = "Link",
    Transaction = "Transaction"
}
export declare enum COLLECTION_IDS {
    Cloud = "Cloud",
    AppInstance = "AppInstance",
    Collection = "Collection",
    Link = "Link",
    Transaction = "Transaction"
}
export declare enum Links {
    CLOUD_APP = "cloud-app",
    CLOUD_COLLECTION = "cloud-collection",
    CLOUD_LINK = "cloud-link"
}
export declare type AppInstance = {
    class: CLASSES.AppInstance;
    collection: COLLECTION_IDS.AppInstance;
    id: string;
    collections: {
        [key: string]: {
            id: string;
            class: string;
        };
    };
    links: {
        [key: string]: {
            id: string;
        };
    };
};
export declare type Link = {
    collectionId: string;
    key: string;
    id: string;
    aTitle: string;
    bTitle: string;
    a: string[];
    b: string[];
};
export declare type Collection = {
    id: string;
    collectionId: string;
    key: string;
    class: string;
};
export declare type LinkListItem = {
    key: string;
    link: string;
    fromId: string;
    fromCollectionId: string;
    toId: string;
    toCollectionId: string;
    point: string;
    tranId?: string;
};
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
    id?: string;
    collectionKey: string;
    value: any;
};
export declare type ChangeRemoveData = {
    id: string;
    collectionKey: string;
};
export declare type ChangeRemovePropertyData = {
    id: string;
    collectionKey: string;
    propertyKey: string;
};
export declare type ChangeRemoveAllByLinkData = {
    link: string;
    id: string;
    propertyKey: string;
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