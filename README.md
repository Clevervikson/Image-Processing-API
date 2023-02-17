# scripts needed to run

## Test to Run
npm run prettier --prettier
npm run lint ---eslint
npm run build 
npm run start
npm run test



## Server is running at 

[http://localhost:3000](http://localhost:3000).

Access the API endpoint, open the browser and enter this link on 

http://localhost:3000/api/images?name=santamonica.jpg&width=600&height=900





## Steps Taken
### Initialize your project. 
Add the dependencies required for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier. Complete your package.json file.

### Set up your project structure. 
Create folders and files for what you anticipate you will need for the project.

### Configure your middleware and dependencies. 
You have quite a few dependencies that all need to work together. Sometimes it's easiest to write some simple js functions to test that all of your dependencies work together before you begin adding any functionality.

### Set up your server and create an API endpoint. 
Even though this application is fairly straightforward, you still want to set it up in a scalable way. 

### Install Sharp and configure endpoint. 
Documentation for Sharp can be found here. It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.

### Write your tests. 
If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.

### Add caching. 
Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.

### Test, Debug, and Refactor. 
Think of edge-cases for your project and how someone may access your project. Should they get different error messages based on what's wrong? Make certain that your user isn't left in the dark when something goes wrong.

### Build, Document, and Submit. 
If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. Make sure you've provided all necessary information in your readme file, so your reviewer knows how to test your API. 