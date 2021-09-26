# Lead Management UI

## LeadManager

React based web application that leverages Express/ Nodejs in the Backend, and MySQL server for database

## Project Status

This project is a personal project and currently in development. Users can run the docker composer to get started and get project running.

## Installation and Setup Instructions

Clone down this repository. You will need `node`, `npm` and `Docker` installed globally on your machine.
Create `.env` file using the template `.env.development` and add appropriate values against the parameters.

- Installation: `npm install` server and ui to get `node_modules` installed respectively.  

Run `docker-compose.yml` by using command `docker-compose up -d` from the root of the project.

The above Docker configuration will run the mysql and ui client successfully, but fails to run server. 
As a workaround, switch off the server and run the server manually.

This can be done by 
- `docker ps` to get list of all running containers
- `docker stop <container_id>` to stop the server. 
- `npm start` from server root

## Tech Stack used

- React 17
- Material-UI for components and icons
- Nodejs server for backend
- MySql 5.7


## Reflection

This was a sample project I decided to undertake as an assignment. I started this process by using the provided boilerplate and then by adding the required libraries.

At the end of the day, the technologies implemented in this project are React, MySql, Javascript, Material-UI, and some amount of  Typescript in the backend, and styles.

Some of the design decisions I needed to make were
- For front-end I decided to use material-ui library (v5). Material UI presented me with clear components that matched the requirements. For styles I went ahead with `@emotion` styled components which provide a simpler way of overriding material-ui components. 
- On the server side, for making SQL connection, I went ahead with `mysql2`. I refrained from using an ORM since the queries were simpler and it would have added an extra overhead if an ORM was used.  

One of the main challenges I ran into was running the Docker container for server that would connect with MySQL successfully. Hence as we workaround, I had to come with an alternate solution. Due to project time constraints and other work comitments, I had to compromise on some UI accuracy and tests.

## TODOs

- In the next iteration I plan on adding tests to both backend and frontend.
- Additionally, I plan to improve the security of the Nodejs server by adding some middlewares, validators, etc. Additionally a logger can be added as well. 
- For making the backend more robust to handle complex queries, an ORM can be implemented. 
