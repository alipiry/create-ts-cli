"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var init_1 = require("./init");
var pkg = require('../package.json');
function options() {
    commander_1.default.version(pkg.version);
    commander_1.default
        .command('init <dir>')
        .alias('i')
        .description('Initilize your cli app')
        .action(function (dir) { return init_1.init(dir); });
    commander_1.default.parse(process.argv);
    if (!process.argv.slice(2).length)
        commander_1.default.help();
}
exports.options = options;
