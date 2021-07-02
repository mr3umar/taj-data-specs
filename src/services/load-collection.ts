import { type } from "os";

export namespace LoadCollection{
        
        export type Params = {
                collectionId: string, 
                fromKey?: string, 
                limit?: number, 
                sort?: "ASC" | "DESC", 
                tranIds?: string[]
        }

        export type Result = {
                size: number,
                items: any[],
                nextKey: string | null
        }
}