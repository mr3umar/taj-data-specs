
export namespace CreateCollection {

        export type Params = {
                key: string,
                class: string
        }
        export type Result = {
                output?: {
                        collectionId: string
                },
                error?: string
        }
}
