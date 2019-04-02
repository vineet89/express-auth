# Express user authentication set up

**Overview**

Every software project needs some form of authentication, authorization and user management.

1. Authentication - Managing signed keys to authenticate user requests. This implementation will use JSON web tokens 
2. Auhorization - The server can obtain data about user's role after decoding the token supplied with request. This information can then be used to determine if this user has the privelege to access the given API endpoint, for example by using middleware function. 
3. User management - Users may be added or removed from the system. Their roles/privileges may be altered and so on.

The purpose of this project is to provide meaningful boiler plate code for getting the API off the ground quickly for projects which make use of these functions.

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