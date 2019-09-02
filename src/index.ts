#!/usr/bin/env node

import { readFileSync } from 'fs';
const pagekageStr = readFileSync('./package.json');
let version;
try {
  version = JSON.parse(pagekageStr.toString()).version;
} catch (error) {}

// 处理用户输入的命令
import * as program from 'commander';
program
  .version(version, '-v, --version')
  .description('Create App By KW')
  .command('html')
  .action((...arg) => {
    console.log(arg);
  });
program.parse(process.argv);
