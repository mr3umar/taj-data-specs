
export namespace CreateLink {

        export type Params = {
                key: string,
                a: string[],
                b: string[],
                aTitle: string,
                bTitle: string
        }
        export type Result = {
                output?: {
                        linkId: string
                },
                error?: {
                        output?: {},
                        error?: string
                }
        }
}
