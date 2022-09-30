const express = require("express")
let index_router = require("./routes/index")
let cors = require("cors")
let app = express()
let path = require("path");
let dotenv = require("dotenv");
let bodyParser = require('body-parser')


dotenv.config()

app.use(cors());

app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "html");
app.set("view engine", "ejs");

app.use(express.json())


app.use("/", index_router);
app.use(function (req, res, next) {
    next(createError(404));
  });

// app.use(bodyParser.json({ type: 'application/*+json' }))




app.use(function (err, req, res, next) {
  
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

  let port = process.env.PORT
  // console.log(port)
  
  app.listen(port, () => {
    console.log(`Server is running on port: ${process.env.PORT || port}`);
    
  });
  


module.exports = app