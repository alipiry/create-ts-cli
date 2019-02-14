import program from 'commander';

import { init } from './init';
const pkg = require('../package.json');

export function options(): void {
  program.version(pkg.version);

  program
    .command('init <dir>')
    .alias('i')
    .description('Initilize your cli app')
    .action((dir) => init(dir));

  program.parse(process.argv);

  if (!process.argv.slice(2).length) program.help();
}
