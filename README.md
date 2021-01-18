# Foodies

This is project was created as a technical test for a job application.

You can check it here: https://elaniin-tecnical-test.web.app/

## Build Setup

This project was created using node `v14.15.4`. And is deployed using Firebase with functions and hosting. Also has a continous deployment stage using github actions.

### Development

To run the project you need to add .env file to the project root directory with the google maps key
`MAPS={your key}`

Then run the following commands for a development environment

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

### Build

To run the project you need to add .env file to the project root directory with the google maps key
`MAPS={your key}`

For a production environment you can run:

```bash
# install dependencies
$ yarn install

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
