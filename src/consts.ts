type File = {
  name: string,
  data: string
};

export const filesToWrite: Array<File> = [
  {
    name: '.gitignore',
    data: `
# Created by https://www.gitignore.io/api/osx,node
# Edit at https://www.gitignore.io/?templates=osx,node

### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

### OSX ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
B
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

#
`
  },
  {
    name: 'package.json',
    data: `
{
  "name": "ts-cli",
  "version": "1.0.0",
  "description": "TS CLI",
  "main": "./lib/index.js",
  "bin": {
    "example": "./lib/index.js"
  },
  "keywords": [
    "cli",
    "typescript",
    "javascript",
    "nodejs"
  ],
  "license": "MIT",
  "scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc -p ."
  },
  "devDependencies": {
    "@types/node": "latest",
    "ts-node": "latest",
    "typescript": "latest",
    "tslint": "latest",
    "tslint-config-standard": "latest"
  }
}
`
  },
  {
    name: 'tsconfig.json',
    data: `
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6", "es2015", "dom"],
    "declaration": true,
    "outDir": "lib",
    "rootDir": "src",
    "strict": true,
    "types": ["node"],
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
`
  },
  {
    name: 'index.ts',
    data: `#!/usr/bin/env node

console.log('you must edit src/index.ts to program your app');
`
  },
  {
    name: 'tslint.json',
    data: `
{
  "extends": "tslint-config-standard",
  "rules": {
    "semicolon": [true, "always"],
    "indent": [true, "spaces"],
    "ter-indent": [true, 2],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "ignore"
    }]
  }
}
`
  },
  {
    name: 'LICENSE',
    data: `MIT License

Copyright (c) 2019 Author

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
  }
];
