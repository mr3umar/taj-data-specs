import { LoadList } from "./load-list"
import { Link } from "./types"

export namespace LoadLinks {

        export type Params = {
                fromKey?:       string, 
                limit?:         number, 
                sort?:          "ASC" | "DESC"
        }

        export type Result = {
                listId: string,
                size: number,
                items: Link[],
                nextKey: string | null
        }
}