import { Change } from "./types"

export namespace ApplyChange {

        export type Params = Change
        export type Result = {
                output?: {},
                error?: string
        }
}

