# quick-write
A blog post site built using Vue.JS, Express.JS and Postgres

## Development Enviroment

1. Working on a Windows 11 OS
2. Using GitBash as main terminal program
3. Using github as the origin repositry location
4. Using VSCode as main IDE
5. Starting with node version `v21.7.1`
6. Starting with npm version `v10.5.0`
7. Starting with eslint version `v8.57.0`
8. Starting with vue (using vue-cli) version `v5.0.8`


## Project Initlisation Steps

1. Start new repositry on Github named `quick-write`. Ensuring to use the `Node` preselect when opting for a `.gitignore` file.
2. Clone repositry to local machine using `git clone` command
3. Enter into the newly created `quick-write` directry using `cd quick-write` command
4. Creat a `client` and `server` directory using the `mkdir` commmand.

## Client Initlisation
1. Enter into client directroy `cd client`
2. Run `vue create .` to trigger the vue-cli.
3. Accept the current directroy `client` location suggestion.
3. Select `Vue 3` with `babel` and `eslint`.
4. Sit back and wait for it to install.
5. Notice now the `package.json` file outlining the packages installed. Contained in `node_modules` directory.
7. Notice the `babel` config directory
8. Note there is no Vue router installed yet. To install the router use the following command `npm install vue-router@4`
9. Add the following to the eslint rules in the package.json file.
```    
"rules":  {
      "no-unused-vars": "error",
      "no-undef": "error",
      "semi": ["error", "always"],
      "no-console": "error",
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "quotes": ["error", "single"],
      "no-extra-semi": "error",
      "no-mixed-spaces-and-tabs": "error",
      "comma-dangle": ["error", "never"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "eol-last": ["error", "always"]
    }
```

## Server Initilsation
to be continued