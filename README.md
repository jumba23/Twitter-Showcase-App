# Twitter Travel App
Twitter Travel App is a web application built with a React front-end and Express back-end. The back-end uses the Twitter API to pull tweet information by username or keyword and send that information back to the front-end for display.

Try out the live version here: [Twitter Travel App](https://twitter-showcase-travel-app.herokuapp.com/)

# About the App
This app is based on one of my favorite hobbies; traveling and experiencing different places. In an effort to streamline the process of showing you some of my favorite twitter accounts, I was using the Twitter API. Along with "my favorite accounts", the user is free to search any other accounts, unrelated to my theme. 

Tweet features:

  - if you select @[username] the link will take you directly to the official Twitter page for that account. A page will open in a new window.
  - display an image in full screen once you click/tap on the image. Another click/tap will bring you back.

There are three pages to this site: Home, Search, and Favorites.

### Home Page 
The Home page provides very simple and straight-forward options for a user with easy-to-navigate menu above. A quotation at the bottom will change with each reload of the page.

![Twitter App - Home Page](https://user-images.githubusercontent.com/80366503/138932621-ee56a32f-2263-44ab-b5e7-1848749841f5.png)

### Search Page 
The Search page allows the user to search by @user or keyword. Usernames do not need be entered using @[username]. 

![Twitter App - Search Page](https://user-images.githubusercontent.com/80366503/138943638-e533bf7f-7d44-474b-b68c-ed3e454f992a.gif)

### Favorites Page 
The Favorites page contains five separate buttons, each with destination name I have selected. Pressing one of these buttons will pull the latest tweets by that Twitter account and display the ten most recent ones for the user to scroll through.

![Twitter App - Favorites Page](https://user-images.githubusercontent.com/80366503/138945943-b07c17fd-0c8b-4521-bb5d-5c69bd3df35b.gif)

# Tools and Technologies 


### ***Client-side (Front-End)***

The front-end of this project is built in React using create-react-app application. The entire site contains a single page layout that changes content based on the current endpoint. For API requests I am using Axios. CSS styling and transitions are used to improve the user experience and to make the site mobile responsive (including landscape layout). 

External resources and packages imported for this project are listed below.

   - Fonts: https://fonts.google.com/
   - Background image: https://unsplash.com/
   - Date and time: https://www.npmjs.com/package/moment/
   - Mobile menu icon: https://react-icons.github.io/react-icons/

### ***Server-side (Back-End)***

The back-end for this site is created using Express.js. There are two routes defined for the backend: search and favorites. I use two different types of 
Twitter API searches for the purpose of working with two different data loads and parsing them.

   - "Search" route is used to return tweets by screen_name. Here, I am using Twitter [Standard v1.1](https://developer.twitter.com/en/docs/twitter-api/v1) API search.

   - "Favorites" route is used to return tweets by user_ID. Here, I am using Twitter [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api/early-access) API search.
        
For each route endpoint, Axios is using Twitter's API to pull the requested data (tweet text, profile image, media links, etc.), which is then reformated and sent to the front-end for display. 

Additional Resources:

   - Twitter API: https://developer.twitter.com/en/docs/twitter-api

### ***Deployment***

For web deployment I use [Heroku](https://www.heroku.com/). Heroku is a container-based cloud Platform as a Service (PaaS). The platform is flexible and easy to use while porviding the simplest path to getting an app to market. 

# Running Locally
The below instructions can be followed if you want to run this project locally for custom development or enhancements:

### ***Setup locally***

  - Fork this repository to your GitHub account
  - On your local computer, navigate to the folder you want to store the project: cd PROJECT-FOLDER-NAME
  - Clone the forked repository locally: git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

### ***Start Server and Client***
   
   - Navigate to project folder: ***cd PROJECT-FOLDER-NAME/client***
      - Install dependencies: npm install or npm i
   
   - Navigate to project folder: ***cd PROJECT-FOLDER-NAME/server***
      - Install dependencies: npm install or npm i
      - Add .env file to twitter-showcase folder
         - Add variable PORT=4000 
         - Add variable BEARER_TOKEN and set your bearer token for your Twitter account
             - If you don't have a bearer token, you can create an account [HERE](https://developer.twitter.com/en/apply-for-access) and use your account to generate bearer tokens. Instructions on how to create bearer tokens can be found [HERE](https://developer.twitter.com/ja/docs/basics/authentication/guides/access-tokens).
             - If you already have a Twitter account and don't have your bearer token saved, you can generate a new one, but you will need to update any existing application with the new token value.

       - Start the server and the client simultaneously in development node: npm run dev 

# Author
Goran Cvetic - Software Developer - [LinkedIn](https://www.linkedin.com/in/goran-cvetic/) 
