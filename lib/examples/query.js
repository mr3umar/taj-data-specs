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
        var result = yield developerClient("get-item", {
            "collectionKey": "users",
            "id": "user-001"
        });
        if (result.error) {
            console.error(result.error);
        }
        else
            console.log(`Item: ${JSON.stringify(result.item)}`);
    });
}
run();
