# cat-breeds-service
A simple express server application that returns the top 5 cat breeds that are child friendly, stranger friendly and dog friendly using https://api.thecatapi.com/.

## Getting Started

To run this project, follow these steps:
- Go to the root of this application and create a `.env` file.
- Copy everything from `.env.example` into `.env` and replace the value of `CAT_API_KEY`
- Now, on terminal run `npm run start` which will start the express server at the port 3000. The service should now be up at http://localhost:3000/. 

- Go to  http://localhost:3000/api-docs/ to see if you can see the swagger documentation
- If you are able to see the Swagger doc, it means the server is up and running
- You can now make requests to the endpoint for e.g. http://localhost:3000/cat-breeds/top-five?type=combined

### Testing

For the demonstration purpose, this project is using `mocha` and `chai` for unit testing

- The tests can be run by using the command `npm run test`.

### Documentation

The documentation for the endpoints in this service can be found on http://localhost:3000/api-docs/. Please see the Swagger doc demo below: 

![SwaggerDemoGif](swaggerDemo.gif?raw=true "Gif")

### Project Built Using

- git
- Node.js v15.3.0
- NPM
- Axios
- Swagger
- ExpressJS Framework for NodeJS v4.16.1
- Mocha and Chai for Unit Testing

### Acknowledgements

- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Node.js Documentation](https://nodejs.org/docs/latest-v12.x/api/)
- [Express For Node.js Documentation](https://expressjs.com/en/api.html)
- [Swagger](https://swagger.io/docs/)
- [Axios](https://www.npmjs.com/package/axios)
- [TheCatAPI](https://docs.thecatapi.com/)