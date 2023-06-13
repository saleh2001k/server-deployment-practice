# Express Server README

- link to the website: https://server-deployment-practice-4r1h.onrender.com/
This is a simple Express server implementation that includes middleware for stamping requests, handling authentication, and error handling. It provides two routes: the home route ("/") and a bad request route ("/bad").

## Prerequisites

- Node.js installed on your machine

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

The server will be up and running on the specified port, and you can access it through your browser or any API testing tool.

## Routes

### Home Route

- URL: /
- Method: GET
- Description: Returns a JSON response with a welcome message and the timestamp of the request.
- Middleware:
  - `stamper`: Stamps the request object with the current timestamp.
  - `isAuth`: Logs a message indicating that the user is authenticated.
- Example Response:
  ```json
  {
    "code": 200,
    "message": "Welcome to the Home page",
    "time": "<timestamp>"
  }
### Bad Request Route
    URL: /bad
    Method: GET
Description: Demonstrates a bad request scenario by setting a request body and passing an error to the next middleware.
### Middleware:
badRequest: Sets the request body with a test payload and passes an error object to the next middleware.
Example Response:

  ```json
    {
      "message": "Not a Number"
    }
```
 ### Error Handling
The server includes middleware for handling 404 (page not found) and 500 (server error) scenarios. If a request is made to a route that doesn't exist, the 404 middleware will be triggered and return a JSON response with an error message. In case of any server errors, the 500 middleware will be invoked, and it will return a JSON response with an error message.
