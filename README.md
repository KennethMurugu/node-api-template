# Setting Up

This template uses Express to build the API. A Typescript + Nodemon combination will be used to run the server.

## Install dependencies

Use `npm install` to install dependencies.

## Typescript

Install typescript globally. Source files found in `src` are written in Typescript and will be compiled to Javascript and placed in the `dist` directory.

You can make changes to the Typescript configuration via `tsconfig.json`.

## Nodemon

Nodemon will be used to execute the `.js` files in `dist`.

You can make changes to the Nodemon configuration via `nodemon.json`.

# Running everything

Running the server will require two seperate terminal windows: one to run `tsc` which will watch for changes in the `.ts` files found in `src`, compile them to `.js` and place them in `dist`; the other to run nodemon which watches for changes in `dist` and re-runs the server automatically whenever there are any changes.

Nodemon will use the entry point defined in the `main` field in `package.json` to run the server.
