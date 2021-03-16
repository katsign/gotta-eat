![Burger Icon](/public/assets/img/favicon.ico)

# Handlebars Burger Log
![GitHub license](https://img.shields.io/badge/License-MIT-orange)

### This simple full-stack application uses Node, Express, MySQL and the templating engine Handlebars to display logs of newly-ordered and devoured burgers.

## *Table of Contents*

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Questions](#questions)

## *Description*
This application uses Handlebars and Express to serve static files in a dynamic way and sources data from a connected MySQL database. Whenever a user submits a burger's name, the app displays the burger in the "Order Up" column — waiting to be devoured. This can then be clicked into the "Devoured" section. The app will store every burger in the database, devoured or not. 

## *Installation*
### Open the repository folder in your prefered code editor and pull up the built-in terminal. You will need Node.js installed to run this application.
- Type `npm i` to pull the project dependencies to your local.
- Navigate to the `/config` folder and update the MySQL connection information to match your own Workbench instance.

## *Usage*
### 📍 [View the deployment on Heroku](https://katsign-gotta-eat.herokuapp.com/)
- To start the development server, type `npm start` in your terminal.
- To add a new order to the database, click into `Add a New Burger`, input your new item, then press `Order`.
- Move items between the `Order Up` and `Devoured` columns by clicking the corresponding buttons.
- Delete entries by clicking the trash icon.


## *Screenshots*
![Demo of Homepage](/public/assets/img/ss.png)

## *Questions?*
- My Profile: [katsign](https://github.com/katsign)

---
This project is MIT licensed. &copy; 2021
