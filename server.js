const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({extended: true}));

// Do something with form data
app.post('/user',function(request,response){
  console.log(request.body);
  response.send(`<p>Thank you, ${request.body.name}!We will send newsletter updates to ${request.body.email}`)
})

app.use(function(request,response){
  response.status(404);
  response.send(`404: File Not Found`);
});

const PORT = process.env.PORT || 8000;
// Start server
app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})

