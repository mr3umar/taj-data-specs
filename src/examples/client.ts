
import * as https from "https"
import * as URL from "url"

export const createClient = (url: string, cloudId: string, appInstId: string) => {


        const parsedUrl = URL.parse(url, true);;

        return <ParamsT, ResultT>(service: string, params: ParamsT) => {

                return new Promise<ResultT>((res) => {
                        const json = {
                                name: service,
                                params
                        }
                        const body = JSON.stringify(json)
                        https.request({
                                hostname: parsedUrl.hostname,
                                port: parsedUrl.port,
                                method: "POST",
                                path: `${parsedUrl.path}/api/${service}`,
                                headers: {
                                        "cloud-id": cloudId,
                                        "app-instance-id": appInstId,
                                        "Content-Type": "application/json",
                                        "Content-Length": Buffer.byteLength(body)                        
                                },
                                rejectUnauthorized: false
                                
                        }, (resp) => {
                                let data = '';
                        
                                resp.on('data', (chunk) => {
                                data += chunk;
                                });
                        
                                resp.on('end', () => {
                                        try{
                                                const json = JSON.parse(data)
                                                res(json)
                                        }
                                        catch(err){
                                                throw new Error(`Invalid JSON response: ${data}`)
                                        }
                                });
                        })
                        .end(body)
                })
        }
}