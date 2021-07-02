import { Collection } from "./types"

export namespace GetCollectionByKey {

        export type Params = {
                key: string
        }
        export type Result = {
                output?: {
                        collection: Collection
                },
                error?: string
        }
}
