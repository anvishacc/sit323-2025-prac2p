# SIT323 Cloud Native Application - Week 2, 2.1P Task

## Overview

In this task, I set up a basic Express.js server that serves a static HTML page. The process involved initializing the project, setting up the server, creating an HTML page, and pushing the code to GitHub. Since I have prior experience in coding, I added some style features to my HTML file to make the page more visually appealing rather than just a simple white background with black text.

## Steps

### Step 1: Initialize the Project

- I started by creating a new directory for the project.
- Ran `npm init -y` to initialize the project and create a `package.json` file.
- Installed Express.js using `npm install express`.

### Step 2: Create the Express Server

- I created a file named `app.js` to set up the Express server.
- Used Express to create a server that listens on port 3000.
- Configured the server to serve static files from the `public` folder.
- Ensured that the server would serve the `index.html` file from the `public` directory when accessed.

### Step 3: Create the HTML File

- I created an `index.html` file inside the `public` folder.
- Added content to the `index.html` file, including some basic HTML structure and some CSS to make the page more visually appealing.
- Included styling elements like color, layout, and positioning to enhance the design.

### Step 4: Set Up GitHub Repository

- Created a new GitHub repository named `sit323-2025-prac2p`.
- Initialized the local Git repository with `git init`.
- Added the remote repository using `git remote add origin <repository-url>`.

### Step 5: Commit and Push Code

- Added and committed the files using `git add .` and `git commit -m "Initial commit"`.
- Pushed the code to the GitHub repository using `git push -u origin master`.

### Step 6: Run the Application

- Started the server using `node app.js`.
- Opened a web browser and visited `http://localhost:3000` to test the application.
- The server correctly served the `index.html` page.

