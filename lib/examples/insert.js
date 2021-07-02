"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const client_1 = require("./client");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const developerClient = client_1.createClient(config_1.HOST_NAME, config_1.CLIENT_CLOUD_ID, config_1.CLIENT_APP_INST_ID);
        const result1 = yield developerClient("apply-change", {
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
        });
        if (result1.error) {
            console.error(result1.error);
        }
        else
            console.log(`user 'user-001' created`);
        const result2 = yield developerClient("apply-change", {
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
        });
        if (result2.error) {
            console.error(result2.error);
        }
        else
            console.log(`comment 'comment-001' created`);
        const result3 = yield developerClient("apply-change", {
            "type": "link",
            "data": {
                "linkKey": "user-comment",
                "aCollectionKey": "users",
                "aId": "user-001",
                "bCollectionKey": "comments",
                "bId": "comment-001"
            },
            "clientId": "client-001",
            "sync": false
        });
        if (result3.error) {
            console.error(result3.error);
        }
        else
            console.log(`link between 'user-001' and 'comment-001' created`);
    });
}
run();
