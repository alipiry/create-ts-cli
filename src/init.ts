import fs from 'fs';
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

  console.log('Initilize ts-cli');
}
