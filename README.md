# register practice
To the Register form:
Add an action attribute of `/users`;
Add a method attribute of `post`.

In server.js:
Add `express.urlencoded()` middleware near the top of the file;
Create a `app.post` handler for `/users`.
Inside this handler, send a personalized response back to the user (but maybe don't send the password).
 
