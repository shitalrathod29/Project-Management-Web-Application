const Router = require("./routes")
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const path = require('path')


const app = express();
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json());

//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
   // useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" Mongo Connected successfully");
});

app.use(Router);

mongoose.Promise = global.Promise;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(cors());

app.use(function(req, res, next) {
   //req.header("Access-Control-Allow-Origin", "*");
   req.header('Content-Type', 'application/json');
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})



//headers to avoid cors error

app.use((req , res , next )=> {
	res.setHeader('Access-Control-Allow-Origin' ,'*');
	res.setHeader('Access-Control-Allow-Methods' ,'GET , POST , PUT , PATCH , DELETE');
	res.setHeader('Access-Control-Allow-Headers' ,'Content-Type, X-Requested-With , Accept , Origin, authorization'  );
	res.setHeader('Access-Control-Expose-Headers' , 'authorization');
	next();

});

// 404 Error
app.use((req, res, next,err) => {
  res.status(404).send("<-ERROR->");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
// app.use(bodyParser.json({ limit: '50mb' }))



