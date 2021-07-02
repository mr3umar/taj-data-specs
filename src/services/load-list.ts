import { LinkListItem } from "./types"

export namespace LoadList {


        export type Params = {
                link: string, 
                aCollectionId: string,
                aId: string, 
                fromKey?: string, 
                limit?: number, 
                sort?: "ASC" | "DESC", 
                tranIds?: string[]
        }

        export type Result = {
                listId: string,
                size: number,
                items: LinkListItem[],
                nextKey: string | null
        }
}