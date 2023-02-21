# wallpaper-changer
Programmatically set your desktop wallpaper to randomized image from the web, with Node.js and serpapi

## Getting Started

You need to have the latest versions of Node and Npm installed on your system. If you don’t already have Node and Npm installed you can visit the following link for help with this process: 

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 

You will also need to sign up for a free Serpapi account at https://serpapi.com/users/sign_up.



1. Clone this repository.


2. Run `npm init` if you haven't already. Make sure your package.json includes the line `"type":"module"`:

```
{
  "name": "wallpaper-changer",  
  "version": "1.0.0",  
  "description": "Track Google Search Rankings with NodeJs and SerpApi",  
  "type": "module",  
  "main": "index.js",`  
```

Add a start script for convenience if it is not already there:
  
  ```
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },`
  ```
  
3. Install the dependencies:

`npm install serpapi dotenv wallpaper node-scheduler image-downloader`


4. If you haven’t already signed up for a free Serpapi account go ahead and do that now by visiting https://serpapi.com/users/sign_up and completing the signup process.

5. Once you have signed up, verified your email, and selected a plan, navigate to https://serpapi.com/manage-api-key . Click the Clipboard icon to copy your API key. Then create a new file in your project directory called ‘.env’ and add the following line: 

`SERPAPI_KEY = “PASTE_YOUR_API_KEY_HERE”"YOUR_KEY_HERE"`


You should now be able to run the script by typing `npm start` in your terminal.

You should see your desktop wallpaper change.
