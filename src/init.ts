import fs from 'fs';
import chalk from 'chalk';

import { filesToWrite } from './consts';

export function init(dir: string): void {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  if (!fs.existsSync(`${dir}/src`)) fs.mkdirSync(`${dir}/src`);

  filesToWrite.map(index => {
    fs.writeFile(
      `${dir}/${index.name}`,
      index.data,
      'utf8',
      err => {
        if (err) throw err;
      }
    );
  });

  fs.rename(
    `${dir}/index.ts`,
    `${dir}/src/index.ts`,
    err => {
      if (err) throw err;
    }
  );

  console.log(chalk.red.bold('ts-cli package initilized!'));
  console.log(chalk.blue.bold('Change your current working dir to the project'));
  console.log(chalk.green.bold('Run `yarn` to install dependencies of your project'));
  console.log(chalk.yellow.bold('Simply `yarn dev` to run your cli app'));
  console.log(chalk.cyan.bold('For production build, use `yarn build`'));

}
