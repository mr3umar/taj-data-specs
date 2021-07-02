
export namespace GetItem {

        export type Params = {
                collectionKey: string,
                id: string,
                tranId?: string
        }
        export type Result = {
                item?: any,
                error?: string
        }
}
