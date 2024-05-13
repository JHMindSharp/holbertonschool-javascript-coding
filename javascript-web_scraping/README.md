# JavaScript - Web Scraping

## Description

This project focuses on web scraping using JavaScript. You will learn to manipulate JSON data, use the `request` API, and read/write files using the `fs` module.

## Learning Objectives

- Understand the benefits of JavaScript programming
- Manipulate JSON data
- Use `request` API
- Read and write files using the `fs` module

## Requirements

- Ubuntu 14.04 LTS
- Node.js 10.14.x
- Semistandard compliant code (Standard + semicolons)
- Files must be executable and end with a new line
- No usage of `var`

## Installation

1. Install Node.js 10:
    ```bash
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

2. Install `semistandard` globally:
    ```bash
    sudo npm install semistandard --global
    ```

3. Install `request` globally:
    ```bash
    sudo npm install request --global
    ```

## Tasks

### 0. Readme
- Script: `0-readme.js`
- Reads and prints the content of a file.

### 1. Write me
- Script: `1-writeme.js`
- Writes a string to a file.

### 2. Status code
- Script: `2-statuscode.js`
- Displays the status code of a GET request.

### 3. Star wars movie title
- Script: `3-starwars_title.js`
- Prints the title of a Star Wars movie based on a given episode number.

### 4. Star wars Wedge Antilles
- Script: `4-starwars_count.js`
- Prints the number of movies where the character "Wedge Antilles" appears.

### 5. Loripsum
- Script: `5-request_store.js`
- Gets the content of a webpage and stores it in a file.

### 6. How many completed?
- Script: `6-completed_tasks.js`
- Computes the number of tasks completed by user id.
