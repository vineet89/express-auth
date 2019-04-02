# Express user authentication set up

**Overview**

Every software project needs some form of authentication, authorization and user management.

1. Authentication - Checking the JWT(JSON Web Token) supplied with the request to make sure they had supplied correct credentials at some point in the past. Generally this data is encrypted with a key which is only known to the server.
2. Auhorization - The server can obtain data about user's role after decoding the supplied key. This information can then be used to determine if this user has the privelege to access the given API endpoint. 
3. User management - Users may be added or removed from the system. Their roles/privileges may be altered and so on.

The purpose of this project is to provide meaningful boiler plate code for getting the API off the ground quickly.

**Objectives**

* Providing good security defaults: Hashed passwords, JSON Web Tokens, 2FA etc.
* Extensibility - should be adaptable to any nature of project. Assumptions have been kept to a minimum
* Should be pluggable with any storage layer (Currently using MongoDB)

**How to use**

Create a file called dev.mjs inside server/config

```
const env = {
    dburl:"<Your_MONGO_URL>"
}

export default env
```

Then go to terminal and run

`npm start` or `npm run live` if you have nodemon installed and want hot reloading.

Use Postman to test the API.