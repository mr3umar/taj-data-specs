import { HOST_NAME, CLIENT_CLOUD_ID, CLIENT_CLOUD_KEY, CLIENT_APP_INST_ID, APP_INST_ID, CLOUD_ID } from "./config"
import { createClient } from "./client"
import { CreateCloud } from "../services/create-cloud"
import { CreateApp } from "../services/create-app"
import { CreateCollection } from "../services/create-collection"
import { CreateLink } from "../services/create-link"

const adminClient = createClient(HOST_NAME, CLOUD_ID, APP_INST_ID)

async function run() {

        // 1.1- configure cloud and app IDs in proxy.
        // 1.2- Setup Cloud DB by admin
        const result1 = await adminClient<CreateCloud.Params, CreateCloud.Result>("create-cloud", {
                "id": CLIENT_CLOUD_ID,
                "key": CLIENT_CLOUD_KEY
        })
        if(result1.error)
                console.error(result1.error)
        else
                console.log(`Cloud created`)

        // 2- Setup App Instance by Developer App
        const developerClient = createClient(HOST_NAME, CLIENT_CLOUD_ID, CLIENT_APP_INST_ID)
        

        // 2.1- Creating App Instance
        var result2 = await developerClient<CreateApp.Params, CreateApp.Result>("create-app", {}) 
        if(result2.error){
                console.error(result2.error)
        }
        else
                console.log(`App created`)


        // 2.2- Creating users collection
        const result3 = await developerClient<CreateCollection.Params, CreateCollection.Result>("create-collection", {
                "key": "users",
		"class": "User"
        }) 
        if(result3.error){
                console.error(result3.error)
        }
        else
                console.log(`collection 'users' created`)


        // 2.3- Creating comments collection
        const result4 = await developerClient<CreateCollection.Params, CreateCollection.Result>("create-collection", {
                "key": "comments",
		"class": "Comment"
        }) 
        if(result4.error){
                console.error(result4.error)
        }
        else
                console.log(`collection 'comments' created`)


        // 2.3- Creating link between users and comments
        const result5 = await developerClient<CreateLink.Params, CreateLink.Result>("create-link", {
                "key": "user-comment",
		"a": ["users"],
		"b": ["comments"],
                "aTitle": "User",
                "bTitle": "Comments",
        }) 
        if(result5.error){
                console.error(result5.error)
        }
        else
                console.log(`link 'user-comment' created`)

}


run()