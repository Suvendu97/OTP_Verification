
# <span style="color:navy">Project Name:</span> *OTP_Verification*

## <span style="color:navy">Description:</span> send an OTP to user's phone and let him log in using that OTP

  

## <span style="color:navy">Technologies:</span>

- Node.js
- Express.js
- npm


## <span style="color:navy">Features:</span>

- Send OTP button
- POP UP asking to Enter the OTP
- Enter OTP and check if it matches to the actual OTP
- Redirect as per Success/failer and show the flash messages
- Note: instead of generating an OTP, I used static OTP(1234)

## <span style="color:navy">How to set it up on your local Computer?</span>
1) Clone the Package to your local System
2) Navigate to the folder wherein the project has been cloned
3) Open Terminal and type `npm install` [Make sure node is already installed in your system!]
4) Type `npm start`
5) The app should run on default port 8000 or if you've mentioned env port it'll run on that.

  
## <span style="color:navy">Project Setup:</span>

 

**<span style="color:darksalmon">Environment: </span>**  *Windows 10*
	
**<span style="color:darksalmon">NPM: </span>**
			

 - express
 - express-ejs-layouts
 - express-session
 - passport
 - body-parser
 - node-sass-middleware
 - connect-flash
 
 
 
  Commands to start the server, to install node-package-manager are:
```
npm start

```

**<span style="color:darksalmon">Other ApplicationsI used: </span>**

 - Google Chrome
 - vs code


## <span style="color:navy">Step By Step guide of developing:</span>

 - create index file for the project
 - set up the directory folder structure (eg: Controllers folder, assets folder, config folder, routes folder, views folder)
   - Controllers folder for all controllers functions
   - routes folder for all routes
   - config folder for middleware
   - views folder for views etc
- link the folders as required
- set up view engines
- create and setup layouts for all the pages that will be associated with the application
- create header and footer and include it to the main layout
- setup static file and create a new folder named assets
- setup scss
- setup sassMiddleware
- in routes folder => create index.js to handle all the incoming routes
- in coltrollers folder => create a controller file to handle all the function as per the requirements
- set up flash and sent the arguments of flash in the layout page so that we don't have to send flash argument while rendering a page

# 

## Feel free to give your feed back on how to improve this or what mistakes I committed, any kind of feedback will be appreciated 
#
# Thank You