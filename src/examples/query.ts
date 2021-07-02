
import { HOST_NAME, CLIENT_CLOUD_ID, CLIENT_APP_INST_ID } from "./config"
import { createClient } from "./client"
import { GetItem } from "../services/get-item"

async function run() {

        const developerClient = createClient(HOST_NAME, CLIENT_CLOUD_ID, CLIENT_APP_INST_ID)

        var result = await developerClient<GetItem.Params, GetItem.Result>("get-item", {
                "collectionKey": "users",
                "id": "user-001"
        }) 
        if(result.error){
                console.error(result.error)
        }
        else
                console.log(`Item: ${JSON.stringify(result.item)}`)
}

run()


