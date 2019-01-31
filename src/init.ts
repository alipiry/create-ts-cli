import fs from 'fs';
import { filesToWrite } from './consts';

export function init(dir: string): void {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir);
	
	filesToWrite.forEach(index => {
		fs.writeFile(
			`${dir}/${index.name}`,
			index.data,
			'utf8',
			err => {
				if (err) throw err;
			}
		);
	});

	console.log('Initilize ts-cli');
}
