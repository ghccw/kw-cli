#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var pagekageStr = fs_1.readFileSync('./package.json');
var version;
try {
    version = JSON.parse(pagekageStr.toString()).version;
}
catch (error) { }
var program = require("commander");
program
    .version(version, '-v, --version')
    .description('Create App By KW')
    .command('html')
    .action(function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg);
});
program.parse(process.argv);
