#!/usr/bin/env node

import program from 'commander';
import chalk from 'chalk';
import { init } from './init';

export function options(): void {
	program
		.version('1.0.0')
		.command('init [package]')
		.action(init)
		.parse(process.argv);
}
