"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var consts_1 = require("./consts");
function init(dir) {
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir);
    if (!fs_1.default.existsSync(dir + "/src"))
        fs_1.default.mkdirSync(dir + "/src");
    consts_1.filesToWrite.forEach(function (index) {
        fs_1.default.writeFile(dir + "/" + index.name, index.data, 'utf8', function (err) {
            if (err)
                throw err;
        });
    });
    fs_1.default.rename(dir + "/index.ts", dir + "/src/index.ts", function (err) {
        if (err)
            throw err;
    });
    console.log('Initilize ts-cli');
}
exports.init = init;
