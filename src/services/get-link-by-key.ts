import { Link } from "./types"

export namespace GetLinkByKey {

        export type Params = {
                key: string
        }
        export type Result = {
                output?: {
                        link: Link
                },
                error?: string
        }
}
