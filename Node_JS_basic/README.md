# NodeJS Basics

## Description

This project focuses on learning the basics of Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine. You will learn how to run JavaScript using Node.js, use Node.js modules, read files, handle HTTP requests, and create servers using both the built-in HTTP module and Express.js. Additionally, you will learn to use tools like Babel and Nodemon to enhance your development workflow.

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using Node.js.
- Use Node.js modules.
- Read files synchronously and asynchronously using Node.js.
- Access command line arguments and environment variables using `process`.
- Create a small HTTP server using Node.js.
- Create a small HTTP server using Express.js.
- Create advanced routes with Express.js.
- Use ES6 with Node.js using Babel.
- Use Nodemon to develop faster.

## Requirements

- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x).
- All your files should end with a new line.
- A `README.md` file, at the root of the folder of the project, is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`.
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`.

## Setup

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/holbertonschool-javascript-coding.git
    cd holbertonschool-javascript-coding/Node_JS_basic
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the lint and test scripts to ensure everything is set up correctly:
    ```bash
    npm run lint
    npm run test
    ```

## Tasks

### Task 0: Executing basic JavaScript with Node.js
Create a function `displayMessage` in `0-console.js` that prints a string argument to STDOUT.

### Task 1: Using Process stdin
Create a program `1-stdin.js` that prompts for the user's name and prints a greeting.

### Task 2: Reading a file synchronously with Node.js
Create a function `countStudents` in `2-read_file.js` that reads a CSV file and logs the number of students in each field.

### Task 3: Reading a file asynchronously with Node.js
Create a function `countStudents` in `3-read_file_async.js` that reads a CSV file asynchronously and logs the number of students in each field.

### Task 4: Create a small HTTP server using Node's HTTP module
Create a small HTTP server in `4-http.js` that listens on port 1245 and responds with "Hello Holberton School!" for any endpoint.

### Task 5: Create a more complex HTTP server using Node's HTTP module
Enhance the server in `5-http.js` to handle the `/students` endpoint, which reads from the database and returns student information.

### Task 6: Create a small HTTP server using Express
Create a small HTTP server in `6-http_express.js` using Express that listens on port 1245 and responds with "Hello Holberton School!" for the root endpoint.

### Task 7: Create a more complex HTTP server using Express
Enhance the server in `7-http_express.js` to handle the `/students` endpoint, which reads from the database and returns student information.

### Task 8: Organize a complex HTTP server using Express
Create a full server in the `full_server` directory, using controllers, routes, and a utility function to read the database.

## Provided Files

### database.csv
A CSV file containing student information.

