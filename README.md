# wallpaper-changer
Programmatically set your desktop wallpaper to randomized image from the web, with Node.js and serpapi

## Getting Started

You need to have the latest versions of Node and Npm installed on your system. If you don’t already have Node and Npm installed you can visit the following link for help with this process: 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 

You will also need to sign up for a free Serpapi account at https://serpapi.com/users/sign_up.



1. Clone this repository.
 
2. Install the dependencies:

`npm install`


3. If you haven’t already signed up for a free Serpapi account go ahead and do that now by visiting https://serpapi.com/users/sign_up and completing the signup process.

4. Once you have signed up, verified your email, and selected a plan, navigate to https://serpapi.com/manage-api-key . Click the Clipboard icon to copy your API key. Then create a new file in your project directory called ‘.env’ and add the following lines: 

```
SERPAPI_KEY = “PASTE_YOUR_API_KEY_HERE"
PATH_TO_IMG="PATH_TO_DIRECTORY_TO_SAVE_IMAGES_IN'
```

You should now be able to run the script by typing `npm start` in your terminal.

You should see your desktop wallpaper change every minute.
