# swagger-typescript-api  

[![Greenkeeper badge](https://badges.greenkeeper.io/acacode/swagger-typescript-api.svg)](https://greenkeeper.io/)
[![NPM badge](https://img.shields.io/npm/v/swagger-typescript-api.svg)](https://www.npmjs.com/package/swagger-typescript-api)

<img src="https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/swagger-typescript-api-logo.png" align="left"
     title="swagger-typescript-api logo by js2me" width="93" height="180">

Generate api via swagger scheme.  
Supports OA 3.0, 2.0, JSON, yaml  
Generated api module use [**Fetch Api**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests.  

<br>
<br>

Any questions you can ask [**here**](https://github.com/acacode/swagger-typescript-api/issues) or in [**our slack**](https://join.slack.com/t/acacode/shared_invite/enQtOTQ5ODgyODQzMzYwLWYxOGI1MzQ3Yzg1ZWI5ZTI5NzNiZjExZTE5OWI1YjQ4NjBiNTk4NWVlNjM5YmU1ZWI2ZDkyMzZkZGIxNjA5NTQ)(**#swagger-typescript-api** channel)
  
<br>  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/components-converter-example.jpg)  

## 👀 Examples  

All examples you can find [**here**](https://github.com/acacode/swagger-typescript-api/tree/master/tests)  

## 🛑 It is the latest version on mustache templates   
Next versions 4.0.0+ will use the [ETA](https://eta.js.org/docs/syntax) templates.  
If you want to create fork with `mustache` templates use `mustache-latest` branch  

## 📄 Usage  

```muse
Usage: sta [options]
Usage: swagger-typescript-api [options]

Options:
  -v, --version                 output the current version
  -p, --path <path>             path/url to swagger scheme
  -o, --output <output>         output path of typescript api file (default: "./")
  -n, --name <name>             name of output typescript api file (default: "Api.ts")
  -t, --templates <path>        path to folder containing templates
  -d, --default-as-success      use "default" response status code as success response too.
                                some swagger schemas use "default" response status code
                                as success response type by default. (default: false)
  -r, --responses               generate additional information about request responses
                                also add typings for bad responses (default: false)
  --union-enums                 generate all "enum" types as union types (T1 | T2 | TN) (default: false)
  --route-types                 generate type definitions for API routes (default: false)
  --no-client                   do not generate an API class
  --js                          generate js api module with declaration file (default: false)
  --module-name-index <number>  determines which path index should be used for routes separation (default: 0)
                                (example: GET:/fruites/getFruit -> index:0 -> moduleName -> fruites)
  -h, --help                    display help for command
```

Also you can use `npx`:  
```
 npx swagger-typescript-api -p ./swagger.json -o ./src -n myApi.ts
```

You can use this package from nodejs:
```js
const { generateApi } = require('swagger-typescript-api');

// example with url  
generateApi({
  name: "MySuperbApi.ts", // name of output typescript file
  url: 'http://api.com/swagger.json', // url where located swagger schema
})
  .then(sourceFile => fs.writeFile(path, sourceFile))
  .catch(e => console.error(e))

// example with local file  
generateApi({
  name: "ApiModule.ts", // name of output typescript file
  input: resolve(process.cwd(), './foo/swagger.json') // path to swagger schema
})
  .then(sourceFile => fs.writeFile(path, sourceFile))
  .catch(e => console.error(e))

// example with parsed schema  
generateApi({
  name: "ApiModule.ts", // name of output typescript file
  spec: {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Swagger Petstore",
    },
    host: "petstore.swagger.io",
    basePath: "/api",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      // ...
    }
    // ...
  }
})
  .then(sourceFile => fs.writeFile(path, sourceFile))
  .catch(e => console.error(e))

```


## 💎 options   
### **`--templates`**  
This option should be used in cases when you don't want to use default `swagger-typescript-api` output structure  
How to use it:  
1. copy [**swagger-typescript-api templates**](https://github.com/acacode/swagger-typescript-api/tree/mustache-latest/src/templates/defaults) into your place in project  
1. add `--templates PATH_TO_YOUR_TEMPLATES` option  
2. modify [Mustache](https://mustache.github.io/) templates as you like  

### **`--module-name-index`**  
This option should be used in cases when you have api with one global prefix like `/api`   
Example:   
`GET:/api/fruits/getFruits`  
`POST:/api/fruits/addFruits`  
`GET:/api/vegetables/addVegetable`  
with `--module-name-index 0` Api class will have one property `api`  
When we change it to `--module-name-index 1` then Api class have two properties `fruits` and `vegetables`  


## 📄 Mass media  

- [Why Swagger schemes are needed in frontend development ?](https://dev.to/js2me/why-swagger-schemes-are-needed-in-frontend-development-2cb4)  
- [Migration en douceur vers TypeScript](https://www.premieroctet.com/blog/migration-typescript/)  


## 🚀 How it looks  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/npx.gif)  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/auth-example.gif)  

![](https://raw.githubusercontent.com/acacode/swagger-typescript-api/master/assets/typings1.gif)  


## 🛠️ Contribution  

You can manually check your changes at schemas in `tests` folder before create a PR.  
To do that have scripts:  
    - `npm run generate` - generate API modules from schemas in `tests` folder  
    - `npm run validate` - validate generated API modules via TypeScript  

## 📝 License  
Licensed under the [MIT License](https://github.com/acacode/swagger-typescript-api/blob/master/LICENSE).
