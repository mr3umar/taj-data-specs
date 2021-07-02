

export enum Services {
        CREATE_COLLECTION = "create-collection",
}

export const CLOUD_ID = "cloud:0";
export enum CLASSES {
        Cloud = "Cloud",
        AppInstance = "AppInstance",
        Collection = "Collection",
        Link = "Link",
        Transaction = "Transaction"
}
export enum COLLECTION_IDS {
        Cloud = "Cloud",
        AppInstance = "AppInstance",
        Collection = "Collection",
        Link = "Link",
        Transaction = "Transaction"
}
export enum Links {
        CLOUD_APP = "cloud-app",
        CLOUD_COLLECTION = "cloud-collection",
        CLOUD_LINK = "cloud-link",
}

export type AppInstance = {
        class: CLASSES.AppInstance,
        collection: COLLECTION_IDS.AppInstance,
        id: string,
        collections: {
                [key: string]: {
                        id: string,
                        class: string
                }
        },
        links: {
                [key: string]: {
                        id: string
                }
        }
}
export type Link = {
        collectionId: string,
        key: string,
        id: string,
        aTitle: string,
        bTitle: string,
        a: string[],
        b: string[]
}
export type Collection = {
        id: string,
        collectionId: string,
        key: string,
        class: string
}
export type LinkListItem = {
        key: string,
        link: string, 
        fromId: string, 
        fromCollectionId: string, 
        toId: string, 
        toCollectionId: string, 
        point: string,
        tranId?: string
}

export type Change = {
        changeId?: string,
        tranId?: string,
        type: string,
        clientId: string,
        data?: any & ChangeMergeData & ChangeCreateData,
        sync: boolean
    }

    
export type ChangeMergeData = {
        id: string,
        collectionKey: string
        value: any
    }
    export type ChangeCreateData = {
        id?: string,
        collectionKey: string
        value: any
    }
    export type ChangeRemoveData = {
        id: string,
        collectionKey: string
    }
    export type ChangeRemovePropertyData = {
        id: string,
        collectionKey: string
        propertyKey: string
    }
    export type ChangeRemoveAllByLinkData = {
        link: string,
        id: string
        propertyKey: string
    }
    export type ChangeLinkData = {
        linkKey: string,
        aCollectionKey: string
        aId: string,
        bCollectionKey: string,
        bId: string
    }
    export type ChangeUnlinkData = {
        linkKey: string,
        aCollectionKey: string
        aId: string,
        bCollectionKey: string,
        bId: string
    }