#!/usr/bin/env node

import program from 'commander';
import chalk from 'chalk';
import { init } from './init';
import pkg from '../package.json';


export function options(): void {
	program
		.version(pkg.version)
		.command('init')
		.action(init)
		.parse(process.argv);

	if (!process.argv.slice(2).length) program.help();
}
