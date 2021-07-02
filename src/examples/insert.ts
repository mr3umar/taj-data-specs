import { HOST_NAME, CLIENT_CLOUD_ID, CLIENT_APP_INST_ID } from "./config"
import { createClient } from "./client"
import { ChangeLinkData } from "../services/types"
import { ApplyChange } from "../services/apply-change"

async function run() {

        const developerClient = createClient(HOST_NAME, CLIENT_CLOUD_ID, CLIENT_APP_INST_ID)

        // 1- Create new user with specific ID
        const result1 = await developerClient<ApplyChange.Params, ApplyChange.Result>("apply-change", {
                "type": "create",
                "data": {
                        "collectionKey": "users",
                        "id": "user-001",
                        "value": {
                                "name": "user 1"
                        }
                },
                "clientId": "client-001",
                "sync": false
        })
        if(result1.error){
                console.error(result1.error)
        }
        else
                console.log(`user 'user-001' created`)


        // 2- Create new comment with specific ID
        const result2 = await developerClient<ApplyChange.Params, ApplyChange.Result>("apply-change", {
                "type": "create",
                "data": {
                        "collectionKey": "comments",
                        "id": "comment-001",
                        "value": {
                                "content": "Thank you"
                        }
                },
                "clientId": "client-001",
                "sync": false
        })
        if(result2.error){
                console.error(result2.error)
        }
        else
                console.log(`comment 'comment-001' created`)

        // 3- Link between recent created comment and user
        const result3 = await developerClient<ApplyChange.Params, ApplyChange.Result>("apply-change", {
                "type": "link",
                "data": {
                        "linkKey": "user-comment",
                        "aCollectionKey": "users",
                        "aId": "user-001",
                        "bCollectionKey": "comments",
                        "bId": "comment-001"
                } as ChangeLinkData,
                "clientId": "client-001",
                "sync": false
        })
        if(result3.error){
                console.error(result3.error)
        }
        else
                console.log(`link between 'user-001' and 'comment-001' created`)
}


run()