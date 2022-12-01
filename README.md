# NewsDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

# Steps to run this app locally

1. Clone the repository in local and then run npm install.
2. This app also requires a fake backend server to perform the testing. So for that we need to clone another repository in local which is https://github.com/techiediaries/fake-api-jwt-json-server . After cloning run npm install and then `npm run start-auth`. This will start the backend server in local
3. After successfully setting up fake backend server, we need to run UI app with command `ng serve`. After this app will be running on port 4200. 
4. On launching the app, it'll take us to login page. There we can login or register.
5. Once step 4 is done, we are successfully logged in and app takes us to home page. This page has all the latest news and have 2 cateory which user can select to get different category of news.
6. On the top right bar, we have option to search as well. It takes us to search screen where we can fetch news on the basis of selected keyword. The news search page have pagination at the bottom which can be used to paginate over list of news. The default page size is 10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

