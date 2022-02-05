const express = require("express");
const userModel = require("./models");
const projectModel = require("./ProjectModels");
const app = express();
const cors = require('cors');
const fs = require('fs');


app.post("/adduser", cors(), async (request, response) => {
     debugger;
     console.log("request.body "+JSON.stringify(request.body));
     console.log("request.data "+JSON.stringify(request.data));
    const user = new userModel(request.body);  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      console.log("error.body "+error);
      response.status(500).send(error);
    }
});

app.post("/add_prj", cors(), async (request, response) => {
  const prj = new projectModel(request.body);  
  try {
    await prj.save();
    response.send(prj);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/uploaded_file", cors(), async (req, res) => {
  let files = req.body;
  try {
      fs.writeFile(files.fileName, files.data, "base64", function (err) {
        if(err)
          res.send(err);
        else
          res.end("Uploaded");
   });
  } catch (error) {
    res.status(500).send(error);
  }
 });



app.get("/users",  cors(),async (request, response) => {
    const users = await userModel.find({});
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/getproject",  cors(),async (request, response) => {
    const projrct = await projectModel.find({});
    try {
      response.send(projrct);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;