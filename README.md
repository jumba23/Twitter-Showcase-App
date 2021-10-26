# Twitter Travel App
Twitter Travel App is a web application build with a React front-end and Express back-end. The back-end uses the Twitter API to pull tweet information by username or keyword and send that information back to the front-end for display.

Try out the live version here: [Twitter Travel App](https://twitter-showcase-travel-app.herokuapp.com/)

# About the App
This app is based on one of my favorite hobies, traveling and experiencing different places. In effort to streamline the process of showing you some of my favorite twttier accounts I was using the Twitter API. Beside my favorite accounts you are free to search any other account, unrelated to my theme. 

There are three pages to this site: Home, Search, and Favorites.

# Home Page 

# Search Page 

# Favorites Page 

# Tools and Technologies 


  ## Client-side (Front-End)
  
The front-end of this project is built in React using create-react-app application. The entire site contains of a single page layout that changes content based on the current endpoint, for which I am using Axios. CSS styling and transitions are used to improve the user experience and also to make the site mobile responsive (including landscape layout). 

External resources and packages imported for this project are listed below.

   - Fonts: https://fonts.google.com/
   - Background image: https://unsplash.com/
   - Date and time: https://www.npmjs.com/package/moment/
   - Mobile menu icon: https://react-icons.github.io/react-icons/

  ## Server-side (Back-End)

The back-end for this site is created using Express.js. There are two routes defined for the backend: search and favorites. At this time I was using two different types of 
Twitter API searches available for the purose of working with two different data loads and parsing them.

   - "Search" route is used to return tweets by screen_name. Here, I am using Twitter [Standard v1.1](https://developer.twitter.com/en/docs/twitter-api/v1) API search.

   - "Favorites" route is used to return tweets by user_ID. Here, I am using Twitter [Twitter API v2](https://developer.twitter.com/en/docs/twitter-api/early-access) API search.
        
For each route endpoint, Axios is using Twitter's API to pull the requested data (tweet text, profile image, media links, etc.), which is then reformated and sent to the front-end for display. 

Additional Resources:

   - Twitter API: https://developer.twitter.com/en/docs/twitter-api

# Running Locally
The below instructions can be followed if you want to run this project locally for custom development or enhancements:

  ## Setup locally

  - Fork this repository to your Github account
  - On your local computer, navigate to the folder you want to store the project: cd PROJECT-FOLDER-NAME
  - Clone the forked repository locally: git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

  ## Start Server

   - Navigate to project folder: cd PROJECT-FOLDER-NAME/twitter-showcase
   - Install dependencies: npm install
   - Start server in development node: npm run dev
   - Add .env file to twitter-showcase folder
      - Add variable PORT=4000 
      - Add variable BEARER_TOKEN and set your bearer token for your Twitter account
          - if you don't have a bearer token, you can create an account [HERE](https://developer.twitter.com/en/apply-for-access) and use your account to generate bearer tokens. Instructions on how to create bearer tokens can be found [HERE](https://developer.twitter.com/ja/docs/basics/authentication/guides/access-tokens).
          - if you already have a Twitter account and don't have your bearer token saved, you can generate a new one, but you will need to update any existing application with the new token value

  ## Start Client

  - Open a new terminal window
  - Navigate to the client folder: cd PROJECT-FOLDER-NAME/twitter-showcase/client
  - Install dependencies: npm install
  - Start the React application: npm start
  - View the application in your browser at http://localhost:3000

# Author
Goran Cvetic - Software Developer - [LinkedIn](https://www.linkedin.com/in/goran-cvetic-9aaa4288/) 
