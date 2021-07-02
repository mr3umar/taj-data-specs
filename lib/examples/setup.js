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
const adminClient = client_1.createClient(config_1.HOST_NAME, config_1.CLOUD_ID, config_1.APP_INST_ID);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield adminClient("create-cloud", {
            "id": config_1.CLIENT_CLOUD_ID,
            "key": config_1.CLIENT_CLOUD_KEY
        });
        if (result1.error)
            console.error(result1.error);
        else
            console.log(`Cloud created`);
        const developerClient = client_1.createClient(config_1.HOST_NAME, config_1.CLIENT_CLOUD_ID, config_1.CLIENT_APP_INST_ID);
        var result2 = yield developerClient("create-app", {});
        if (result2.error) {
            console.error(result2.error);
        }
        else
            console.log(`App created`);
        const result3 = yield developerClient("create-collection", {
            "key": "users",
            "class": "User"
        });
        if (result3.error) {
            console.error(result3.error);
        }
        else
            console.log(`collection 'users' created`);
        const result4 = yield developerClient("create-collection", {
            "key": "comments",
            "class": "Comment"
        });
        if (result4.error) {
            console.error(result4.error);
        }
        else
            console.log(`collection 'comments' created`);
        const result5 = yield developerClient("create-link", {
            "key": "user-comment",
            "a": ["users"],
            "b": ["comments"],
            "aTitle": "User",
            "bTitle": "Comments",
        });
        if (result5.error) {
            console.error(result5.error);
        }
        else
            console.log(`link 'user-comment' created`);
    });
}
run();
