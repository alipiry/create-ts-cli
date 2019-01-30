#!/usr/bin/env node

import fs from 'fs';

export function init(): void {
	if (!fs.existsSync('example')) fs.mkdirSync('example');

// temp solution
	fs
		.writeFile(
			'example/.gitignore',
			'',
			(err) => {
				if (err) throw err;
			}
		)

	fs
		.writeFile(
			'example/package.json',
			'',
			(err) => {
				if (err) throw err;
			}
		)
	fs
		.writeFile(
			'example/tsconfig.json',
			'',
			(err) => {
				if (err) throw err;
			}
		)

	console.log('Initilize ts-cli');
}
