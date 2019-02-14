# [create-ts-cli](https://github.com/alipiry/create-ts-cli)
Create your `nodeJS` CLI apps and program them in `TypeScript` with no configuration troubles.

## Demo
[![asciicast](https://asciinema.org/a/227612.svg)](https://asciinema.org/a/227612)

## Requirements
To use this package, make sure you have `yarn` installed on your machine:

macOS:
```bash
  > brew install yarn
```
Linux:
```bash
  > curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```bash
  > sudo apt-get update && sudo apt-get install yarn
```

## Installation
Install package:
```bash
  > yarn global add @alipiry/create-ts-cli
```

## Usage
Run following commands to create your ts-cli app:
```bash
  > create-ts-cli init my-cli-app
  > cd my-cli-app
  > yarn
  > yarn dev
```

## Development
Clone the project:
```bash
  > git clone git@github.com:alipiry/create-ts-cli.git
```

Install dependencies and dev dependencies:
```bash
  > cd tite-cli/
  > yarn
```

### Running
```bash
  > yarn dev init example
```

### Production
```bash
  > yarn build
```

## Author
[Ali Piry](https://github.com/alipiry)

## LICENSE
MIT
