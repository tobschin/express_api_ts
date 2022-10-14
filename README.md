# Express API mit Typescript

## Start:
```sh
$ npm start
```

## Testing
Doku : https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/

### Testcontainer Mongoose:
https://snyk.io/advisor/npm-package/testcontainers-mongoose
npm package: testcontainers-mongoose


```sh
$ npm test
```

## Docker-compose
```sh
# bauen des images, nach aenderungen!
$ docker-compose build --no-cache 
# starten des eben gebauten images
$ docker-compose up


## oder beides auf einmal
$ docker-compose up --build
```