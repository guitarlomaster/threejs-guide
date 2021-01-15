In order to use server again:

 - install these packages to dev dependencies:
 
        "@types/express": "^4.17.11",
        "concurrently": "^5.3.0",
        "nodemon": "^2.0.7",
        
 - install these packages to dependencies:
 
        "express": "^4.17.1",
 
 - replace existing package.json scripts with:
        
        "s-build": "tsc -p ./src/server",
        "build": "webpack --config src/client/webpack.prod.js",
        "start": "concurrently -k \"webpack --config src/client/webpack.prod.js --watch --poll=1000\" \"tsc -p ./src/server -w\" \"nodemon dist/server/server.js\""
