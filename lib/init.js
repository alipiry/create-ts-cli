"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
var shelljs_1 = __importDefault(require("shelljs"));
var consts_1 = require("./consts");
function initilizeGit(dir) {
    shelljs_1.default.cd(dir);
    shelljs_1.default.exec('git init');
    shelljs_1.default.cd('..');
}
function init(dir) {
    if (!fs_1.default.existsSync(dir))
        fs_1.default.mkdirSync(dir);
    if (!fs_1.default.existsSync(dir + "/src"))
        fs_1.default.mkdirSync(dir + "/src");
    initilizeGit(dir);
    consts_1.filesToWrite.map(function (index) {
        fs_1.default.writeFile(dir + "/" + index.name, index.data, 'utf8', function (err) {
            if (err)
                throw err;
        });
    });
    fs_1.default.rename(dir + "/index.ts", dir + "/src/index.ts", function (err) {
        if (err)
            throw err;
    });
    console.log(chalk_1.default.red.bold('ts-cli package initilized!'));
    console.log(chalk_1.default.blue.bold('Change your current working dir to the project'));
    console.log(chalk_1.default.green.bold('Run `yarn` to install dependencies of your project'));
    console.log(chalk_1.default.yellow.bold('Simply `yarn dev` to run your cli app'));
    console.log(chalk_1.default.cyan.bold('For production build, use `yarn build`'));
}
exports.init = init;
