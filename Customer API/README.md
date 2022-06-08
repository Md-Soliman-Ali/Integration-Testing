# Customer API

- First, you need to be Download & install Postman.
- After that, Download & install Nodejs.
- Clone or Download Customer API Repository & import that collection file into your Postman.
- Open Powershell window here (Customer API Folder) using shift + right-click. 
- Check prerequisite install node version using ( node --version )
- Now need to install Newman using 

```sh
npm init -y
npm i newman
```

- Run report using Newman: 

```sh
npx newman run .\collection\CustomerCollection.json -e .\collection\CustomerEnv.json -n 1
  
[Here -e = Environment, -n = Iteration Number]
```

- Now, if you want To generate an HTML report: 

```sh
 npm i newman-reporter-htmlextra 
```
- Need to create a report.js

```sh
 package.json ( "scripts": { "test": "node report.js" } )
 ```
 
 ```sh
 Powershell: npm test
 ```