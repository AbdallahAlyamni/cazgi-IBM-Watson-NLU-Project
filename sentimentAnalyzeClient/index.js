const express = require('express');

const app = new express();

app.use(express.static('build/'))

// //The default endpoint for the webserver
// app.get("/",(req,res)=>{
//     express.static('build/');
//   });

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

