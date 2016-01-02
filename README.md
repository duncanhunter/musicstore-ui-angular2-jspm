# Music Store UI with Angular2 and JSPM

## 1. Initialize application

Install jspm globally
```bash
npm install -g jspm
```

Locally install latest packages
```bash
npm install
```

Launch app in browser
```bash
npm start
``` 

## 2. jspm bundling
```bash
npm run bundle
```

## 3. Show module relationships
Execute in browser dev tools console
```javascript
showModuleRelationships("includes this string from module path name", "excludes this string from module path name")
```

## 4. Run unit tests with http://wallabyjs.com/
Install wallabyjs for your IDE
Start wallabyjs
Browse to any unit tests in the app folder ending in .spec

## Todo
1. Sort css order
2. Add more angular specfic unit testing
3. Add gulp, linting and move bundling scripts with error handling

