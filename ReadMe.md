

This assignment is a burger logger with MySQL, Node, Express, Handlebars and an ORM using MVC as the file structure. Node and MySQL is used to query and route data in the app, and Handlebars generates the HTML.

The resultant app is deployed to Heroku at https://tranquil-harbor-61441.herokuapp.com/ and its github page is https://github.com/dcon0610/Eat-Da-Burger


Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. Your app will store every burger in a database, whether devoured or not.



Technologies used

1. node JS

2. express

3. express-handlebars

4. Create a server.js file.

5. mysql (deployed using JawsDB)


Database

The database folder contains files named `schema.sql` and `seeds.sql`. This file

   * Creates the `burgers_db`.
   * Switches to or use the `burgers_db`.
   * Creates a `burgers` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.

`Seeds.sql` contains insert queries to populate the `burgers` table with entries.



#### Config 

The folder named `config` contains a `connection.js` file inside `config` directory which contains the login and connection information for the database on Heroku. 

The ORM contains three methods: 

     * `selectAll()` - to find all data in the database
     * `insertOne()` - to create a new burger
     * `updateOne()` - to change a burger from not devoured to devoured (changes a boolean value)


#### Model 

 `burger.js`, contains the code that will call the ORM functions using burger specific input for the ORM.

#### Controller 

The controller.js file uses express router to set up the node routes for the front end to and uses burger.js to interact with the database.


#### View setup

The views folder contains:

   * A `index.handlebars` file inside `views` directory.

   * `layouts` directory inside `views` directory.

   * `main.handlebars` file inside `layouts` directory.

   * `main.handlebars` file so it's able to be used by Handlebars.

   * `index.handlebars` to have the template that Handlebars can render onto.



